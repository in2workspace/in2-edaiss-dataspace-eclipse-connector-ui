import { Component } from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { FilterInputComponent, ItemCountSelectorComponent, PaginationComponent } from '@eclipse-edc/dashboard-core';
import { CatalogCardCustomComponent } from '../catalog-card/catalog-card-custom.component';
import { CatalogViewComponent } from './catalog-view.component';
import { CatalogRequestCustomComponent } from '../catalog-request/catalog-request-custom.component';
import { CatalogDataset } from '../catalog-dataset';
import { IdResponse } from '@think-it-labs/edc-connector-client';
import { ContractNegotiationCustomComponent } from '../contract-negotiation/contract-negotiation-custom.component';
import { NegotiationProgressComponent } from '../negotiation-progress/negotiation-progress.component';

@Component({
  selector: 'lib-catalog-view',
  standalone: true,
  imports: [
    AsyncPipe,
    FilterInputComponent,
    PaginationComponent,
    CatalogCardCustomComponent,
    CatalogRequestCustomComponent,
    ItemCountSelectorComponent,
  ],
  templateUrl: './catalog-view-custom.component.html',
  styleUrl: './catalog-view-custom.component.css',
})
export class CatalogViewCustomComponent extends CatalogViewComponent {
  override negotiateContract(catalogDataset: CatalogDataset) {
    const callbacks = {
      negotiationRequested: (id: IdResponse) => {
        this.modalAndAlertService.openModal(NegotiationProgressComponent, { negotiationId: id }, undefined, true);
      },
    };
    this.modalAndAlertService.openModal(
      ContractNegotiationCustomComponent,
      { catalogDataset: catalogDataset },
      callbacks,
    );
  }
}
