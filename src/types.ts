export enum APIItemRarity {
  COMMON = "common",
  RARE = "rare",
  EPIC = "epic",
  LEGENDARY = "legendary",
  CHAMPION = "champion",
}

export enum APIEvolutionLevel {
  EVOLUTION = 1,
  HERO = 2,
}

export enum APIPlayerRole {
  NOT_MEMBER = "notMember",
  MEMBER = "member",
  LEADER = "leader",
  ADMIN = "admin",
  COLEADER = "coLeader"
}

export enum APIClanChestStatus {
  INACTIVE = "inactive",
  ACTIVE = "active",
  COMPLETED = "completed",
  UNKNOWN = "unknown",
}

export enum APIClanType {
  OPEN = "open",
  INVITE_ONLY = "inviteOnly",
  CLOSED = "closed",
}

export type APIItemList = APIItem[]

export type APIClanMemberList = APIClanMember[]

export type APIPlayerItemLevelList = APIPlayerItemLevel[]

export type APIPlayerAchievementProgressList = APIPlayerAchievementProgress[]

export type APIPlayerAchievementBadgeList = APIPlayerAchievementBadge[]

export interface APILocation {
  localizedName: string
  id: number
  name: string
  isCountry: boolean
  countryCode: string
}

export interface APIPathOfLegendSeasonResult {
  leagueNumber: number
  rank: number
  trophies: number
}

export interface APILeagueSeasonResult {
  rank: number
  bestTrophies: number
  trophies: number
  id: string
}

export interface APIArena {
  name: string
  id: number
  rawName: string
  iconUrls: {
    small: string
    medium: string
  }
}

export interface APIItemIconUrls {
  medium: string
  evolutionMedium?: string
  heroMedium?: string
}

export interface APIItem {
  iconUrls: APIItemIconUrls
  name: string
  id: number
  rarity: APIItemRarity
  maxLevel: number
  elixirCost: number
  maxEvolutionLevel?: APIEvolutionLevel
}

export interface APIPlayerItemLevel {
  id: number
  rarity: APIItemRarity
  count?: number
  level: number
  starLevel?: number
  evolutionLevel?: APIEvolutionLevel
  used?: boolean
  name: string
  maxLevel: number
  elixirCost: number
  maxEvolutionLevel?: APIEvolutionLevel
  iconUrls: APIItemIconUrls
}

export interface APIPlayerProgressList {
  [key: string]: APIPlayerProgress
}

export interface APIPlayerProgress {
  arena: APIArena
  trophies: number
  bestTrophies: number
}

export interface APIPlayerAchievementProgress {
  stars: number
  value: number
  name: string
  target: number
  info: string
  completionInfo?: string
}

export interface APIPlayerAchievementBadge {
  progress: number
  iconUrls: {
    large: string
  }
  maxLevel: number
  target?: number
  level: number
  name: string
}

export interface APIPlayerLeagueStatistics {
  currentSeason: APILeagueSeasonResult
  previousSeason: APILeagueSeasonResult
  bestSeason: APILeagueSeasonResult
}

export interface APIPlayerClan {
  badgeId: number
  tag: string
  name: string
  badgeUrls?: {
    small?: string
    medium?: string
  }
}

export interface APIPlayer {
  clan:APIPlayerClan
  legacyTrophyRoadHighScore: number
  currentDeck: APIPlayerItemLevelList
  currentDeckSupportCards: APIPlayerItemLevelList
  arena:APIArena
  role: APIPlayerRole
  wins: number
  losses: number
  totalDonations: number
  leagueStatistics: APIPlayerLeagueStatistics
  cards: APIPlayerItemLevelList
  supportCards: APIPlayerItemLevelList
  currentFavoriteCard: APIItem
  badges: APIPlayerAchievementBadgeList
  tag: string
  name: string
  collectionLevel: number
  kingTowerLevel: number
  expLevel: number
  trophies: number
  bestTrophies: number
  donations: number
  donationsReceived: number
  achievements: APIPlayerAchievementProgressList
  battleCount: number
  threeCrownWins: number
  challengeCardsWon: number
  challengeMaxWins: number
  tournamentCardsWon: number
  tournamentBattleCount: number
  currentWinLoseStreak: number
  warDayWins: number
  clanCardsCollected: number
  starPoints: number
  expPoints: number
  totalExpPoints: number
  currentPathOfLegendSeasonResult: APIPathOfLegendSeasonResult
  lastPathOfLegendSeasonResult: APIPathOfLegendSeasonResult
  bestPathOfLegendSeasonResult: APIPathOfLegendSeasonResult
  progress: APIPlayerProgressList
}
export interface APIClanMember {
  lastSeen: string
  arena: APIArena
  clanChestPoints: number
  tag: string
  name: string
  role: APIPlayerRole
  expLevel: number
  trophies: number
  clanRank: number
  previousClanRank: number
  donations: number
  donationsReceived: number
}

export interface APIClan {
  memberList: APIClanMemberList
  clanChestStatus: APIClanChestStatus
  clanChestLevel: number
  clanChestMaxLevel: number
  clanScore: number
  clanWarTrophies: number
  requiredTrophies: number
  donationsPerWeek: number
  members: number
  badgeId: number
  name: string
  location: APILocation
  type: APIClanType
  tag: string
  description: string
  clanChestPoints: number
  badgeUrls: {
    small: string
    medium: string
  }
}
