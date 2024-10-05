import { Injectable } from '@angular/core';
import { Category } from '../../shared/model/category';
import { addDoc, collection, deleteDoc, doc, DocumentSnapshot, Firestore, getDoc, getDocs, QuerySnapshot, setDoc } from '@angular/fire/firestore'
import { categoryConverter } from './converters/category-converter';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firestoreService: Firestore) {}

  async list(): Promise<Category[]> {
    const collectionConnection = collection(
    this.firestoreService,
    'categories'
    ).withConverter(categoryConverter);
    const querySnapshot: QuerySnapshot<Category> = await getDocs(
    collectionConnection
    );
    const result:any = [];
    querySnapshot.docs.forEach((docSnap: DocumentSnapshot<Category>) => {
    const data = docSnap.data();
    if (data) {
    result.push(data);
    }
    });
    return result;
  }

  async get(id: string): Promise<Category| undefined> {
   const CategoryDocRef = doc(this.firestoreService, 'categories', 
   id).withConverter(
    categoryConverter
    );
    return (await getDoc(CategoryDocRef)).data();
   }

    async add(newCategoryData: Category) {
     await addDoc(
      collection(this.firestoreService, 'categories').withConverter(
      categoryConverter
      ),
      newCategoryData
      );
  }
  async update(existingCategory: Category): Promise<void> {
    const categoryDocRef = doc(
    this.firestoreService,
    'categories',
    existingCategory.id
    ).withConverter(categoryConverter);
    return setDoc(categoryDocRef, existingCategory);
   }

  async delete(existingCategoryId: string) {
      const categoryDocRef = doc(
      this.firestoreService,
      'categories',
      existingCategoryId
      ).withConverter(categoryConverter);
      return deleteDoc(categoryDocRef);
     }
}
