export class CreateLogDto {
    readonly timestamp: Date;
    readonly eventType: string;
    readonly requestMethod: string;
    readonly baseUrl: string;
    readonly originalUrl: string;
    readonly payload: Record<string, any>;
    readonly logLevel: string;
    readonly service: string;
    readonly sourceIp: string;
    readonly headers: Record<string, any>;
  }
  