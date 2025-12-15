import { Component } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { AsyncPipe } from '@angular/common';
import {
  DashboardStateService,
  FilterInputComponent,
  ItemCountSelectorComponent,
  ModalAndAlertService,
  PaginationComponent,
} from '@eclipse-edc/dashboard-core';
import { CatalogCardComponent } from '../catalog-card/catalog-card.component';
import { CatalogViewComponent } from './catalog-view.component';
import { CatalogRequestCustomComponent } from '../catalog-request/catalog-request-custom.component';

@Component({
  selector: 'lib-catalog-view',
  standalone: true,
  imports: [
    AsyncPipe,
    FilterInputComponent,
    PaginationComponent,
    CatalogCardComponent,
    CatalogRequestCustomComponent,
    ItemCountSelectorComponent,
  ],
  templateUrl: './catalog-view-custom.component.html',
  styleUrl: './catalog-view-custom.component.css',
})
export class CatalogViewCustomComponent extends CatalogViewComponent {
  constructor(
    stateService: DashboardStateService,
    catalogService: CatalogService,
    modalAndAlertService: ModalAndAlertService,
  ) {
    super(stateService, catalogService, modalAndAlertService);
  }
}
