// SESSION
export enum SessionDirection {
  SESSION_DIRECTION_UP,
  SESSION_DIRECTION_DOWN
}

export type Session = {
  user?: User
  amount?: number
  card: Card
  direction: SessionDirection
}

// CARD
export type CardSymbol = 'club' | 'heart' | 'diamond' | 'spade'

export type Card = {
  number?: number
  symbol?: CardSymbol
}

// IMAGE
export type Image = {
  user?: User // owner -> image.user.id
  id?: string
  url?: string
}

// USER
export type User = {
  id?: string
  name?: string
}
