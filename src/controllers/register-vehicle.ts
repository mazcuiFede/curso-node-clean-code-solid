export class RegisterVehicle {
  handle (httpRequest: any): any {
    if (httpRequest.body.model === 3) { // To fix
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
