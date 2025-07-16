import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from "./components/education/education.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProfileComponent, ProjectsComponent, EducationComponent,  FooterComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => window.HSStaticMethods.autoInit(), 100);
      }
    });
  }
}
