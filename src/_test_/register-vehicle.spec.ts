import { MissingFormalParameter } from '../errors/client-error'
import { RegisterVehicle } from './../controllers/register-vehicle'

describe('Register vehicle', () => {
  test('If name does not exists return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        // name: 'nissan',
        model: 'DXT',
        year: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toMatchObject(new MissingFormalParameter('error in: name'))
  })

  test('If model does not exists return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'nissan',
        // model: 'DXT',
        year: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toMatchObject(new MissingFormalParameter('error in: model'))
  })

  test('If year does not exists return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'nissan',
        model: 'DXT'
        // year: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toMatchObject(new MissingFormalParameter('error in: year'))
  })

  test('If everithing OK return 200', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'nissan',
        model: 'DXT',
        year: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body.message).toBe(undefined)
  })
})
