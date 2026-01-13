import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { CatalogCardComponent } from './catalog-card.component';

@Component({
  selector: 'lib-catalog-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './catalog-card-custom.component.html',
  styleUrl: './catalog-card-custom.component.css',
})
export class CatalogCardCustomComponent extends CatalogCardComponent implements OnInit {}
