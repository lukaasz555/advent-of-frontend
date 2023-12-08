import { ISortLetters, Letter } from "./interfaces";

export class LetterSorter<T extends ISortLetters> {
  #strategy: T;

  constructor(strategy: T) {
    this.#strategy = strategy;
  }

  sortLetters(letters: Letter[]): Letter[] {
    return this.#strategy.sortLetters(letters);
  }
}
