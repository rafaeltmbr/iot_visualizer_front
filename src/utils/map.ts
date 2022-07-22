export const map = (
  value: number,
  fromStart: number,
  fromEnd: number,
  toStart: number,
  toEnd: number
) => {
  const fromRange = fromEnd - fromStart;
  const toRange = toEnd - toStart;

  const fromProportion = (value - fromStart) / (fromRange || 1);
  return fromProportion * toRange + toStart;
};
