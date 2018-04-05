import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppContextService, AuthorizationService, NavigationService } from '@msft-sme/shell/angular';
import { ContextMenu } from 'primeng/primeng';
import { Observable } from 'rxjs';

@Component({
    selector: 'sme-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy, OnInit {
    constructor(
        private appContext: AppContextService,  private navigationService: NavigationService) {
    }

    public ngOnInit(): void {
        this.appContext.ngInit({ navigationService: this.navigationService });
    }

    public ngOnDestroy() {
        this.appContext.ngDestroy();
    }
}
