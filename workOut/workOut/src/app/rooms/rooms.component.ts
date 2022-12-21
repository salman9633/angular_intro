import { Component } from '@angular/core';
import { Room, RoomDetails } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
hotelName: string="Taj Hotel";
hideRooms:boolean=false
NoOfRooms:number=15;
rooms:Room={
  totalRooms:20,
  availableRooms: 10,
  bookedRooms: 10,
}
roomdetails:RoomDetails[]=[
  {
    roomNo:1,
    roomType:"single",
    roomPrice:2500,
    roomAvailabe:true,
  },
  {
    roomNo:2,
    roomType:"Double",
    roomPrice:4000,
    roomAvailabe:false,
  }  
]

toggle(){
  this.hideRooms=!this.hideRooms
}

}
