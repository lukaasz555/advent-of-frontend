export interface Letter {
  content: string;
  country: "pl" | "de" | "us";
  priority: "high" | "medium" | "low";
}

export interface ISortLetters {
  sortLetters: (arr: Letter[]) => Letter[];
}
