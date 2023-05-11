import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  isEditable: boolean = false
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.isEditable = this.route.snapshot.data["isEditable"]
  }
}
