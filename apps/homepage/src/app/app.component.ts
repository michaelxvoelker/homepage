import { Component } from '@angular/core';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'homepage-root',
  template: `<div
    fxFill
    fxLayout="row"
    fxLayout.lt-md="column"
    fxLayoutAlign="center center"
    fxLayoutGap="25px"
  >
    <img
      style="border-radius: 50%"
      src="assets/foto.jpg"
      alt="Profile picture"
      width="200px"
      height="200px"
    />
    <div fxLayoutAlign=" center" fxLayout="column">
      <h1>Michael Völker</h1>
      <div style="font-weight: lighter">Software Engineer, Team Lead</div>
      <p fxLayoutGap="10px">
        <a href="https://twitter.com" title="Twitter"
          ><fa-icon [icon]="twitter" size="2x"></fa-icon
        ></a>
        <a href="https://github.com" title="Github">
          <fa-icon [icon]="github" size="2x"></fa-icon
        ></a>
      </p>
    </div>
  </div>`,
})
export class AppComponent {
  twitter = faTwitter;
  github = faGithub;
}
