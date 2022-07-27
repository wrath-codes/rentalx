import { Category } from "../models/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoryRepository";
/**
 * CategoriesRepository
 * Using DTO: Data Transfer Object
 */

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  // Create category
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  // Lists all categories
  list(): Category[] {
    return this.categories;
  }

  // Find category by name
  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };