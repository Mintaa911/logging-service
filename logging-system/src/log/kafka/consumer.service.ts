import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';

@Injectable()
export class ConsumerService implements OnModuleDestroy {
  private readonly kafka: Kafka;
  private readonly consumer: Consumer;

  constructor() {
    this.kafka = new Kafka({
      clientId: 'nest-logger',
      brokers: ['localhost:9092'], // Update with your Kafka broker addresses
    });

    this.consumer = this.kafka.consumer({ groupId: 'user-log-activity-group' });
  }

  async consume(
    topicConfig: { topics: string[] },
    eachMessageHandler: (payload: EachMessagePayload) => Promise<void>,
  ) {
    await this.consumer.connect();
    await this.consumer.subscribe(topicConfig);

    await this.consumer.run({
      eachMessage: eachMessageHandler,
    });
  }

  async onModuleDestroy() {
    await this.consumer.disconnect();
  }
}
