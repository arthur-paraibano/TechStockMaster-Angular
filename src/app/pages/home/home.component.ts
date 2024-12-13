import { Component } from '@angular/core';
import { ContentMainComponent } from '../../components/content-main/content-main.component';
import { HeaderMainComponent } from '../../components/header-main/header-main.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContentMainComponent, HeaderMainComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
