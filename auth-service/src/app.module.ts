import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import config from './config/config';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoUri), // Update with your MongoDB URI
    AuthModule,
  ],
})
export class AppModule {}
