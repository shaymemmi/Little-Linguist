import { Component,OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { GameService } from '../services/game.service';
import { GameProfile } from '../../shared/model/GameProfile';
import { CatSelectComponent } from '../cat-select/cat-select.component';
@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatDialogTitle,MatDialogContent,MatGridListModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})

export class GameListComponent implements OnInit {
  games: GameProfile[] = [];

  constructor(private gameService: GameService,private dialog:MatDialog) {}

  ngOnInit(): void {
      this.games = this.gameService.getGames();
  }
  openGame(game: GameProfile) {
    this.dialog.open(CatSelectComponent,{data : game})
  }
}
