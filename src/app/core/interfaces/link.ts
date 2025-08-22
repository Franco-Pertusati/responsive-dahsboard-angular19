export interface ShortenLink {
  id: number
  originalUrl: string
  shortUrl: string
  createdAt: Date
  expiresAt: Date
  favIcon: string
}
