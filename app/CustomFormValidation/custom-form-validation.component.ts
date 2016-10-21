import {Component, OnInit}      from '@angular/core';


@Component({
    // selector: 'my-hero-detail',
    templateUrl: 'app/CustomFormValidation/custom-form-validation.component.html',
    // styleUrls: ['custom-form-validation.component.css']
})
export class CustomFormValidationComponent implements OnInit {

    formModel:Object = {
        email: <string>''
    };

    constructor() {
    }

    ngOnInit():void {
    }

    onSubmit(formValues) {

    }
}

