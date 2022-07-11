import { VehicleHelper } from '../helpers/vehicle-model-helper'

export class VehicleModel {
  constructor (private readonly vehicle: VehicleHelper) {
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
