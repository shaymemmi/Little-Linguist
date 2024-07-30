import { Component , Input, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../../shared/model/category';
@Component({
  selector: 'app-mixed-letters',
  standalone: true,
  imports: [],
  templateUrl: './mixed-letters.component.html',
  styleUrl: './mixed-letters.component.css'
})

export class MixedLettersComponent implements OnInit {
@Input() id!: any;
category!: Category | undefined;

 constructor(private catService: CategoriesService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
  let conv2Number = parseInt(this.id);
    this.category = this.catService.get(conv2Number);
  }
}
