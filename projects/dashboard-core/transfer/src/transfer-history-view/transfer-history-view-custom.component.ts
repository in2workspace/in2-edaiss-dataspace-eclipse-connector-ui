import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  ConsumerProviderSwitchComponent,
  DashboardStateService,
  FilterInputComponent,
  ItemCountSelectorComponent,
  ModalAndAlertService,
  PaginationComponent,
} from '@eclipse-edc/dashboard-core';
import { ContractAndTransferService } from '../contract-and-transfer.service';
import { TransferHistoryViewComponent } from './transfer-history-view.component';
import { TransferHistoryTableCustomComponent } from '../transfer-history-table/transfer-history-table-custom.component';

@Component({
  selector: 'lib-transfer-history',
  templateUrl: './transfer-history-view-custom.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    `,
  ],
  imports: [
    TransferHistoryTableCustomComponent,
    AsyncPipe,
    PaginationComponent,
    FilterInputComponent,
    ItemCountSelectorComponent,
    ConsumerProviderSwitchComponent,
  ],
})
export class TransferHistoryViewCustomComponent extends TransferHistoryViewComponent implements OnInit, OnDestroy {
  constructor(
    protected override readonly transferProcessService: ContractAndTransferService,
    protected override readonly modalAndAlertService: ModalAndAlertService,
    protected override readonly stateService: DashboardStateService,
  ) {
    super(transferProcessService, modalAndAlertService, stateService);
  }
}
