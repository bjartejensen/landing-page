import { ChartCardComponent } from './chart-card.component';

describe('ChartCardComponent', () => {
  it('Mounts', () => {
    cy.mount(ChartCardComponent);
  });

  it('should default to Default', () => {
    cy.mount(ChartCardComponent);
    cy.get('[data-cy=title]').should('have.text', '');
  });

  it('should display the title inputted', () => {
    cy.mount(ChartCardComponent, {
      componentProperties: {
        title: 'Predictions',
      },
    });
    cy.get('[data-cy=title]').should('have.text', 'Predictions');
  });
});
