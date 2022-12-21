export interface Room{
    totalRooms:number;
    availableRooms:number;
    bookedRooms:number;
}

export interface RoomDetails{
    roomNo:number;
    roomType:string;
    roomPrice:number;
    roomAvailabe:boolean;
}