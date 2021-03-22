import { Component } from '@angular/core';

@Component({
  selector: 'homepage-root',
  template: `
    <div fxFill fxLayout="column" fxLayoutAlign="space-around center">
      <homepage-header></homepage-header>
    </div>
  `,
})
export class AppComponent {}
