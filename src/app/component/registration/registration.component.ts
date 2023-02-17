import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationModel } from 'src/app/model/registration-model';
import { UserService } from 'src/app/services/api/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide: boolean = true;
  colorControl = new FormControl('primary');
  selectedRole: string = '';
  newUser: any = {};
  constructor(private userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(registrationForm: NgForm) {
    const registrationData = new RegistrationModel(registrationForm.value.firstname, registrationForm.value.lastname, registrationForm.value.username, registrationForm.value.password);
    this.userService.insert(registrationData)?.subscribe(data=>{
      if(data.success){
        this.openSnackBar('User created!', 'Close');
        registrationForm.resetForm();
        this.newUser = {
          id: data.data.insertId,
          firstName: registrationData.getName(),
          lastName: registrationData.getLastname(),
          email: registrationData.getLastname(),
          password: registrationData.getPassword(),
        }
      }
      else{
        this.openSnackBar('Error', 'An error occured!');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }
}
