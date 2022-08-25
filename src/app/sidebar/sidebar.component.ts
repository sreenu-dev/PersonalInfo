import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', 'css/style.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router,private scroller: ViewportScroller) {}

  ngOnInit(): void {
    $(function () {
      $('#sidebarCollapse').on('click', function () {
        // alert("wokring")
        $('#sidebar').toggleClass('active');
      });
    });
  }
  goTo(target:string) {
    console.log(target)
    // this.router.navigate([],{fragment:target})
    this.scroller.scrollToAnchor(target);
  }
}
