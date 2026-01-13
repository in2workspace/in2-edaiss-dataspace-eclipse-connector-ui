import { Component } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { ContractAgreementCardComponent } from './contract-agreement-card.component';

@Component({
  selector: 'lib-contract-agreement-card',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './contract-agreement-card-custom.component.html',
  styleUrl: './contract-agreement-card-custom.component.css',
})
export class ContractAgreementCardCustomComponent extends ContractAgreementCardComponent {}
