import { vehicleHelper } from '../helpers/vehicle-model-helper'

export class VehicleModel {
  constructor (private readonly vehicle: vehicleHelper) {
  }

  getYear (): number {
    return this.vehicle.year
  }

  getModel (): string {
    return this.vehicle.model
  }

  getName (): string {
    return this.vehicle.name
  }
}
