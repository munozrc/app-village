export interface Post {
  id: number
  title: string
  heroImage: string
  content: string
  author: {
    displayName: string
    photoURL: string
    link: string
  }
}
