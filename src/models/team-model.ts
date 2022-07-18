import { ITeam, ISoccerPlayer } from '../interfaces/ITeam'

export class Team implements ITeam, ISoccerPlayer {
  attacker (name: string): string {
    return name
  }

  position (name: string, tShirtNumber: number, skills: any[]): any[] {
    return [name, tShirtNumber, skills]
  }
}
