import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BsDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'plastiful';
}
