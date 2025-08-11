import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeTab: string = '';
  menuOpen = false;
  
  SetActiveTab(tab:string){
    this.activeTab = tab
  }
  
  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }
}
