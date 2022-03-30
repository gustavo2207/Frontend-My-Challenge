import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = []

  constructor(private categoryServices: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryServices.getCategories()
    .subscribe(categories => this.categories = categories)
  }

}
