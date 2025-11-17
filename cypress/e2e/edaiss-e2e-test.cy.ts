describe('edaiss-e2e-test', () => {
  const now = new Date().toLocaleDateString('es-ES');
  //const now = "002";
  it('can create asset (provider)', function () {
    cy.visit('https://comarca-pallars-jussa.edaiss.es/assets');
    cy.contains('button', 'Create').click();
    cy.get('input[name="id"]').type(`asset-e2e-${now}`);
    cy.get('select[name="dataType"]').select('0: HttpData');
    cy.get('select[name="method"]').select('GET');
    cy.get('input[name="baseUrl"]').type(
      'https://ca-in2-edaiss-data-prov-api-dev.greensea-e5c14b01.spaincentral.azurecontainerapps.io/api/patient/zip?blobName=structured/fhir-ips-json/2025-10-13T11:08:54.744318400Z',
    );
    cy.get('button[type="submit"]').click();
    cy.get('lib-alert .alert-success').should('exist');
  });
  it('can create policy definition (provider)', function () {
    cy.visit('https://comarca-pallars-jussa.edaiss.es/policies');
    cy.contains('button', 'Create').click();
    cy.get('input[name="id"]').type(`policy-e2e-${now}`);
    cy.get('lib-policy-create select').first().select('Set');
    cy.get('lib-policy-create').contains('button', 'Create Policy').click();
    cy.get('lib-alert .alert-success').should('exist');
  });
  it('can create contract definition (provider)', function () {
    cy.visit('https://comarca-pallars-jussa.edaiss.es/contract-definitions');
    cy.contains('Create').click();
    cy.get('input[name="id"]').type(`contract-e2e-${now}`);
    cy.get('select[name="accessPolicyId"]').select(`policy-e2e-${now}`);
    cy.get('select[name="contractPolicyId"]').select(`policy-e2e-${now}`);
    cy.get('lib-multiselect-with-search.w-full > :nth-child(2) > .input > .grow').click();
    cy.get('lib-multiselect-with-search.w-full .label-text').contains(`asset-e2e-${now}`).click();
    cy.contains('Create Contract Definition').click();
    cy.get('.alert.alert-success').should('exist');
    cy.get('.alert.alert-success').contains("Contract Definition with ID 'contract-e2e-" + now + "'");
  });
  it('request and negotiate catalog (Analytic Platform)', function () {
    cy.visit('https://plataforma-analitica.edaiss.es/catalog');
    cy.get('lib-catalog-request .btn').click();
    cy.get('lib-catalog-request-form .btn').should('be.disabled');
    cy.get('lib-catalog-request-form input[name="counterPartyId"]').type(
      'did:web:ca-in2-edaiss-ds-analytics-dev.greensea-e5c14b01.spaincentral.azurecontainerapps.io:analytics-connector',
    );
    cy.get('lib-catalog-request-form input[name="counterPartyAddress"]').type(
      'https://ca-in2-edaiss-ds-healthcare-dev.greensea-e5c14b01.spaincentral.azurecontainerapps.io/protocol',
    );
    cy.get('lib-catalog-request-form .btn').should('be.enabled');
    cy.get('lib-catalog-request-form .btn').click();
    cy.get('lib-catalog-card .card-title').contains(`asset-e2e-${now}`);
    cy.get('lib-catalog-card').contains(`asset-e2e-${now}`).parents('lib-catalog-card').as('selectedCatalog');
    cy.get('@selectedCatalog').find('.card-actions').contains('Negotiate').click();
    cy.get('label').contains('Offer 1').click();
    cy.get('lib-catalog-negotiation button[type="submit"]').click();
    cy.get('lib-negotiation-progress').should('exist');
    cy.get('.btn', { timeout: 5000 }).contains('Go to Contracts').should('exist');
  });
  it('transfer contract (Analytic Platform)', function () {
    cy.visit('https://plataforma-analitica.edaiss.es/contracts');
    cy.get('lib-contract-agreement-card')
      .first()
      .contains(`asset-e2e-${now}`)
      .parents('lib-contract-agreement-card')
      .as('selectedContract');
    cy.get('@selectedContract').find('.card-actions').contains('Transfer').click();
    cy.get('select[name="transferType"]').select('0: HttpData-PUSH');
    cy.get('select[name="method"]').select('POST');
    cy.get('input[name="baseUrl"]').type(
      'https://ca-in2-edaiss-data-cons-api-dev.greensea-e5c14b01.spaincentral.azurecontainerapps.io/api/upload?blobName=structured/fhir-ips-json/&contentType=zip',
    );
    cy.get('button[type="submit"]').click();
    cy.contains('.step-success', 'COMPLETED', { timeout: 5000 }).should('have.class', 'step-success');
  });
  it('can create asset (Analytic Platform)', function () {
    cy.visit('https://plataforma-analitica.edaiss.es/assets');
    cy.contains('button', 'Create').click();
    cy.get('input[name="id"]').type(`asset-url-e2e-${now}`);
    cy.get('select[name="dataType"]').select('0: HttpData');
    cy.get('select[name="method"]').select('GET');
    cy.get('input[name="baseUrl"]').type(
      'https://ca-in2-edaiss-data-cons-api-dev.greensea-e5c14b01.spaincentral.azurecontainerapps.io/api/data/example-url',
    );
    cy.get('button[type="submit"]').click();
    cy.get('lib-alert .alert-success').should('exist');
  });
  it('can create policy definition (Analytic Platform)', function () {
    cy.visit('https://plataforma-analitica.edaiss.es/policies');
    cy.contains('button', 'Create').click();
    cy.get('input[name="id"]').type(`policy-url-e2e-${now}`);
    cy.get('lib-policy-create select').first().select('Set');
    cy.get('lib-policy-create').contains('button', 'Create Policy').click();
    cy.get('lib-alert .alert-success').should('exist');
  });
  it('can create contract definition (Analytic Platform)', function () {
    cy.visit('https://plataforma-analitica.edaiss.es/contract-definitions');
    cy.contains('Create').click();
    cy.get('input[name="id"]').type(`contract-url-e2e-${now}`);
    cy.get('select[name="accessPolicyId"]').select(`policy-url-e2e-${now}`);
    cy.get('select[name="contractPolicyId"]').select(`policy-url-e2e-${now}`);
    cy.get('lib-multiselect-with-search.w-full > :nth-child(2) > .input > .grow').click();
    cy.get('lib-multiselect-with-search.w-full .label-text').contains(`asset-url-e2e-${now}`).click();
    cy.contains('Create Contract Definition').click();
    cy.get('.alert.alert-success').should('exist');
    cy.get('.alert.alert-success').contains("Contract Definition with ID 'contract-url-e2e-" + now + "'");
  });

  it('request and negotiate catalog (Salud Pública)', function () {
    cy.visit('https://salud-publica.edaiss.es/catalog');
    cy.get('lib-catalog-request .btn').click();
    cy.get('lib-catalog-request-form .btn').should('be.disabled');
    cy.get('lib-catalog-request-form input[name="counterPartyId"]').type(
      'did:web:ca-in2-edaiss-ds-analytics-dev.greensea-e5c14b01.spaincentral.azurecontainerapps.io:analytics-connector',
    );
    cy.get('lib-catalog-request-form input[name="counterPartyAddress"]').type(
      'https://ca-in2-edaiss-ds-analytics-dev.greensea-e5c14b01.spaincentral.azurecontainerapps.io/protocol',
    );
    cy.get('lib-catalog-request-form .btn').should('be.enabled');
    cy.get('lib-catalog-request-form .btn').click();
    cy.get('lib-catalog-card .card-title').contains(`asset-url-e2e-${now}`);
    cy.get('lib-catalog-card').contains(`asset-url-e2e-${now}`).parents('lib-catalog-card').as('selectedCatalog');
    cy.get('@selectedCatalog').find('.card-actions').contains('Negotiate').click();
    cy.get('label').contains('Offer 1').click();
    cy.get('lib-catalog-negotiation button[type="submit"]').click();
    cy.get('lib-negotiation-progress').should('exist');
    cy.get('.btn', { timeout: 5000 }).contains('Go to Contracts').should('exist');
  });
  it('transfer contract (Salud Pública)', function () {
    cy.visit('https://salud-publica.edaiss.es/contracts');
    cy.get('lib-contract-agreement-card')
      .first()
      .contains(`asset-url-e2e-${now}`)
      .parents('lib-contract-agreement-card')
      .as('selectedContract');
    cy.get('@selectedContract').find('.card-actions').contains('Transfer').click();
    cy.get('select[name="transferType"]').select('0: HttpData-PUSH');
    cy.get('select[name="method"]').select('POST');
    cy.get('input[name="baseUrl"]').type(
      'https://ca-in2-edaiss-data-store-api-dev.greensea-e5c14b01.spaincentral.azurecontainerapps.io/api/data/edaiss_url_pbi_' +
        now,
    );
    cy.get('button[type="submit"]').click();
    cy.contains('.step-success', 'COMPLETED', { timeout: 5000 }).should('have.class', 'step-success');
  });
});
