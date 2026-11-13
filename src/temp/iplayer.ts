import type { ICard } from "./icard"

export interface IPlayer {
  tag: string
  name: string
  trophies: ITrophies
}

export interface IArena {
  id: number
  name: string
}

export interface ITrophies {
  current: number
  best: number
}

export interface IStats {
  wins: number
  losses: number
  total: number
}

export interface IClan {
  name: string
  tag: string
}

export type IDeckCards = [ICard, ICard, ICard, ICard, ICard, ICard, ICard, ICard]

export interface IDeck {
  evos: number
  heroes: number
  cards: IDeckCards
}
