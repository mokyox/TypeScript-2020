const profile = {
  name: 'Mo',
  age: 28,
  coords: {
    lat: 0,
    long: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

//To use destructuring we have
//to write the expected profile of RHS variable

const { age }: { age: number } = profile;

const {
  coords: { lat, long }
}: { coords: { lat: number; long: number } } = profile;
