import { HttpResponse, HttpRequest } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    if ('model' in httpRequest.body) {
      return {
        statusCode: 400,
        body: new Error('error in: model')
      }
    }

    return {
      statusCode: 400,
      body: new Error('error in: name')
    }
  }
}
