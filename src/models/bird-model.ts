import { IBird } from '../interfaces/IBird'

export class Bird {
  constructor (public ibird: IBird) {
    Object.assign(this, ibird)
  }

  fly (): boolean {
    return this.ibird.name === 'Big Eagle'
  }
}

export class Eagle extends Bird {
  fly (): boolean {
    return true
  }
}

export class Penguin extends Bird {
  walk (): any {
    return true
  }

  swing (): any {
    return true
  }

  fly (): any {
    return new Error('I cant fly')
  }
}
