import { Component, OnInit } from '@angular/core';
import * as packageJSON from '../../../package.json'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() { }

  angularVersion: string;

  ngOnInit() {
    const PKG = packageJSON.dependencies['@angular/core']
    this.angularVersion = `v${PKG.replace(/[\^~]/g, '')}`
  }
}
