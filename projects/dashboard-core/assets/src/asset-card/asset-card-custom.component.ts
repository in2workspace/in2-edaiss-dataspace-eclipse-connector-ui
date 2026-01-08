import { Component, OnChanges } from '@angular/core';
import { NgIf } from '@angular/common';
import { AssetCardComponent } from './asset-card.component';

@Component({
  selector: 'lib-asset-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './asset-card-custom.component.html',
  styleUrl: './asset-card-custom.component.css',
})
export class AssetCardCustomComponent extends AssetCardComponent implements OnChanges {}
