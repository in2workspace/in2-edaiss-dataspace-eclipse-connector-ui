import { Component, OnChanges } from '@angular/core';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertComponent, JsonObjectTableComponent } from '@eclipse-edc/dashboard-core';
import { ContractNegotiationComponent } from './contract-negotiation.component';

@Component({
  selector: 'lib-catalog-negotiation',
  standalone: true,
  imports: [FormsModule, NgIf, AlertComponent, JsonObjectTableComponent, NgClass, AsyncPipe],
  templateUrl: './contract-negotiation-custom.component.html',
})
export class ContractNegotiationCustomComponent extends ContractNegotiationComponent implements OnChanges {}
