import { Component } from '@angular/core';
import { IndexResponse, SuggestWordResponse } from '../../model/index.model';
import { LetterStatus, Status } from '../../model/letter.model';
import { Word } from '../../model/word.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  public indexResponse?: IndexResponse;
  public suggestWordResponse?: SuggestWordResponse;
  public letterStatusArray?: LetterStatus[];
  public wordsHistory: Word[] = [];
  public lastWord!: Word;
  public actualWord!: Word;
  public counter = 0;
  public numbersLeft?: number;

  constructor(public api: ApiService) {}
  ngOnInit(): void {
    this.api.requestApi('/index').subscribe((response: IndexResponse) => {
      this.indexResponse = response;
      this.lastWord = response.word;
      this.actualWord = response.word;
    });
  }
  // BOUTON VALIDER
  public onClickValidate(): void {
    this._manageHistoryWords();
    const request = this.letterStatusArray;
    this.api.requestApi('/suggestWord', 'post', request).subscribe({
      next: (response: SuggestWordResponse) => {
        this.suggestWordResponse = response;
        this.actualWord = response.word;
        this.numbersLeft = response.numbersLeft;
      },
      error: (error) => console.error(error),
    });
  }

  // ON RECUPERE LES DONNEES DE MOT
  public onChangeLetterStatus(letterStatusArray: LetterStatus[]): void {
    this.letterStatusArray = letterStatusArray;
  }

  // NOMBRE D'ESSAI DU JEU
  private _manageHistoryWords(): void {
    this.counter++;
    this.lastWord = this.actualWord;
    this.wordsHistory.push(this.lastWord);
  }
}
