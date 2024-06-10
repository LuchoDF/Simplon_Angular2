import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChevalServiceService } from '../../services/cheval-service.service';
import { Cheval } from '../../models/cheval';


@Component({
  selector: 'app-cheval-detail',
  standalone: true,
  imports: [],
  templateUrl: './cheval-detail.component.html',
  styleUrl: './cheval-detail.component.scss'
})
export class ChevalDetailComponent {
  cheval: Cheval= new Cheval('',0,0);
  idcheval: number=0;

  constructor(private route: ActivatedRoute, private chevalService: ChevalServiceService) {
    this.route.params.subscribe(params => {
      this.idcheval = parseInt(params['id']);
      const obtainedHorse = this.chevalService.getChevalById(this.idcheval)
      if (obtainedHorse) {
        this.cheval = obtainedHorse;
      }
      else {
        console.error("error")
      }
    });
  }

  ngOnInit(): void {
  }

}
