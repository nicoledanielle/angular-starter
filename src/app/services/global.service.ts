import { Injectable, EventEmitter, NgZone } from '@angular/core';
// import { Router } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';



declare var jQuery;
declare var tinycolor;
declare var Materialize: any;

import { StorageService } from './storage.service';

@Injectable()
export class GlobalService {

  constructor(private router: Router) {

  }

  inputIsFocused: boolean;

  // Input/textarea/Froala solutions for problems involving software keyboards, mobile global nav and other issues
  doInputFocusFunc(inputData?: any) {
    var x = window.scrollX;
    var y = window.scrollY;
    // this.ygap = window.pageYOffset || document.documentElement.scrollTop;

    console.log('g.s. doInputFocusFunc');
    this.inputIsFocused = true;

    //https://stackoverflow.com/questions/9038625/detect-if-device-is-ios//
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    var android = '';

    if(iOS) {
      window.scrollTo(x, y);
    }

  }

  doInputBlurFunc(inputData?: any) {

    console.log('g.s. doInputBlurFunc');
    this.inputIsFocused = false;
  }
  // End Input/textarea/Froala solutions for problems involving software keyboards, mobile global nav and other issues
}
  