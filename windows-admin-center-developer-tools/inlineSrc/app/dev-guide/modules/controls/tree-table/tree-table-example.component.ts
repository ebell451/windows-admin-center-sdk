import { Component } from '@angular/core';
import { TreeNodeDataItem } from '@msft-sme/shell/angular';
import { TestData } from './testData';

@Component({
    selector: 'sme-ng2-controls-tree-table-example',
    styles: [`
      /* The following style is only for the example page to hardcode a height for the data table. */
      /* In the actual UI code we don't do this to the data table. */
      :host >>> .data-table-container{
          position: relative;
          height:300px
      }

      :host >>> .table-chart{
          padding: 10px 0;
          display: block;
      }
    `],
    template: `
      <div class="sme-layout-absolute sme-position-inset-none sme-arrange-stack-v">
          <section class="sme-position-flex-none">
              <h2>Tree Table Component</h2>
          </section>

          <section class="sme-position-flex-none">
              <br/>
              <ul class="nav nav-tabs" role="tablist" role="presentation">
                  <li [class.active]="tabIndex===1">
                      <a (click)="clickTab(1)">Simple Tree</a>
                  </li>
                  <li [class.active]="tabIndex===2">
                      <a (click)="clickTab(2)">Tree Table</a>
                  </li>
                  <li [class.active]="tabIndex===3">
                      <a (click)="clickTab(3)">Multiple Selection in Tree Table</a>
                  </li>
              </ul>
              <br/>
          </section>
          <section *ngIf="tabIndex==1" class="sme-position-flex-auto sme-arrange-stack-v">
              <h4 class="sme-position-flex-none">Simple Tree</h4>
              <div class="sme-layout-relative sme-position-flex-auto">
                  <sme-tree-table [items]="sampleData1" [(selection)]="selectedData1" class="sme-layout-absolute sme-position-inset-none" [showHeader]="false"
                      [showGrid]="false" [showLeftMargin]="false">
                      <sme-tree-table-column field="label" header="Name" sortable="true" width="40%">
                          <ng-template let-data>
                              <span *ngIf="data.type==='folder'" class="sme-icon sme-icon-folder"></span>
                              <span *ngIf="data.type!=='folder'" class="placeholder"></span>
                              <strong>{{data.label}}</strong>
                          </ng-template>
                      </sme-tree-table-column>
                  </sme-tree-table>
              </div>
              <div class="sme-position-flex-none">
                  Selected Item: {{selectedData1 && selectedData1.data.label}}
              </div>
          </section>
          <section *ngIf="tabIndex==2" class="sme-position-flex-auto sme-arrange-stack-v">
              <h4 class="sme-position-flex-none">Tree Table</h4>
              <div class="sme-layout-relative sme-position-flex-auto">
                  <sme-tree-table [items]="sampleData1" [(selection)]="selectedData1" class="sme-layout-absolute sme-position-inset-none">
                      <sme-tree-table-column field="label" header="Name" sortable="true" width="40%">
                          <ng-template let-data>
                              <span *ngIf="data.type==='folder'" class="sme-icon sme-icon-folder"></span>
                              <span *ngIf="data.type!=='folder'" class="placeholder"></span>
                              <strong>{{data.label}}</strong>
                          </ng-template>
                      </sme-tree-table-column>
                      <sme-tree-table-column field="ext" header="Extension" sortable="true"></sme-tree-table-column>
                      <sme-tree-table-column field="createDateTime" header="Creation Date Time" sortable="true"></sme-tree-table-column>
                      <sme-tree-table-column field="modificationDateTime" header="Modification Date Time" sortable="true"></sme-tree-table-column>
                  </sme-tree-table>
              </div>
              <div class="sme-position-flex-none">
                  Selected Item: {{selectedData1 && selectedData1.data.label}}
              </div>
          </section>
          <section *ngIf="tabIndex==3" class="sme-position-flex-auto sme-arrange-stack-v">
              <h4 class="sme-position-flex-none">Multiple Selection in Tree Table</h4>
              <div class="sme-layout-relative sme-position-flex-auto">
                  <sme-tree-table [items]="sampleData1" [(selection)]="selectedData2" class="sme-layout-absolute sme-position-inset-none" selectionMode="multiple">
                      <sme-tree-table-column field="label" header="Name" sortable="true" width="40%"></sme-tree-table-column>
                      <sme-tree-table-column field="ext" header="Extension" sortable="true"></sme-tree-table-column>
                      <sme-tree-table-column field="createDateTime" header="Creation Date Time" sortable="true"></sme-tree-table-column>
                      <sme-tree-table-column field="modificationDateTime" header="Modification Date Time" sortable="true"></sme-tree-table-column>
                  </sme-tree-table>
              </div>
              <div class="sme-position-flex-none">
                  <span>Selected Items: </span>
                  <span class="selectionCount">
                      <span *ngIf="selectedData2 && selectedData2.length<10">
                          <span *ngFor="let item of selectedData2">{{item.data.label}} </span>
                      </span>
                      <span *ngIf="selectedData2 && selectedData2.length>=10">
                          {{selectedData2.length}} items
                      </span>
                  </span>
                  <button class="clearSelection" (click)="clearSelection()">Clear Selection</button>
              </div>
          </section>
      </div>
    `
})
export class TreeTableExampleComponent {
    public tabIndex = 1;
    public sampleData1: TreeNodeDataItem[];
    public selectedData2: TreeNodeDataItem[];

    constructor() {
        this.sampleData1 = [TestData];
    }

    public clickTab(tabIndex: number) {
        this.tabIndex = tabIndex;
    }

    public clearSelection() {
        this.selectedData2 = [];
    }
}
