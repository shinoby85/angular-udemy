import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from './auth.service';
import {exhaustMap, take} from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  return authService.user.pipe(
    take(1),
    exhaustMap(user => {
      const modifiedReq = user?.token ? req.clone({
        params: req.params.append('auth', user.token)
      }) : req;
      return next(modifiedReq);
    }));
};
