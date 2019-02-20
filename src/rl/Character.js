import { Actor } from './Actor'
import { mergeWith } from './utils'

const characterProto = {
  groups: ['characters']
}

export function Character(props) {
  return Actor(mergeWith(characterProto, props))
}
