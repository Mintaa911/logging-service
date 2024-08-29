import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsService } from './logs.service';
import { KafkaConsumer } from './kafka/kafka.consumer';
import { ConsumerService } from './kafka/consumer.service';
import { LogSchema } from './schemas/log.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Log', schema: LogSchema }]),
  ],
  providers: [LogsService, KafkaConsumer, ConsumerService],
})
export class LogsModule {}
