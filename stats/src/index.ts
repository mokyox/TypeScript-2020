import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

//Create an object that satsifies the 'DataReader' interface

const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satsifying
//the 'DataReader' interface

const matchReader = new MatchReader(csvFileReader);
//load the files
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} times during 18/19 season.`);
