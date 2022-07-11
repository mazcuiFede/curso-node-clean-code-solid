import { VehicleHelper } from '../helpers/vehicle-model-helper'
import { VehicleModel } from '../models/vehicle-model'

describe('classes', () => {
  it('Class Vehicle model', () => {
    const vehicleModel = new VehicleModel({
      name: 'nissan',
      model: 'DXT',
      year: 2020
    })

    expect(vehicleModel.getName()).toEqual('nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getYear()).toEqual(2020)
  })

  it('vehicle helper', () => {
    const vehicleHelper = new VehicleHelper()
    expect(vehicleHelper).toEqual(vehicleHelper)
  })
})
