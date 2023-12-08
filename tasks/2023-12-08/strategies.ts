import { ISortLetters, Letter } from "./interfaces";

export class PriorityStrategy implements ISortLetters {
  sortLetters(letters: Letter[]): Letter[] {
    const priors = ["high", "medium", "low"];
    return letters.sort(
      (a, b) => priors.indexOf(a.priority) - priors.indexOf(b.priority)
    );
  }
}

export class CountryStrategy implements ISortLetters {
  sortLetters(letters: Letter[]): Letter[] {
    const countries: string[] = ["pl", "de", "us"];
    return letters.sort(
      (a, b) => countries.indexOf(a.country) - countries.indexOf(b.country)
    );
  }
}

export class LengthStrategy implements ISortLetters {
  sortLetters(letters: Letter[]): Letter[] {
    return letters.sort((a, b) => a.content.length - b.content.length);
  }
}
