import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  @Output() deleteUpdate = new EventEmitter()
  @Input() update!:Boolean

  categories: Category[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  ngDoCheck(){
    if(this.update) this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories)
  }

  delete(name: String): void{
    name=name.trim()
    this.deleteUpdate.emit()
    this.categoryService.deleteCategory(name).subscribe()
  }
}
