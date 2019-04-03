import { Component, OnInit } from '@angular/core';
import { Commande, AppServiceService} from '../app-service.service';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(public service: AppServiceService) { 
   
  }

  ngOnInit() {
  }
  
}