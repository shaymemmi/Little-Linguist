import { FirestoreDataConverter } from "firebase/firestore";
import { Category } from "../../../shared/model/category";
import { TranslatedWord } from "../../../shared/model/translated-word";
import { Firestore, QueryDocumentSnapshot, SnapshotOptions, Timestamp } from "@angular/fire/firestore";
export const categoryConverter: FirestoreDataConverter<Category> = {
    toFirestore(category: Category) {
        return {
            name: category.name,
            origin: category.origin,
            target: category.target,
            lastUpdateDate: Timestamp.fromDate(category.lastUpdateDate),
            words: category.words.map(word => ({
                origin: word.origin,
                target: word.target,
                guess: word.guess
            }))
        };
    },
fromFirestore(snapshot: QueryDocumentSnapshot,options: SnapshotOptions): Category {
        const data = snapshot.data(options);
        const words = data["words"];
        const category = new Category(
            snapshot.id,
            data["name"],
            data["origin"],
            data["target"]
        )
        if (words) {
        words.map((word: any) => new TranslatedWord(word.origin, word.target))
        category.words = words;
        }
        category.lastUpdateDate = data['lastUpdateDate'].toDate();
        return category;
    }

};
