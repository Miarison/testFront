import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/api/user.service';
import { UserEditComponent } from '../user-edit/user-edit.component';

const ELEMENT_DATA: any[] = [

];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'lastname', 'username', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @Input()
  get newUser():any{return this._newUser}
  set newUser(newUser: any){
    this._newUser = newUser;
    if(this._newUser){
      this.dataSource.data.push(this._newUser);
      this.dataSource.data = this.dataSource.data;
    }
  }
  private _newUser: string='';

  constructor(private userService: UserService,
            public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }

  openDialog(id: number) {
    const user = this.dataSource.data.filter(data=>data.id === id);
    if (user.length > 0){
      const dialogRef = this.dialog.open(UserEditComponent, {
        data: user[0],
      });
      dialogRef.afterClosed().subscribe((editedUser :any) => {
        this.userService.update(editedUser)?.subscribe((data: any)=>{
          if(data.success){
            this.openSnackBar('User updated!', 'Close');
          }
          else{
            this.openSnackBar('Error', 'An error occured!');
          }
          const newData = []
          for (const user of this.dataSource.data) {
            if (user.id === editedUser.id){
              newData.push(editedUser);
            }
            else newData.push(user);
          }
          this.dataSource.data = newData;
        });
      });
    }

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.userService.getUsers()?.subscribe((users: any) => {
      if (users.success) {
        const data: any[] = []
        for (const user of users.data) {
          data.push({
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            username: user.username,
            password: user.password
          });
        }
        this.dataSource.data = data;
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteUser(userId: number){
    this.userService.delete(userId)?.subscribe((data :any)=> {
      if(data.success){
        const refreshedDataSource = this.dataSource.data.filter(data=>data.id !== userId);
        this.dataSource.data = refreshedDataSource;
      }
    });
  }


}
