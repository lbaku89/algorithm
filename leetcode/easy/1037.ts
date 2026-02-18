function isBoomerang(points: number[][]): boolean {
  const [x1, y1] = points[0];
  const [x2, y2] = points[1];
  const [x3, y3] = points[2];

  const isEqual = (p1, p2) => {
    return p1[0] === p2[0] && p1[1] === p2[1];
  };

  if (
    isEqual(points[0], points[1]) ||
    isEqual(points[0], points[2]) ||
    isEqual(points[1], points[2])
  ) {
    return false;
  }

  if ((y3 - y2) * (x1 - x2) === (y1 - y2) * (x3 - x2)) {
    return false;
  }

  return true;
}
