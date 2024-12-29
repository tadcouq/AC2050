import fs from 'fs';
const filename = './dataStudent.json';

const minStrLen = 8;
const maxStrLen = 8;

const maxElement = 9000;
let k = 1;
let aSV = [ ];

for (let i = 1; i < maxElement; i++) {
  let cpa = makeRdnFloat(0,4).toFixed(2);
  let canhcao = determineRisk(cpa);
  let sv = {
    mssv: (20000000+(Math.floor(Math.random()*(24-19)+19))*10000+(i+1)), 
    name: makeRdnStr(makeRdnFloat(minStrLen, maxStrLen)), 
    cpa: cpa,
    canhcao: canhcao
  };
  aSV.push(sv);
};

aSV.sort((a, b) => a.mssv - b.mssv);

const jsonData = (JSON.stringify(aSV));
fs.writeFile(filename, jsonData, 'utf-8', (err) => console.log(err? err:'The file was saved!'));

// Tools

function makeRdnStr(length) {
  let result = '';
  const characters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function makeRdnFloat(min, max) {
  return (Math.random() * (max - min) ) + min;
}

function determineRisk(cpa) {
  if (cpa <= 0.5) return 3;
  if (0.5 < cpa && cpa <= 1.0) return 2;
  if (1.0 < cpa && cpa <= 1.5) return 1;
  return 0;
}

// For debug
console.log(aSV);
console.log(jsonData);