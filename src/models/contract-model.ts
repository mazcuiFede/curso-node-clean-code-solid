import { IContract } from '../interfaces/IContract'

export class ContractModel {
  getMonthlyCost (): number {
    return this.contractModel.monthly_cost
  }

  getMonth (): number {
    return this.contractModel.month
  }

  getExpirationDate (): Date {
    return this.contractModel.expiration_date
  }

  getDateInit (): Date {
    return this.contractModel.date_init
  }

  getId (): string {
    return this.contractModel.id
  }

  constructor (public contractModel: IContract) {
    Object.assign(this, contractModel)
  }
}

export class ContractPremiumModel extends ContractModel {
  monthly_discount (): number {
    return this.contractModel.monthly_cost * 0.10
  }
}
