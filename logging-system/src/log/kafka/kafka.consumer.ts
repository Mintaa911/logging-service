import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { LogsService } from '../logs.service';
import { CreateLogDto } from '../dto/create-log.dto';

@Injectable()
export class KafkaConsumer implements OnModuleInit {
  constructor(
    private readonly consumerService: ConsumerService,
    private readonly logsService: LogsService,
  ) {}

  async onModuleInit() {
    await this.consumerService.consume(
      { topics: ['user-activity-logs'] },
      async ({ topic, partition, message }) => {
        const logData: CreateLogDto = JSON.parse(message.value.toString());
        await this.logsService.processLog(logData);
      },
      
    );
  }
}
