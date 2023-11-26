import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

export const administrateurGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);

  const authService = inject(AuthService);

  if (authService.isAuthenticated())
  {
    return true;
  }
  else
  {
    router.navigate(['/extranet']);
    return false;
  }
};
