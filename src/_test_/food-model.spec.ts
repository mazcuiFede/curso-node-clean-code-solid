import { FoodModel } from '../models/food-model'

describe('classes', () => {
  it('Class Vehicle model', () => {
    const food = new FoodModel({ name: 'rice', description: 'nice food', price: 200 })

    expect(food.getFood()).toEqual(food)
    expect(food.getName()).toEqual('rice')
    expect(food.getDescription()).toEqual('nice food')
    expect(food.getPrice()).toEqual(200)
  })
})
