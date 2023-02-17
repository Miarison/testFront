import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';

const COMPONENTS = [
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatTabsModule
]

@NgModule({
  imports: [ COMPONENTS ],
  exports: [ COMPONENTS ],
})
export class MaterialModule { }
