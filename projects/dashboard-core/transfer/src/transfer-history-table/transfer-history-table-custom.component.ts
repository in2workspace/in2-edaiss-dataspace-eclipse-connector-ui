import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { ModalAndAlertService, DashboardStateService } from '@eclipse-edc/dashboard-core';
import { TransferHistoryTableComponent } from './transfer-history-table.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-transfer-history-table',
  standalone: true,
  imports: [NgClass, DatePipe, AsyncPipe],
  templateUrl: './transfer-history-table-custom.component.html',
})
export class TransferHistoryTableCustomComponent extends TransferHistoryTableComponent implements OnChanges {
  constructor(
    protected override readonly modalAndAlertService: ModalAndAlertService,
    public stateService: DashboardStateService,
    private http: HttpClient,
  ) {
    super(modalAndAlertService);
  }

  override async ngOnChanges(changes: SimpleChanges) {
    if (this.transferProcesses) {
      this.transferProcesses.forEach(transferProcess => {
        const baseUrl =
          transferProcess['https://w3id.org/edc/v0.0.1/ns/dataDestination'][0][
            'https://w3id.org/edc/v0.0.1/ns/baseUrl'
          ][0]['@value'];
        this.http.get(baseUrl, { responseType: 'text' }).subscribe({
          next: url => (transferProcess['assetUrl'] = url),
          error: err => {
            console.error('HTTP error', err);
            transferProcess['assetUrl'] = '/transfer-history';
          },
        });
      });
    }
    if (changes['transferProcesses']) {
      if (this.transferProcesses) {
        for (const transferProcess of this.transferProcesses) {
          if (transferProcess.id) {
            this.stateType[transferProcess.id] = this.getStateType(transferProcess.state);
          }
        }
      }
    }
  }
}
