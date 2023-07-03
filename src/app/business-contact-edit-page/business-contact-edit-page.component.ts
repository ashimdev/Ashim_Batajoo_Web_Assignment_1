import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessContactService } from '../endpoint-services/business-contact.service';
import { BusinessContact } from '../interfaces/business-contact.interface';

@Component({
  selector: 'app-business-contact-edit-page',
  templateUrl: './business-contact-edit-page.component.html',
  styleUrls: ['./business-contact-edit-page.component.scss']
})
export class BusinessContactEditPageComponent {
  public BusinessContactForm: any;
  private businessContactID: number | undefined;

  constructor(private _formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _businessContactService: BusinessContactService) { }

  ngOnInit() {
    this.initializeForm();
    this.readRouteParameters();
  }

  public OnClickSubmitForm() {
    if (this.BusinessContactForm.valid) {
      // Handle form submission logic
      alert("success");
    } else {
      // Form is invalid, display error messages
      this.markFormGroupTouched(this.BusinessContactForm);
    }
  }

  public IsInvalid(controlName: string) {
    return (
      this.BusinessContactForm.get(controlName).invalid &&
      (this.BusinessContactForm.get(controlName).dirty ||
        this.BusinessContactForm.get(controlName).touched)
    );
  }


  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  private initializeForm() {
    this.BusinessContactForm = this._formBuilder.group({
      contactName: ['', Validators.required],
      contactNumber: ['', Validators.pattern(/^\(\d{3}\)-\d{3}-\d{4}$/)],
      emailAddress: ['', [Validators.required, Validators.email]]
    });
  }

  private readRouteParameters() {
    this._activatedRoute.params.subscribe(params => {
      const businessContactID: string = params["businessContactID"];
      this.getBusinessContact(businessContactID);
    });
  }

  private getBusinessContact(businessContactID: string) {
    if (!businessContactID) {
      return;
    }

    this._businessContactService.GetByID(businessContactID)
      .subscribe({
        next: (businessContact: BusinessContact) => {
          this.BusinessContactForm.patchValue(businessContact);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}
