import { FoodHelper } from '../helpers/food-model-helper'
import { FoodModel } from '../models/food-model'

describe('classes', () => {
  it('Class Vehicle model', () => {
    const food = new FoodModel({ name: 'rice', description: 'nice food', price: 200 })

    expect(food.getFood()).toEqual(food)
    expect(food.getName()).toEqual('rice')
    expect(food.getDescription()).toEqual('nice food')
    expect(food.getPrice()).toEqual(200)
  })

  it('food helper', () => {
    const foodHelper = new FoodHelper()
    expect(foodHelper).toEqual(foodHelper)
  })
})
