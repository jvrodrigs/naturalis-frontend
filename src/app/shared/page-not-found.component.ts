import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="container" style="
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;">
      <img src="../../assets/undraw_Page_not_found_re_e9o6.png" alt="">
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
