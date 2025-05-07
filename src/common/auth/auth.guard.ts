import {
  CanActivate,
  ExecutionContext,
  Injectable,
  // UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // throw new UnauthorizedException();
    console.log(`Guard: checking authencation`);
    const request = context.switchToHttp().getRequest();
    const apiKey = request.header(`x-api-key`);
    if (apiKey !== `SECRET`) {
      console.log(`Guard: failed authencation`);
      return false;
    }
    console.log(`Guard: passed authencation`);
    return true;
  }
}
