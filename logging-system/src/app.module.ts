import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsModule } from './log/logs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    LogsModule,
  ],
})
export class AppModule {}
