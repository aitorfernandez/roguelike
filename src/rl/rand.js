import seedrandom from 'seedrandom'

let rnd = seedrandom(Date.now(), { entropy: true })

export function randFloat() {
  return rnd()
}
