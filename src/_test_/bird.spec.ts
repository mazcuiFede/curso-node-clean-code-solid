import { Bird, Eagle, Penguin } from '../models/bird-model'

describe('Fly bird', () => {
  test('Should fly', () => {
    const bird = new Bird({
      name: 'Big Eagle',
      age: 30,
      origen: 'North America'
    })

    expect(bird.fly()).toEqual(true)
  })

  test('Should fly', () => {
    const eagle = new Eagle({
      name: 'Big Eagle',
      age: 30,
      origen: 'North America'
    })

    expect(eagle.fly()).toEqual(true)
  })

  test('Shouldn+t fly', () => {
    const penguin = new Penguin({
      name: 'Big Eagle',
      age: 30,
      origen: 'North America'
    })

    expect(penguin.fly()).toStrictEqual(new Error('I cant fly'))
  })

  test('Should walk and swing', () => {
    const penguin = new Penguin({
      name: 'Penguin',
      age: 30,
      origen: 'North America'
    })

    expect(penguin.walk()).toBe(true)
    expect(penguin.swing()).toBe(true)
  })
})
