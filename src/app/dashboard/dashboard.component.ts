import { Component, Injectable, OnInit,NgModule } from '@angular/core';
import { GameResult } from '../../shared/model/game-result';
import { GameService } from '../services/user-activity.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  gameResults: GameResult[] = [];
  gamesPlayedLastMonth: number = 0;
  consecutiveGameDays: number = 0;

  constructor(private gameService: GameService) {}

  async ngOnInit() {
    //this.gameResults = await this.gameService.list();
    this.gameResults = await this.gameService.list();
    this.gamesPlayedLastMonth = await this.gameService.getGamesPlayedInLastMonth();
    this.consecutiveGameDays = await this.gameService.getConsecutiveGameDays();
    console.log(this.gamesPlayedLastMonth,this.consecutiveGameDays)
  }

  calculateCategoriesLearnt(): number {
    const categories = new Set(this.gameResults.map(game => game.categoryId));
    return categories.size;
  }

  calculateCategoriesNotLearnt(totalCategories: number): number {
    return totalCategories - this.calculateCategoriesLearnt();
  }

  calculatePerfectGames(): number {
    const perfectGames = this.gameResults.filter(game => game.points === 100).length;
    return (perfectGames / this.gameResults.length) * 100;
  }

  calculateCategoriesStudiedPercentage(totalCategories: number): number {
    return (this.calculateCategoriesLearnt() / totalCategories) * 100;
  }

  getHighestScoreGame(): string {
    const highestScoreGame = this.gameResults.reduce((max, game) => game.points > max.points ? game : max, this.gameResults[0]);
    return highestScoreGame ? highestScoreGame.gameId : 'N/A';
  }

  calculateDaysStreak(): number {
    return this.consecutiveGameDays;
  }

  calculateGamesThisMonth(): number {
    const currentMonth = new Date().getMonth();
    return this.gameResults.filter(game => game.date.getMonth() === currentMonth).length;
  }
  getTotalPoints() {
    let totalPoints=0;
    this.gameResults.forEach((game)=> {
     totalPoints =+ game.points;
    })
    return totalPoints;
  }
}


