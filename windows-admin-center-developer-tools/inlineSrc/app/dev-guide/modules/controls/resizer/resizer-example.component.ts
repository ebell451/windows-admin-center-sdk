import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
    selector: 'sme-ng2-controls-resizer-example',
    styles: [`
      .list {
          margin: 5px 10px 5px 5px;
          width: 50px;
      }
      .list div{
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis; 
      }
      .list.expanded{
          width:auto;
      }

      .title .text{
          vertical-align: middle;
          line-height: 50px;
      }
    `],
    template: `
      <div class="sme-layout-absolute sme-position-inset-none sme-arrange-stack-v">
          <section class="sme-position-flex-none">
              <h2>Resizer Component</h2>
          </section>
          <section class="sme-position-flex-none">
              <br/>
              <ul class="nav nav-tabs" role="tablist" role="presentation">
                  <li [class.active]="tabIndex===1">
                      <a (click)="clickTab(1)">Top</a>
                  </li>
                  <li [class.active]="tabIndex===2">
                      <a (click)="clickTab(2)">Bottom</a>
                  </li>
                  <li [class.active]="tabIndex===3">
                      <a (click)="clickTab(3)">Left</a>
                  </li>
                  <li [class.active]="tabIndex===4">
                      <a (click)="clickTab(4)">Right</a>
                  </li>
              </ul>
          </section>
          <section *ngIf="tabIndex==1" class="sme-position-flex-auto sme-arrange-stack-v">
              <div class="sme-layout-relative sme-position-flex-auto">
                  <sme-split-view class="sme-layout-absolute sme-position-inset-none" #sv orientation="top">
                      <sme-split-view-pane>
                          <sme-details title="My Details Title" [(isExpanded)]="sv.isExpanded">
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                          </sme-details>
                      </sme-split-view-pane>

                      <sme-split-view-content>
                          <sme-master-view #masterView header="Master View Example" [total]="smeDataTable.renderedItems.length" [selection]="selection"
                              (clearSelection)="selection = null" (refresh)="alert('refreshed')" (filter)="active = !active; alert('filter active: ' + active)"
                              (clearSelection)="selection=null">
                              <div class="sme-master-view-custom-filter sme-arrange-stack-h sme-layout-action-bar-item">
                                  <span class="sme-scheme-secondary-text sme-arrange-ws-nowrap" for="groupBy"> Group by:</span>
                                  <div class="sme-select">
                                      <select id="groupBy" required [(ngModel)]="groupField" name="groupBy" #groupBy="ngModel" (ngModelChange)="onDropdownChange($event)">
                                          <option *ngFor="let option of groupByOptions" [value]="option.field">{{option.displayName}}</option>
                                      </select>
                                  </div>
                              </div>

                              <input #search type="search" pInputText autofocus>

                              <sme-data-table #smeDataTable [items]="testDataList" [(selection)]="selection" [globalFilter]="search">
                                  <sme-data-table-column field="name" header="Name" sortable="true">
                                  </sme-data-table-column>
                                  <sme-data-table-column field="displayName" header="Display Name" sortable="true" [searchable]="false">
                                  </sme-data-table-column>
                              </sme-data-table>
                          </sme-master-view>
                      </sme-split-view-content>
                  </sme-split-view>
              </div>
          </section>
          <section *ngIf="tabIndex==2" class="sme-position-flex-auto sme-arrange-stack-v">
              <div class="sme-layout-relative sme-position-flex-auto">
                  <sme-split-view class="sme-layout-absolute sme-position-inset-none" #sv orientation="bottom">
                      <sme-split-view-pane>
                          <sme-details title="My Details Title" [(isExpanded)]="sv.isExpanded">
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                              <div>this is the content</div>
                          </sme-details>
                      </sme-split-view-pane>

                      <sme-split-view-content>
                          <sme-master-view #masterView header="Master View Example" [total]="smeDataTable.renderedItems.length" [selection]="selection"
                              (clearSelection)="selection = null" (refresh)="alert('refreshed')" (filter)="active = !active; alert('filter active: ' + active)"
                              (clearSelection)="selection=null">
                              <div class="sme-master-view-custom-filter sme-arrange-stack-h sme-layout-action-bar-item">
                                  <span class="sme-scheme-secondary-text sme-arrange-ws-nowrap" for="groupBy"> Group by:</span>
                                  <div class="sme-select">
                                      <select id="groupBy" required [(ngModel)]="groupField" name="groupBy" #groupBy="ngModel" (ngModelChange)="onDropdownChange($event)">
                                          <option *ngFor="let option of groupByOptions" [value]="option.field">{{option.displayName}}</option>
                                      </select>
                                  </div>
                              </div>

                              <input #search type="search" pInputText autofocus>

                              <sme-data-table #smeDataTable [items]="testDataList" [(selection)]="selection" [globalFilter]="search">
                                  <sme-data-table-column field="name" header="Name" sortable="true">
                                  </sme-data-table-column>
                                  <sme-data-table-column field="displayName" header="Display Name" sortable="true" [searchable]="false">
                                  </sme-data-table-column>
                              </sme-data-table>
                          </sme-master-view>
                      </sme-split-view-content>
                  </sme-split-view>
              </div>
          </section>
          <section *ngIf="tabIndex==3" class="sme-position-flex-auto sme-arrange-stack-v">
              <div class="sme-layout-relative sme-position-flex-auto">
                  <sme-split-view class="sme-layout-absolute sme-position-inset-none" #sv orientation="left">
                      <sme-split-view-pane>
                          <div class="sme-position-flex-none sme-arrange-stack-h title">
                              <span class="sme-position-flex-auto text">Pane</span>
                              <button class="split-view-toggle sme-button-trigger sme-button-auto-width sme-position-flex-none" (click)="sv.togglePane()">
                                  <span class="sme-icon" [ngClass]="{ 'sme-icon-chevronLeft': sv.isExpanded, 'sme-icon-chevronRight': !sv.isExpanded }"></span>
                              </button>
                          </div>
                          <div class="sme-position-flex-auto sme-arrange-overflow-hide-x sme-arrange-overflow-auto-y sme-padding-bottom-sm list"
                          [ngClass]="{'expanded':sv.isExpanded}">
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>                        
                          </div>
                      </sme-split-view-pane>

                      <sme-split-view-content>
                          <sme-master-view #masterView header="Master View Example" [total]="smeDataTable.renderedItems.length" [selection]="selection"
                              (clearSelection)="selection = null" (refresh)="alert('refreshed')" (filter)="active = !active; alert('filter active: ' + active)"
                              (clearSelection)="selection=null">
                              <div class="sme-master-view-custom-filter sme-arrange-stack-h sme-layout-action-bar-item">
                                  <span class="sme-scheme-secondary-text sme-arrange-ws-nowrap" for="groupBy"> Group by:</span>
                                  <div class="sme-select">
                                      <select id="groupBy" required [(ngModel)]="groupField" name="groupBy" #groupBy="ngModel" (ngModelChange)="onDropdownChange($event)">
                                          <option *ngFor="let option of groupByOptions" [value]="option.field">{{option.displayName}}</option>
                                      </select>
                                  </div>
                              </div>

                              <input #search type="search" pInputText autofocus>

                              <sme-data-table #smeDataTable [items]="testDataList" [(selection)]="selection" [globalFilter]="search">
                                  <sme-data-table-column field="name" header="Name" sortable="true">
                                  </sme-data-table-column>
                                  <sme-data-table-column field="displayName" header="Display Name" sortable="true" [searchable]="false">
                                  </sme-data-table-column>
                              </sme-data-table>
                          </sme-master-view>
                      </sme-split-view-content>
                  </sme-split-view>
              </div>
          </section>
          <section *ngIf="tabIndex==4" class="sme-position-flex-auto sme-arrange-stack-v">
              <div class="sme-layout-relative sme-position-flex-auto">
                  <sme-split-view class="sme-layout-absolute sme-position-inset-none" #sv orientation="right">
                      <sme-split-view-pane>
                          <div class="sme-position-flex-none sme-arrange-stack-h title">
                              <button class="split-view-toggle sme-button-trigger sme-button-auto-width sme-position-flex-none" (click)="sv.togglePane()">
                                  <span class="sme-icon" [ngClass]="{ 'sme-icon-chevronLeft': !sv.isExpanded, 'sme-icon-chevronRight': sv.isExpanded }"></span>
                              </button>
                              <span class="sme-position-flex-auto text">Pane</span>                        
                          </div>
                          <div class="sme-position-flex-auto sme-arrange-overflow-hide-x sme-arrange-overflow-auto-y sme-padding-bottom-sm list"
                          [ngClass]="{'expanded':sv.isExpanded}">
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>
                              <div>Pane Content</div>                        
                          </div>
                      </sme-split-view-pane>

                      <sme-split-view-content>
                          <sme-master-view #masterView header="Master View Example" [total]="smeDataTable.renderedItems.length" [selection]="selection"
                              (clearSelection)="selection = null" (refresh)="alert('refreshed')" (filter)="active = !active; alert('filter active: ' + active)"
                              (clearSelection)="selection=null">
                              <div class="sme-master-view-custom-filter sme-arrange-stack-h sme-layout-action-bar-item">
                                  <span class="sme-scheme-secondary-text sme-arrange-ws-nowrap" for="groupBy"> Group by:</span>
                                  <div class="sme-select">
                                      <select id="groupBy" required [(ngModel)]="groupField" name="groupBy" #groupBy="ngModel" (ngModelChange)="onDropdownChange($event)">
                                          <option *ngFor="let option of groupByOptions" [value]="option.field">{{option.displayName}}</option>
                                      </select>
                                  </div>
                              </div>

                              <input #search type="search" pInputText autofocus>

                              <sme-data-table #smeDataTable [items]="testDataList" [(selection)]="selection" [globalFilter]="search">
                                  <sme-data-table-column field="name" header="Name" sortable="true">
                                  </sme-data-table-column>
                                  <sme-data-table-column field="displayName" header="Display Name" sortable="true" [searchable]="false">
                                  </sme-data-table-column>
                              </sme-data-table>
                          </sme-master-view>
                      </sme-split-view-content>
                  </sme-split-view>
              </div>
          </section>    
      </div>
    `
})
export class ResizerExampleComponent implements OnInit {
    public tabIndex = 1;
    public testDataList = [];

    public ngOnInit(): void {
        for (let i = 0; i < 500; i++) {
            this.testDataList.push({ name: i, displayName: 'Item ' + i });
        }
    }

    public clickTab(tabIndex: number) {
        this.tabIndex = tabIndex;        
    }
}
