import { Schema, Document } from 'mongoose';

export interface Log extends Document {
  timestamp: Date;
  eventType: string;
  baseUrl: string;
  originalUrl: string;
  requestMethod: string;
  payload: Record<string, any>;
  logLevel: string;
  service: string;
  sourceIp: string;
  headers:  Record<string, any>;
}

export const LogSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  eventType: { type: String, required: true },
  originalUrl: { type: String, required: true },
  baseUrl: { type: String, required: true },
  requestMethod: { type: String, required: true },
  payload: { type: Object, required: true },
  logLevel: { type: String, required: true },
  service: { type: String, required: true },
  sourceIp: { type: String, required: true },
  headers: { type: Object, required: true },
});
