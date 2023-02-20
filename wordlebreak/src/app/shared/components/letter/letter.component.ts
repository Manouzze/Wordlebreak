import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LetterStatus, Status } from '../../model/letter.model';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss'],
})
export class LetterComponent {
  @Input() letter!: string;
  @Input() index!: number;
  @Input() disabled = false;
  @Output() letterStatusEmit: EventEmitter<LetterStatus> = new EventEmitter();

  public greyColor = 'rgb(68, 64, 60)';
  public orangeColor = 'rgb(255, 165, 60)';
  public greenColor = 'rgb(0, 128, 0)';
  public counter = 0;

  private _resetLetters(): void {
    this.counter = 0;
  }

  public onClickLetter(event: Event): void {
    if (!this.disabled) {
      this._manageCounter();
      const letterDOM = event.target as HTMLElement;
      this._displayColor(letterDOM.style, this.counter);
      if (letterDOM.textContent !== null) {
        this._setLetterStatus(letterDOM.innerText, this.counter, this.index);
      }
    }
  }

  private _manageCounter(): void {
    this.counter++;
    if (this.counter > 2) {
      this.counter = 0;
    }
  }

  private _displayColor(letterDOMStyle: CSSStyleDeclaration, counter: number) {
    let color = '';
    switch (counter) {
      case 0:
        color = this.greyColor;
        break;
      case 1:
        color = this.orangeColor;
        break;
      case 2:
        color = this.greenColor;
        break;
      default:
        color = this.greyColor;
    }
    letterDOMStyle.backgroundColor = color;
  }

  private _setLetterStatus(
    letter: string,
    counter: number,
    index: number
  ): void {
    let status: Status;
    if (counter === 0) {
      status = Status.WRONG;
    } else if (counter === 1) {
      status = Status.WRONG_PLACE;
    } else {
      status = Status.GOOD;
    }
    const letterStatus: LetterStatus = {
      letter: letter,
      status: status,
      index: index,
    };
    this.letterStatusEmit.emit(letterStatus);
  }
}
