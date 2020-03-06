class HoldAnything<T> {
  //We treat <T> as if it were an argument to this class
  data: T;
}

const HoldNumber = new HoldAnything<number>();
HoldNumber.data = 5;

const HoldString = new HoldAnything<string>();
HoldString.data = '123';
