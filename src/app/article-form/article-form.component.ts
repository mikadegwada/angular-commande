import { Component, OnInit } from '@angular/core';
import { Article , AppServiceService} from '../app-service.service'
@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  article: Article = {
    name: "",
    cat: "",
    id: "",
  }
  constructor(private service: AppServiceService) { }

  ngOnInit() {
  }

  onClick(){
    if(this.article.name.length < 3 || this.article.cat.length < 3)return
  
    this.service.addArticle(this.article)
    this.article = {name: "",cat: "",id: "",}
  }

}