import { Team } from '../models/team-model'

describe('Test team class', () => {
  it('Position', () => {
    const team = new Team()

    const position = {
      name: 'goalKeeper',
      tShirtNumber: 1,
      skills: ['Kick Hard', 'Run fast', 'Jump high']
    }

    expect(team.position(position.name, position.tShirtNumber, position.skills)).toEqual(['goalKeeper', 1, ['Kick Hard', 'Run fast', 'Jump high']])
  })

  it('Other Position', () => {
    const team = new Team()

    const position = {
      name: 'Center',
      tShirtNumber: 2,
      skills: ['Kick Hard', 'Run fast']
    }

    expect(team.position(position.name, position.tShirtNumber, position.skills)).toEqual(['Center', 2, ['Kick Hard', 'Run fast']])
  })

  it('Soccer Player', () => {
    const soccerPayer = new Team()

    expect(soccerPayer.attacker('attacker')).toBe('attacker')
  })
})
