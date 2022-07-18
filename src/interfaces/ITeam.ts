export interface ITeam {
  position: (name: string, tShirtNumber: number, skills: any[]) => any[]
}

export interface ISoccerPlayer {
  attacker: (name: string) => string
}
