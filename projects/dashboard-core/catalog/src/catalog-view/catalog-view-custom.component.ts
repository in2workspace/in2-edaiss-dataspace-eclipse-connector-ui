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
import { CatalogRequestComponent } from '../catalog-request/catalog-request.component';
import { CatalogViewComponent } from './catalog-view.component';

@Component({
  selector: 'lib-catalog-view',
  standalone: true,
  imports: [
    AsyncPipe,
    FilterInputComponent,
    PaginationComponent,
    CatalogCardComponent,
    CatalogRequestComponent,
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
