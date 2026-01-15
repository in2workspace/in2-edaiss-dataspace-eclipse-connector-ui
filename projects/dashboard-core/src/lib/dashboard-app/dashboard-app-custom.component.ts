import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe, NgClass, NgForOf } from '@angular/common';
import { DashboardAppComponent } from './dashboard-app.component';
import { DashboardStateService } from '../services/dashboard-state.service';
import { EdcClientService } from '../services/edc-client.service';
import { ModalAndAlertService } from '../services/modal-and-alert.service';
import { version } from 'package.json';
import { EDAISS_LIB_VERSION } from '../version';

@Component({
  selector: 'lib-dashboard-app',
  standalone: true,
  imports: [RouterOutlet, NgForOf, RouterLink, RouterLinkActive, AsyncPipe, NgClass],
  templateUrl: './dashboard-app-custom.component.html',
  styleUrl: './dashboard-app-custom.component.css',
})
export class DashboardAppCustomComponent extends DashboardAppComponent {
  version: string = version;
  edaissVersion: string = EDAISS_LIB_VERSION;
  constructor(
    stateService: DashboardStateService,
    edcClientService: EdcClientService,
    modalAndAlertService: ModalAndAlertService,
  ) {
    super(stateService, edcClientService, modalAndAlertService);
  }
}
