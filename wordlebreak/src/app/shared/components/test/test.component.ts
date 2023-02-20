import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Test } from '../../model/test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  rep: Test | undefined;

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.requestApi('/test').subscribe((res: Test) => {
      this.rep = res;
    });
  }
}
