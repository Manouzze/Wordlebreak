import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { LetterStatus, Status } from '../../model/letter.model';
import { Word } from '../../model/word.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent implements OnInit, OnChanges {
  @Input() word!: Word;
  @Input() disabled = false;
  @Output() letterStatusEmit: EventEmitter<LetterStatus[]> = new EventEmitter();
  public letterArray?: string[];
  public letterStatusArray: LetterStatus[] = [];

  // TABLEAU DE LETTRE
  ngOnInit(): void {
    this.letterArray = Array.from(this.word.word_clean.toUpperCase());
    this._setDefaultLetterStatusArray(this.letterArray);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['word'].currentValue !== changes['word'].previousValue) {
      this.letterArray = Array.from(this.word.word_clean.toUpperCase());
      this._setDefaultLetterStatusArray(this.letterArray);
    }
  }

  //CREATION DUN TABLEAU QUI CONTIENT LE STATUS DE CHAQUE LETTRE
  private _setDefaultLetterStatusArray(letterArray: string[]): void {
    letterArray.forEach((letter: string, index: number) => {
      this.letterStatusArray.push({
        letter: letter,
        status: Status.WRONG,
        index: index,
      });
    });
    this.letterStatusEmit.emit(this.letterStatusArray);
  }

  public onChangeLetterStatus(letterStatusGiven: LetterStatus): void {
    this.letterStatusArray[letterStatusGiven.index] = letterStatusGiven;
    this.letterStatusEmit.emit(this.letterStatusArray);
  }
}
