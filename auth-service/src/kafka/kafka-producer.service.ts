import { Injectable, OnModuleInit } from '@nestjs/common';
import { KafkaClient, Producer } from 'kafka-node';
import config from '../config/config';

@Injectable()
export class KafkaProducerService implements OnModuleInit {
  private producer: Producer;

  onModuleInit() {
    const client = new KafkaClient({ kafkaHost: config.kafkaHost });
    this.producer = new Producer(client);
    this.producer.on('ready', () => {
      console.log('Kafka Producer is connected and ready.');
    });

    this.producer.on('error', (err) => {
      console.error('Error in Kafka Producer:', err);
    });
  }

  async sendMessage(topic: string, message: any) {
    return new Promise<void>((resolve, reject) => {
      this.producer.send([{ topic, messages: JSON.stringify(message) }], (err, data) => {
        if (err) {
          console.error('Error sending message to Kafka:', err);
          reject(err);
        } else {
          console.log('Message sent to Kafka:', data);
          resolve();
        }
      });
    });
  }
}
