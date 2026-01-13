import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { ContractDefinitionCardComponent } from './contract-definition-card.component';

@Component({
  selector: 'lib-contract-definition-card',
  imports: [NgForOf, NgIf],
  templateUrl: './contract-definition-card-custom.component.html',
  standalone: true,
  styleUrl: './contract-definition-card-custom.component.css',
})
export class ContractDefinitionCardCustomComponent extends ContractDefinitionCardComponent {}
