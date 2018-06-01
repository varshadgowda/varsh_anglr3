import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  uerInput: String;
  userName: String;
  language: String;
  values: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit (form) {
    this.values.push(form.value);
    form.reset();
  }

}


