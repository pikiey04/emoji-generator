import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class AllExceptionsFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const switchHttp = host.switchToHttp();
    const request = switchHttp.getRequest<Request>();
    const response = switchHttp.getResponse<Response>();

    const isHttpException = exception instanceof HttpException;
    const statusCode = isHttpException ? exception.getStatus() : 500;

    response.status(statusCode);
    response.json({
      message: isHttpException ? exception['message'] : 'Internal server Error',
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
