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
    expect(httpResponse.body.message).toBe('error in: name')
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
    expect(httpResponse.body.message).toBe('error in: model')
  })
})
