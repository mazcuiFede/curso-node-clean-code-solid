import { FoodModel } from '../models/food-model'

describe('classes', () => {
  it('Class Vehicle model', () => {
    const vehicleModel = new FoodModel({ name: 'rice', description: 'nice food', price: 200 })

    expect(vehicleModel.getName()).toEqual('rice')
    expect(vehicleModel.getDescription()).toEqual('nice food')
    expect(vehicleModel.getPrice()).toEqual(200)
  })
})
