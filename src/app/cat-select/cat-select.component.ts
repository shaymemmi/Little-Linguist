import { Component , Inject, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../../shared/model/category';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameProfile } from '../../shared/model/GameProfile';
RouterModule
@Component({
  selector: 'app-cat-select',
  standalone: true,
  imports: [MatSelectModule,CommonModule,FormsModule,RouterModule,MatButtonModule],
  templateUrl: './cat-select.component.html',
  styleUrl: './cat-select.component.css'
})
export class CatSelectComponent implements OnInit {
  categories: Category[]= [];
  gameSelected!: GameProfile;
  catSelected!: Category;

  constructor(private category: CategoriesService,@Inject(MAT_DIALOG_DATA) public data: GameProfile) {

  }
ngOnInit() {
this.gameSelected = this.data
this.category.list().then((result: Category[]) => {
  this.categories = result;
});
}
}
