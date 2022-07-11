import { FoodHelper } from '../helpers/food-model-helper'

export class FoodModel {
  getFood (): FoodHelper {
    return Object.assign(this, this.food)
  }

  getPrice (): number {
    return this.food.price
  }

  getDescription (): string {
    return this.food.description
  }

  getName (): string {
    return this.food.name
  }

  constructor (private readonly food: FoodHelper) {

  }
}
