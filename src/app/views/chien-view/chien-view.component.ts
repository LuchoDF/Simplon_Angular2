import { Component } from '@angular/core';
import { Chien } from '../../models/chien';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlerteConsoleService } from '../../services/alerte-console.service';
@Component({
  selector: 'app-chien-view',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './chien-view.component.html',
  styleUrl: './chien-view.component.scss'
})
export class ChienViewComponent {
  chien: Chien;
  //nameControl: FormControl;
  chienForm: FormGroup;

  constructor(private fb: FormBuilder,private alertConsole: AlerteConsoleService) {
    this.chien = new Chien("Scooby-Doo");
    //this.nameControl = new FormControl('');
    this.chienForm = this.fb.group({
     // nom: [ this.chien.name]
     nom: [ '', Validators.required ]
    });

  }

  ngOnInit(): void {
    this.alertConsole.showAlert("aie aie aie !");
  }


  showMe() {
    console.log(`${this.chien.name} - ${this.chienForm.get("nom")?.value} - ${this.chienForm.dirty}`);
  }

  
  onSubmit() {
    this.showMe();
  }


}

