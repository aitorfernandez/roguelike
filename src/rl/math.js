export function vector(x = 0, y = 0) {
  return {
    x,
    y,

    toString() {
      return `${this.x}.${this.y}`
    }
  }
}
