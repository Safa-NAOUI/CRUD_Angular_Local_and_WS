import { Injectable } from '@angular/core';
import { Player } from '../entities/models';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  listOfPlayers: Player[]=[
    {
      number:12 ,
      name:"Lionel Messi",
      team:"Barcelone",
      picture:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564"
    },
    {
      number:14 ,
      name:"Cristiano Ronaldo",
      team:"Juventus F.C.",
      picture:"https://s.hs-data.com/bilder/spieler/gross/13029.jpg"
    },
    {
      number:45 ,
      name:"Kylian Mbappé",
      team:"PSG",
      picture:"https://s.hs-data.com/bilder/spieler/gross/284095.jpg"
    },
    {
      number:1 ,
      name:"Jadon Sancho",
      team:"Borussia Dortmund",
      picture:"https://s.hs-data.com/bilder/spieler/gross/366235.jpg"
    }
      
  ]

  constructor() { }

  GetlistOfPlayer()
  {
   return this.listOfPlayers
  }
}
