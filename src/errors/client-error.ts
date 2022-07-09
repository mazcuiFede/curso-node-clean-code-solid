export class MissingFormalParameter extends Error {
  constructor (public message: string) {
    super(`Error in parameter: ${message}`)
  }
}
