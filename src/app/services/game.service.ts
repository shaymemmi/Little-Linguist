import { Injectable } from '@angular/core';
import { GameProfile } from '../../shared/model/GameProfile';
@Injectable({
  providedIn: 'root'
})
export class GameService {
private games: GameProfile[] = [];

  constructor() {
    this.games.push(new GameProfile(1,'Word Sorter','Match each word to the correct translation','/word-sorter'));
    this.games.push(new GameProfile(2,'Mixed Letters','Reconstruct the words In the correct order','/mixed-letters'));
    this.games.push(new GameProfile(3,'King of Grammar','Help us amend this paragraph','/game3'))
   }
   getGames(): GameProfile[] {
    return this.games;
}
}