import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './component/material/material.module';
import { MatTabsModule } from '@angular/material/tabs';
import { RegistrationComponent } from './component/registration/registration.component';
import { UsersComponent } from './component/users/users.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserDeleteComponent } from './component/user-delete/user-delete.component';
import { UserEditComponent } from './component/user-edit/user-edit.component';
import {MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './interceptors/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UsersComponent,
    UserDeleteComponent,
    UserEditComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DropDownListModule,
    MatTabsModule,
    MatAutocompleteModule,
    MaterialModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    RouterModule


  ],
  exports: [
    MatTabsModule,
    MatAutocompleteModule,
    MaterialModule,
    MatExpansionModule,
    MatToolbarModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
