import type { IDeck } from "./iplayer"

export function isEvoSlot(deck: IDeck, index: number): boolean {
  if (index < 0 || index > 7) return false
  return (deck.evos & (1 << index)) !== 0
}

export function isHeroSlot(deck: IDeck, index: number): boolean {
  if (index < 0 || index > 7) return false
  return (deck.heroes & (1 << index)) !== 0
}
