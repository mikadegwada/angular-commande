import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  opened = []
  constructor(public service: AppServiceService) { }


  ngOnInit() {
    console.log("coicoioci")
  }
  open(id){
    let index = this.opened.indexOf(id)
    if(index < 0){
      this.opened.push(id)
    }else{
      this.opened.splice(index, 1)
    }
    console.log(this.opened)
  }
  isOpen(id){
    return this.opened.indexOf(id) > -1
  }
}