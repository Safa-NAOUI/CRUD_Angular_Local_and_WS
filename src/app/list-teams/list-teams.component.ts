import { Component, OnInit } from '@angular/core';
import { Player } from '../entities/models';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {
  listOfTeams: Player[] 

  constructor(private player: PlayerService) { }

  ngOnInit(): void {
    this.listOfTeams=this.player.GetlistOfPlayer()
  }


}
