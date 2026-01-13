import { Component, OnChanges } from '@angular/core';
import { NgIf } from '@angular/common';
import { PolicyCardComponent } from './policy-card.component';

@Component({
  selector: 'lib-policy-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './policy-card-custom.component.html',
  styleUrl: './policy-card-custom.component.css',
})
export class PolicyCardCustomComponent extends PolicyCardComponent implements OnChanges {}
