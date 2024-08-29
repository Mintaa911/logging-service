import { Module, MiddlewareConsumer } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { User, UserSchema } from '../schemas/user.schema';
import { KafkaLoggingMiddleware } from '../middleware/kafka.middleware';
import { KafkaProducerService } from '../kafka/kafka-producer.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: 'yourSecretKey', // Use environment variables in production
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy, KafkaProducerService],
  controllers: [AuthController],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(KafkaLoggingMiddleware).forRoutes('*');
  }
}
