import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../Models/user";
import {UserService} from "../../Core/Services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() Rfp!:number;
  @Input() user!:User;
  @Output() sender=new EventEmitter<number>();


  send(id:number){
    this.sender.emit(id);

  }
  showCurrentUser(){
    alert(this.user.firstName);
  }


}
