type Operations = {
  readonly add: (a: number, b: number) => number;
  readonly subtract: (a: number, b: number) => number;
};

type Results<T> = {
  [Key in keyof T]?: number;
};

let mathOperation: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

let mathResults: Results<Operations> = {
  add: mathOperation.add(5, 3),
  subtract: mathOperation.subtract(5, 3),
};

// mathResults.add = 10;
