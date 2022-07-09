import { foodHelper } from '../helpers/food-model-helper'

export class FoodModel {
  getPrice (): number {
    return this.food.price
  }

  getDescription (): string {
    return this.food.description
  }

  getName (): string {
    return this.food.name
  }

  constructor (private readonly food: foodHelper) {

  }
}
