import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
