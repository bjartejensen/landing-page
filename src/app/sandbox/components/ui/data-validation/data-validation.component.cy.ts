import { Input } from '@angular/core';
import { DataValidationComponent } from './data-validation.component';
import { should } from 'chai';

describe('DatavalidationComponent', () => {
  beforeEach('DataValidation startup', () => {
    cy.mount(DataValidationComponent);
  });

  context('Mouting', () => {
    it('Mounts', () => {
      cy.mount(DataValidationComponent, {
        componentProperties: {
          ValidationData: {
            nEmptyRows: 2,
            nObs: 132,
            valid: true,
            validNObs: true,
            validNonNumeric: false,
            validNonNegative: false,
          },
        },
      });

      cy.viewport(2220, 2000);
      cy.wait(5000);
    });
  });

  xcontext('@Input given', () => {
    it('Shows green over all status when valid data', () => {
      cy.mount(DataValidationComponent, {
        componentProperties: {
          ValidationData: {
            nEmptyRows: 2,
            nObs: 132,
            valid: true,
            validNObs: true,
            validNonNumeric: false,
            validNonNegative: false,
          },
        },
      });

      const e = cy.get('[data-cy=overall-status]');

      e.should('exist').should(
        'have.css',
        'background-color',
        'rgb(87, 186, 44)'
      );

      const header = cy.get('.overall-status h4');
      header.should('exist').should('contain', 'Over all Status');

      const icon = cy.get('[data-cy=overall-status-icon]');
      icon.should('exist');
      icon.should('contain', 'done');
    });

    it('Shows red over all status when invalid data', () => {
      cy.mount(DataValidationComponent, {
        componentProperties: {
          ValidationData: {
            nEmptyRows: 2,
            nObs: 132,
            valid: false,
            validNObs: true,
            validNonNumeric: false,
            validNonNegative: false,
          },
        },
      });

      const e = cy.get('[data-cy=overall-status]');

      e.should('exist').should(
        'have.css',
        'background-color',
        'rgb(154, 12, 12)'
      );

      const header = cy.get('.overall-status h4');
      header.should('exist').should('contain', 'Over all Status');

      const icon = cy.get('[data-cy=overall-status-icon]');
      icon.should('exist');
      icon.should('contain', 'close');
    });

    it('Shows correct text on 2 empty rows deleted', () => {
      cy.mount(DataValidationComponent, {
        componentProperties: {
          ValidationData: {
            nEmptyRows: 2,
            nObs: 132,
            valid: true,
            validNObs: true,
            validNonNumeric: false,
            validNonNegative: false,
          },
        },
      });

      cy.get('[data-cy=empty-rows-key]')
        .should('exist')
        .should('contain.text', 'Empty Rows');

      cy.get('[data-cy=empty-rows-text]')
        .should('exist')
        .should('contain.text', '2 empty rows has been deleted');

      //{{ dataValidation.nEmptyRows }} empty rows has been deleted
    });

    it('Shows correct text on Min No of observations', () => {
      cy.mount(DataValidationComponent, {
        componentProperties: {
          ValidationData: {
            nEmptyRows: 2,
            nObs: 132,
            valid: true,
            validNObs: true,
            validNonNumeric: false,
            validNonNegative: false,
          },
        },
      });

      cy.get('[data-cy=min-obs-key]')
        .should('exist')
        .should('contain.text', 'Min. No. observations');

      cy.get('[data-cy=min-obs-status]')
        .should('exist')
        .should('contain.text', 'ok')
        .should('have.css', 'text-transform', 'uppercase');

      //{{ dataValidation.nEmptyRows }} empty rows has been deleted
    });

    it('Shows correct text on Numbers Only', () => {
      cy.mount(DataValidationComponent, {
        componentProperties: {
          ValidationData: {
            nEmptyRows: 2,
            nObs: 132,
            valid: true,
            validNObs: true,
            validNonNumeric: false,
            validNonNegative: false,
          },
        },
      });

      cy.get('[data-cy=numbers-only-key]')
        .should('exist')
        .should('contain.text', 'Numbers Only');

      cy.get('[data-cy="numbers-only-status"]')
        .should('exist')
        .should('contain.text', 'fix')
        .should('have.css', 'text-transform', 'uppercase');

      //Subject to transclusion in real app (to seperate smart/dumb components)
      cy.get('[data-cy=correct-non-numeric-mmm-data-try-convert]')
        .should('exist')
        .should('contain', 'Try convert');

      //Test disabled properties of this validation item
      cy.get('[data-cy=numbers-only-item]')
        .should('exist')
        .should('not.have.css', 'pointer-events', 'none');
    });

    it('Shows correct properties on Non Negative when numbers only is false', () => {
      cy.mount(DataValidationComponent, {
        componentProperties: {
          ValidationData: {
            nEmptyRows: 2,
            nObs: 132,
            valid: true,
            validNObs: true,
            validNonNumeric: false,
            validNonNegative: false,
          },
        },
      });

      cy.get('[data-cy=non-negative-key]')
        .should('exist')
        .should('contain', 'Non Negative Values Only');

      cy.get('[data-cy=non-negative-status]')
        .should('exist')
        .should('contain', 'fix');

      //Test disabled properties of this validation item
      cy.get('[data-cy=non-negative-item]')
        .should('exist')
        .should('have.css', 'pointer-events', 'none');
    });
  });
});
