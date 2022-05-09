import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
})
export class CategoryCreateComponent implements OnInit {
  @Output() createUpdate = new EventEmitter();

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}

  add(name: String): void {
    console.log(name);
    name = name.trim();

    if (!name) return;

    this.createUpdate.emit();

    this.categoryService
      .addCategory({ name } as Category)
      .subscribe((category) => {
        this.categories.push(category);
      });
  }
}
