// @flow
import { mkdir, writeFile } from 'fs';
import { units, upgrades, commandCards } from './index';

const unifiedData = {
  units: units,
  upgrades: upgrades,
  commandCards: commandCards,
};

const dataJson = JSON.stringify(unifiedData);

mkdir('out', err => {
  if (err && err.code !== 'EEXIST') console.error(err);
});

writeFile('out/legion-data.json', dataJson, err => {
  if (err) console.error(err);
  console.log('Data written to file out/legion-data.json');
});
