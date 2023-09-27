import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { User } from "../_models/user";
import { AccountService } from "../_services/account.service";
import { take } from "rxjs";

@Directive({
  selector: '[appHasRole]' // *appHasRole='["Admin", "Thing"]'
})
export class HasRoleDirective {
  @Input() appHasRole: string[] = [];
  user: User = {} as User;

  constructor (private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>, private accountService: AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => {
        if (user) this.user = user;
      }
    })
  }

}
