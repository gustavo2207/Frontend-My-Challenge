import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  categories: Category[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories)
  }

  delete(name: String): void{
    this.categoryService.deleteCategory(name).subscribe()
  }
}
