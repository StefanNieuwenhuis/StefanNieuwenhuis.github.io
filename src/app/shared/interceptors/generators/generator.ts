export abstract class Generator<T> {
    abstract generate(data: Partial<T>): T;
  }
  