import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AnimalViewComponent } from './views/animal-view/animal-view.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimalViewComponent, RouterLink,RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}

