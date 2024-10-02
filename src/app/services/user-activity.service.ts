import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, getDocs, doc, setDoc } from '@angular/fire/firestore';
import { categoryConverter } from './converters/category-converter';
import { Category } from '../../shared/model/category';
import { gameResultConverter } from './converters/gameresult-converter';
import { GameResult } from '../../shared/model/game-result';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameResultsCollection = collection(this.firestore, 'gameResults').withConverter(gameResultConverter);

  constructor(private firestore: Firestore) {}

  async addGameResult(gameResult: GameResult): Promise<void> {
    await addDoc(collection(this.firestore, 'gameResults').withConverter(gameResultConverter),
    gameResult);
  }

  async list(): Promise<GameResult[]> {
    const q = query(this.gameResultsCollection);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  }

  async update(existingCategory: Category): Promise<void> {
    const categoryDocRef = doc(
      this.firestore,
      'categories',
      existingCategory.id
    ).withConverter(categoryConverter);
    return setDoc(categoryDocRef, existingCategory);
  }
  async getGamesPlayedInLastMonth(): Promise<number> {
    const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const q = query(this.gameResultsCollection, where('date', '>=', firstDayOfMonth));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.length;
  }

  async getConsecutiveGameDays(): Promise<number> {
    const gameResults = await this.list();
    gameResults.sort((a, b) => b.date.getTime() - a.date.getTime());

    let streak = 0;
    let currentDate = new Date();

    for (const game of gameResults) {
      if (game.date.toDateString() === currentDate.toDateString()) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else if (game.date < currentDate) {
        break;
      }
    }


    return streak;
  }
}
