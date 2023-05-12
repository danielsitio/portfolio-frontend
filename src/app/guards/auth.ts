import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { CanActivateFn, Router } from "@angular/router";
import { catchError, of } from "rxjs";

export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService)
    return authService.testIsLoggedIn();
}