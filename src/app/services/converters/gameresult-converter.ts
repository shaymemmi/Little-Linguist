import { FirestoreDataConverter } from "firebase/firestore";
import { QueryDocumentSnapshot } from "@angular/fire/firestore";
import { GameResult } from "../../../shared/model/game-result";

export const gameResultConverter: FirestoreDataConverter<GameResult> = {
    toFirestore(gameResult: GameResult) {
        return {
            gameId: gameResult.gameId,
            categoryId: gameResult.categoryId,
            date: gameResult.date,
            points: gameResult.points
        };
    },
    fromFirestore(snapshot: QueryDocumentSnapshot): GameResult {
        const data = snapshot.data();
        return new GameResult(
            data["gameId"],
            data["categoryId"],
            data["date"].toDate(), // Convert Firestore Timestamp to Date
            data["points"]
        );
    }
};
