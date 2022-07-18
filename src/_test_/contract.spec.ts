import { ContractModel, ContractPremiumModel } from '../models/contract-model'

describe('Class ContractModel', () => {
  it('Contract 12 month', () => {
    const contractModel = new ContractModel({
      id: '#001',
      date_init: new Date(2019),
      expiration_date: new Date(2020),
      month: 12,
      monthly_cost: 20
    })

    expect(contractModel.getId()).toBe('#001')
    expect(contractModel.getDateInit()).toStrictEqual(new Date(2019))
    expect(contractModel.getExpirationDate()).toStrictEqual(new Date(2020))
    expect(contractModel.getMonth()).toBe(12)
    expect(contractModel.getMonthlyCost()).toBe(20)
  })

  it('mothly discount 24 month premium', () => {
    const contractPremiumModel = new ContractPremiumModel({
      id: '#002',
      date_init: new Date(2019),
      expiration_date: new Date(2020),
      month: 12,
      monthly_cost: 300
    })

    expect(contractPremiumModel.monthly_discount()).toBe(30)
  })
})
