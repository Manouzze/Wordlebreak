import { Word } from './word.model';

export interface IndexResponse {
  word: Word;
  countWords: number;
}

export interface SuggestWordResponse {
  word: Word;
  numbersLeft: number;
}
