export class InvalidArgument extends Error {
  constructor (public message: string) {
    super(message)
  }
}
