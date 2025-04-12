/**
 * A component responsible for the wholesale (not piecewise) creation of objects.
 */

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // Anti-Pattern
  static get factory(): PointFactory {
    return new PointFactory();
  }
}

class PointFactory {
  static newPolarPoint(rho: number, theta: number): Point {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }

  static newCartesianPoint(x: number, y: number): Point {
    return new Point(x, y);
  }
}
