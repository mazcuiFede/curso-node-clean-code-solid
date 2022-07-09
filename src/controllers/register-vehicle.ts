import { MissingFormalParameter } from '../errors/client-error'
import { HttpResponse, HttpRequest } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredProps = ['model', 'year', 'name']

    const propNotFound = requiredProps.find((prop) => httpRequest.body[prop] === undefined)

    if (propNotFound !== undefined) {
      return {
        statusCode: 400,
        body: new MissingFormalParameter(`error in: ${propNotFound}`)
      }
    }

    return {
      statusCode: 200,
      body: httpRequest
    }
  }
}
