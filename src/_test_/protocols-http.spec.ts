import { InvalidArgument } from '../errors/invalid-arg'
import { UrlLogin } from '../protocols/protocols-http'

describe('Protocols http and querys', () => {
  test('Url Login', () => {
    const url = 'http://localhost:3000/login'
    const parsedUrl = UrlLogin.parseUrl(url)

    expect(parsedUrl.href).toBe(url)
  })

  test('test query', () => {
    const url = 'http://localhost:3000/login?uss=uss&name=john'
    const parsedUrl = UrlLogin.parseUrl(url)

    const expectedParameters = {
      uss: 'uss', name: 'john'
    }

    expect(parsedUrl.query).toEqual(expectedParameters)
  })

  test('invalid URL', () => {
    function expectedError (): void {
      UrlLogin.parseUrl('')
    }

    expect(expectedError).toThrowError(new InvalidArgument('invalid url'))
  })
})
