import { Component, OnInit } from '@angular/core';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'homepage-header',
  template: `
    <header
      fxLayout="row"
      fxLayoutAlign=" center"
      fxLayoutGap="20px"
      fxLayout.lt-sm="column"
      fxLayoutAlign.lt-sm=" center"
    >
      <img
        style="border-radius: 50%"
        src="assets/pic.jpg"
        alt="Profile picture"
        height="200px"
        width="200px"
      />
      <div fxLayoutAlign=" center" fxLayout="column">
        <h1>Michael Völker</h1>
        <h3>Software Engineer, Team Lead</h3>
        <p fxLayoutGap="10px">
          <a href="https://twitter.com" title="Twitter"
            ><fa-icon [icon]="twitter" size="2x"></fa-icon
          ></a>
          <a href="https://github.com" title="Github">
            <fa-icon [icon]="github" size="2x"></fa-icon
          ></a>
        </p>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  twitter = faTwitter;
  github = faGithub;
  constructor() {}

  ngOnInit(): void {}
}
