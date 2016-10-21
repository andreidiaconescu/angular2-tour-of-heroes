import {Directive, forwardRef, Inject} from '@angular/core';
import {NG_VALIDATORS, FormControl} from '@angular/forms';
import {EmailBlackListService}  from './email-blacklist.service';

@Directive({
    selector: '[validateEmail][ngModel],[validateEmail][formControl]',
    providers: [
        {provide: NG_VALIDATORS, useClass: EmailValidatorDirective, multi: true}
    ]
})
export class EmailValidatorDirective {

    emailBlackList:EmailBlackListService;

    constructor(@Inject(forwardRef(() => EmailBlackListService)) emailBlackList) {
        this.emailBlackList = emailBlackList;
    }

    validate(c:FormControl) {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }
}
