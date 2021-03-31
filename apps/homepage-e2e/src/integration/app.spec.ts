import { getName } from '../support/app.po';

describe('homepage', () => {
  beforeEach(() => cy.visit('/'));

  it('should display full name', () => {
    getName().contains('Michael Völker');
  });
});
