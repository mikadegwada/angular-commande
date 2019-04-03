import { Injectable } from '@angular/core';
import moment from 'moment';
export interface Article {
  name: string;
  cat: string;
  id?: string | number;
}
export interface Commande {
  id: number;
  name: string;
  semaine: number;
  data: ArticleQty[];
}
export interface ArticleQty {
  id: number;
  quantity: number;
}

@Injectable()
export class AppServiceService {

  articles: Article[] = [
    { id: 1, name: "carotte", cat: "legume" },
    { id: 2, name: "entrecote", cat: "viande" },
    { id: 3, name: "tagliatelle", cat: "epicerie" },
  ]
  commandes: Commande[] = [
    {
      id: 1554240215289,
      name: "Du 31/3 au 6/4",
      semaine: 14,
      data: [{ id: 1, quantity: 10 }]
    }
  ]
  current: number = null
  constructor() {
  }

  getArticles() {
    return this.articles
  }
  getArticleQty(_article: Article) {
    let cur = this.findCurCom()
    if (!cur) return 0
    let qtys = cur.data
    let data = qtys.find(qty => qty.id == _article.id)
    return data ? data.quantity : 0
  }
  hasCurCommande() {
    return !!this.findCurCom()
  }
  incrementArticle(_article: Article) {

    if (!this.hasCurCommande()) return false
    this.commandes = this.commandes.map(commande => {
      if (commande.id == this.current) {
        let data = commande.data
        let exist = false
        data = data.map(qty => {
          if (qty.id == _article.id) {
            exist = true
            return {
              id: qty.id,
              quantity: qty.quantity + 1
            } as ArticleQty
          } else {
            return qty
          }
        })
        if(!exist)data.push({
              id: _article.id,
              quantity: 1
            } as ArticleQty)
        commande.data = data
      }
      return commande
    })

  }
  decrementArticle(_article: Article) {

    if (!this.hasCurCommande()) return false
    this.commandes = this.commandes.map(commande => {
      if (commande.id == this.current) {
        let data = commande.data
        let exist = false
        data = data.map(qty => {
          if (qty.id == _article.id) {
            exist = true
            return {
              id: qty.id,
              quantity: qty.quantity-1 >= 0 ? qty.quantity-1 : 0
            } as ArticleQty
          } else {
            return qty
          }
        })
        if(!exist)data.push({
              id: _article.id,
              quantity: 0
            } as ArticleQty)
        commande.data = data
      }
      return commande
    })

  }
  private findCurCom() {
    if (!this.current) return false
    let cur = this.commandes.find(commande => commande.id == this.current)
    if (!cur) return false
    return cur
  }
  addArticle(article: Article) {
    this.articles.push(article)
  }
  addCommande(commande: Commande) {
    this.commandes.push(commande)
  }
  newCommande() {
    let semaine = moment().week();
    let id = Date.now()
    let double = this.commandes.filter(commande => commande.semaine == semaine)
    let sufix = null
    if (double.length > 0) {
      sufix = (id.toString()).slice(-4)
    }
    let start = moment().startOf("week").format("D/M");
    let end = moment().endOf("week").format("D/M");
    let name = "Du " + start + " au " + end + (sufix ? ' --' + sufix : '')
    const commande: Commande = {
      id,
      name,
      semaine,
      data: [],
    }
    this.commandes.push(commande)
    console.log("week", commande)
  }
  getCommandes() {
    return this.commandes
  }
  deleteArticle(_article: Article) {
    this.articles = this.articles.filter(article => article.id != _article.id)
  }
  deleteCommande(_commande: Commande) {
    this.commandes = this.commandes.filter(commande => commande.id != _commande.id)
  }
  currentCommande(_commande: Commande) {
    this.current = _commande.id
  }
}