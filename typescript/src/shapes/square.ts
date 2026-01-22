import { Shape } from '../shapes/shape.js'

function newSquare (sideLen: number): Shape {
  return {
    computeArea: function (): number {
      return sideLen * sideLen
    }
  }
}

export { newSquare }
