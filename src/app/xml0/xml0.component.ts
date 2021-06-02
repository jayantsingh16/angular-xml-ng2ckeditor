import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-xml0',
  templateUrl: './xml0.component.html',
  styleUrls: ['./xml0.component.css']
})
export class Xml0Component implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  @ViewChild("myckeditor") ckeditor: any;

  constructor() {
    this.mycontent = `<p>My html content</p>`;
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }
  onEditorChange(event){
    console.log(event)
  }

  onChange(event: any): void {
    console.log(event);
    console.log(this.mycontent)
    //this.log += new Date() + "<br />";
  }
}
