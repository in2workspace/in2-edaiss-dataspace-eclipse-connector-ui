import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ConsumerProviderSwitchComponent,
  DashboardStateService,
  FilterInputComponent,
  ItemCountSelectorComponent,
  ModalAndAlertService,
  PaginationComponent,
} from '@eclipse-edc/dashboard-core';
import { ContractAndTransferService } from '../contract-and-transfer.service';
import { ContractAgreementCardCustomComponent } from '../contract-agreement-card/contract-agreement-card-custom.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { ContractViewComponent } from './contract-view.component';

@Component({
  selector: 'lib-contract-agreement-view',
  standalone: true,
  imports: [
    FilterInputComponent,
    PaginationComponent,
    ContractAgreementCardCustomComponent,
    AsyncPipe,
    NgClass,
    ConsumerProviderSwitchComponent,
    ItemCountSelectorComponent,
  ],
  templateUrl: './contract-view-custom.component.html',
  styleUrl: './contract-view-custom.component.css',
})
export class ContractViewCustomComponent extends ContractViewComponent implements OnInit, OnDestroy {
  constructor(
    contractAndTransferService: ContractAndTransferService,
    modalAndAlertService: ModalAndAlertService,
    stateService: DashboardStateService,
  ) {
    super(contractAndTransferService, modalAndAlertService, stateService);
  }
}
