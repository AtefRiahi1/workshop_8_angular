import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {ListUserComponent} from "./list-user/list-user.component";
import {UsersComponent} from "./users/users.component";
import {AdduserComponent} from "./adduser/adduser.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {InvoiceListComponent} from "../invoice-list/invoice-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../Core/Services/user.service";
import { UserItemComponent } from './user-item/user-item.component';


@NgModule({
  declarations: [
    ListUserComponent,
    UsersComponent,
    AdduserComponent,
    EditUserComponent,
    UserItemComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersComponent
  ],
  providers: [InvoiceListComponent, UserService]
})
export class UserModule { }
