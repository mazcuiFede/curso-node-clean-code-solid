export class PenModel {
  constructor (private readonly message: string) {}

  write (): string {
    return this.message
  }
}
