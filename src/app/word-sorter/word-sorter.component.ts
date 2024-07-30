import { Component,Input,OnInit } from '@angular/core';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-word-sorter',
  standalone: true,
  imports: [],
  templateUrl: './word-sorter.component.html',
  styleUrl: './word-sorter.component.css'
})
export class WordSorterComponent implements OnInit {
  category!: Category | undefined;
  @Input() id!: any;
  constructor(private catService: CategoriesService) {}
  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
  let conv2Number = parseInt(this.id);
    this.category = this.catService.get(conv2Number);
  }
}