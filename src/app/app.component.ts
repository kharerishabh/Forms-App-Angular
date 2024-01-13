import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm
  defaultQuestion = 'pet'
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    //Setting form by setValue method
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    //Setting form by patchValue method
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }
  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  //Another way of Accessing Form using ViewChild.
  onSubmit () {
    console.log(this.signupForm);
    
  }
}
