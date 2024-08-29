import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLogDto } from './dto/create-log.dto';
import { Log } from './schemas/log.schema';

@Injectable()
export class LogsService {
  constructor(@InjectModel('Log') private readonly logModel: Model<Log>) {}

  async processLog(createLogDto: CreateLogDto): Promise<Log> {
    const newLog = new this.logModel(createLogDto);
    return newLog.save();
  }
}
