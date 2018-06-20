export type Source = {
  name: string,
  wave: number,
  released: boolean,
  contents: {
    units: { [string]: number },
    upgrades: { [string]: number },
  },
};
