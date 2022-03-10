export interface Post {
  id: number
  title: string
  date: string // Date format
  path: string
  heroImage: string
  content: string
  author: {
    displayName: string
    photoURL: string
    link: string
  }
}
