export interface Letter {
  id: number;
  lettre: string;
  occurence: number;
  created_at?: string;
  updated_at: string;
}

export type Status = 'WRONG' | 'WRONG_PLACE' | 'GOOD';
export const Status = {
  WRONG: 'WRONG' as Status,
  WRONG_PLACE: 'WRONG_PLACE' as Status,
  GOOD: 'GOOD' as Status,
};

export interface LetterStatus {
  letter: string;
  status: Status;
  index: number;
}
