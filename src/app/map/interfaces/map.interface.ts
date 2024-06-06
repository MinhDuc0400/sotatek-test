export interface IMap {
  scenes: Scene[]
}

export interface Scene {
  id: number
  background_url: string
  destinations: Destination[]
}

export interface Destination {
  x: number
  y: number
  target: number
}
