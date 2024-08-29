import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { KafkaProducerService } from '../kafka/kafka-producer.service';
import { CreateLogDto } from 'src/dto/create-log.dto';

@Injectable()
export class KafkaLoggingMiddleware implements NestMiddleware {
  constructor(private readonly kafkaProducerService: KafkaProducerService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { headers, ip, baseUrl, originalUrl, body: { email } } = req
    const eventType = this.getEventType(req)
    res.on('finish', async () => {

      const logMessage: CreateLogDto = {
        timestamp: new Date(),
        requestMethod: req.method,
        eventType,
        baseUrl,
        originalUrl,
        payload: { email },
        logLevel: 'INFO',
        service: 'AuthService',
        sourceIp: ip,
        headers
      };

      
      // Asynchronously log the message without blocking the request flow
      setImmediate(async () => {
        try {
          await this.kafkaProducerService.sendMessage('user-activity-logs', logMessage);
        } catch (error) {
          console.error('Failed to log message to Kafka:', error);
        }
      });
    });

    next();
  }
  private getEventType(req: Request): string {
    if (req.baseUrl.includes('/auth/register')) {
      return 'register';
    } else if (req.baseUrl.includes('/auth/login')) {
      return 'login';
    }
    return 'unknown';
  }
}
