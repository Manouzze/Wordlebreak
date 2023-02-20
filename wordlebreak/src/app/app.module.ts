import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './shared/components/test/test.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { IndexComponent } from './shared/components/index/index.component';
import { WordComponent } from './shared/components/word/word.component';
import { LetterComponent } from './shared/components/letter/letter.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ComponentNameComponent,
    IndexComponent,
    WordComponent,
    LetterComponent,
    WordComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
