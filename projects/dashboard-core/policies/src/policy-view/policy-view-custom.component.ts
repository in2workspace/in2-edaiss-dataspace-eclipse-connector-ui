import { Component } from '@angular/core';
import { PolicyService } from '../policy.service';
import { AsyncPipe } from '@angular/common';
import {
  DashboardStateService,
  FilterInputComponent,
  ItemCountSelectorComponent,
  ModalAndAlertService,
  PaginationComponent,
} from '@eclipse-edc/dashboard-core';
import { PolicyCardComponent } from '../policy-card/policy-card.component';
import { PolicyViewComponent } from './policy-view.component';

@Component({
  selector: 'lib-policy-view',
  standalone: true,
  imports: [AsyncPipe, FilterInputComponent, PaginationComponent, PolicyCardComponent, ItemCountSelectorComponent],
  templateUrl: './policy-view-custom.component.html',
  styleUrl: './policy-view-custom.component.css',
})
export class PolicyViewCustomComponent extends PolicyViewComponent {
  constructor(
    policyService: PolicyService,
    modalAndAlertService: ModalAndAlertService,
    stateService: DashboardStateService,
  ) {
    super(policyService, modalAndAlertService, stateService);
  }
}
