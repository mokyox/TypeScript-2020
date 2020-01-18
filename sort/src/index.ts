import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 20]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaaaabya');
const characterSorter = new Sorter(charactersCollection);
characterSorter.sort();
console.log(charactersCollection.data);
