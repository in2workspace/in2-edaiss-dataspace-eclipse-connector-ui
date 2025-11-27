import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ContractDefinitionsService } from '../..';
import {
  DashboardStateService,
  FilterInputComponent,
  ItemCountSelectorComponent,
  ModalAndAlertService,
  PaginationComponent,
} from '@eclipse-edc/dashboard-core';
import { ContractDefinitionCardComponent } from '../contract-definition-card/contract-definition-card.component';
import { ContractDefinitionsViewComponent } from './contract-definitions-view.component';

@Component({
  selector: 'lib-contract-definitions-view',
  imports: [
    AsyncPipe,
    PaginationComponent,
    FilterInputComponent,
    ContractDefinitionCardComponent,
    ItemCountSelectorComponent,
  ],
  templateUrl: './contract-definitions-view-custom.component.html',
  styleUrl: './contract-definitions-view-custom.component.css',
  standalone: true,
})
export class ContractDefinitionsViewCustomComponent extends ContractDefinitionsViewComponent {
  constructor(
    contractDefinitionsService: ContractDefinitionsService,
    modalAndAlertService: ModalAndAlertService,
    stateService: DashboardStateService,
  ) {
    super(contractDefinitionsService, modalAndAlertService, stateService);
  }
}
