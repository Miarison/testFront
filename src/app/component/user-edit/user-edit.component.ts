import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  hide = true;
  id: number = -1;
  name: string = '';
  lastname: string = '';
  username: string = '';
  password: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public user: any, public dialogRef: MatDialogRef<UserEditComponent>) {
    this.id = user.id;
    this.name = user.name;
    this.lastname = user.lastname;
    this.username = user.username;
    this.password = user.password;
  }

  ngOnInit(): void {
  }
  onSubmit(userForm: NgForm) {
    const user = {
      id: this.id,
      name: userForm.value.name,
      lastname: userForm.value.lastname,
      username: userForm.value.username,
      password: userForm.value.password
    }
    this.closeDialog(user);
  }

  closeDialog(user: any){
    this.dialogRef.close(user);
  }
}
