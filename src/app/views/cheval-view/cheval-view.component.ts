import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Cheval } from '../../models/cheval';
import { ChevalServiceService } from '../../services/cheval-service.service';
import { ReactiveFormsModule, Validators, } from '@angular/forms';
@Component({
  selector: 'app-cheval-view',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cheval-view.component.html',
  styleUrl: './cheval-view.component.scss',
})

//Here we use our class metier as a receipt of data
export class ChevalViewComponent {
  cheval: Cheval;
  chevalForm: FormGroup;
  numberOfHorses: number = 0;

  constructor(private chevalService: ChevalServiceService, private fb: FormBuilder) {
    this.cheval = new Cheval("luchito",0,0);
    this.chevalForm = this.fb.group({ 
      nom: [ '', Validators.required ]
    });

  }

  ngOnInit(): void {
  }
  onSubmit () {
    let newCheval = new Cheval(this.chevalForm.get('nom')?.value,0,0);
    this.chevalService.addCheval(newCheval);
    this.showMe();
    this.numberOfHorses = this.chevalService.getChevaux().length;
    console.log(`Il y a actuellement ${this.numberOfHorses} chevaux`);
  }
  showMe() {
    //console.log(`${this.cheval.name} - ${this.chevalForm.get("nom")?.value} - ${this.chevalForm.dirty}`);
  }

}



