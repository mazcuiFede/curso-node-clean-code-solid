import { PenModel } from '../models/pen-model'

describe('pen', () => {
  test('write', () => {
    const pen = new PenModel('hola mundo')
    expect(pen.write()).toBe('hola mundo')
  })
})
