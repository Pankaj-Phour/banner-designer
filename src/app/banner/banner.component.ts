import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import domtoimage from 'dom-to-image';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
@Input() image;
@Input() logo;
@Input() title;
@Input() contact;
@Input() width;
@Input() height;
@Input() logoHeight;
@Input() logoWidth;
@Input() titleSize;
@Input() contactSize;
@Input() submitted;
@Output() edit = new EventEmitter();
banner:any;
editMoreBtn: boolean = false;
modified: boolean = false;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.image);
    // console.log(this.logo);
    // console.log(this.title);
    setTimeout(() => {
      // this.capturar()
    }, 500);
  }


  // Function to create the snapshot of the banner in html tags (by Pankaj Phour) on March 06 2023
  capturar(){
    this.modified = true;
    // Getting our banner parent element by it's id 
    var node = document.getElementById('capture');
    var options = {quality: 1};

    // converting the banner of html tags to image 
    domtoimage.toJpeg(node, options).then((dataUrl) => {
      // console.log(dataUrl) //Image in base64 jpeg
      this.banner = dataUrl
    });
}

editMore(){
  this.edit.emit(false)
  // window.location.reload();
  this.submitted = false;

}

download(){
  setTimeout(() => {
    window.location.reload();
  }, 1500);
}


}
