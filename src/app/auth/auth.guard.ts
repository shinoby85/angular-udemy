import {CanMatchFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from './auth.service';
import {map, take} from 'rxjs/operators';

export const authGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  return authService.user.pipe(
    take(1),
    map(user => {
      // return !!user || new RedirectCommand(router.parseUrl('/auth'));
      const isAuth = !!user;
      if (isAuth) {
        return true;
      }
      return router.createUrlTree(['/auth']);
    })
  );
};
