import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AppContextService } from '@msft-sme/shell/angular';
import { Net, PowerShellSession } from '@msft-sme/shell/core';
import { AjaxError, Subscription } from 'rxjs/Rx';
import { Strings } from '../../../generated/strings';
import { HelloService } from '../hello.service';

@Component({
    selector: 'sme-powershell-example',
    template: `
      <sme-tool-header>PowerShell Examples</sme-tool-header>
      <sme-loading-wheel *ngIf="loading"></sme-loading-wheel>
      <div class="overflow-margins table-indent">
          This component provides a short overview / example on how to execute a PowerShell script, and then wait on the results. Once
          returned, the results are loaded into simple DOM elements for display. Construction and execution of PowerShell scripts
          is (or will be) details in the howtopowershell.md file included with the README for the extension seed project.
          <br />
          <br /> This example executed the "Get-Service" PowerShell cmdlet, and returned the following information:
          <br />
      </div>
      <div class="overflow-margins table-indent">
          <!-- be awere that styles update is coming -->
          <div>
              <sme-tool-header>{{serviceDisplayName}}</sme-tool-header>
          </div>
          <div *ngIf="serviceDefinition">
              <div>
                  <span>
                      <b>Machine Name:</b> {{serviceDefinition.machineName}}
                  </span>
                  <span>
                      <b>Handle:</b> {{serviceDefinition.serviceHandle}}
                  </span>
              </div>
              <div>
                  <span>
                      <b>Type:</b> {{serviceDefinition.serviceType}}
                  </span>
                  <span>
                      <b>Type:</b> {{serviceDefinition.startType}}
                  </span>
              </div>
              <div>
                  <b>Status:</b> {{serviceDefinition.status}}
              </div>
          </div>
          <div class="overflow-margins table-indent">
              <button class="btn btn-primary" (click)="toggleCode()">{{displayCodeButtonContent}}</button>
          </div>
          <div *ngIf="displayCode">
              When setting up a PowerShell component, it's important to create and store the Session object inside the component if there are going to be
              multiple calls.  A PowerShell session takes ~1 second to initialize before any scripts can be executed.
              <pre>
                  <code>
      public ngOnInit() {{ '{' }}
          this.displayCodeButtonContent = this.strings.HelloWorld.showCode;
          <span style="background-color: yellow;">this.psSession = this.appContextService.powerShell.createSession(this.appContextService.activeConnection.nodeName);</span>
          this.getServices();
      {{ '}' }}
                  </code>
              </pre>
              <br />
              Once the session is created, the service is invoked, and we subscribe to the results:
              <pre>
                  <code>
      /*
      //  The Get Services call on the "hello service" initiates a PowerShell session executes
      */
      private getServices() {{ '{' }}
          this.serviceSubscription = this.helloService.getService(this.psSession, 'winrm').subscribe(
              (service: any) => {{ '{' }}
                  this.loading = false;
                  if (service) {{ '{' }}
                      this.serviceDisplayName = service.displayName;
                      this.serviceDefinition = service;
                  {{ '}' }} else {{ '{' }}
                      this.serviceDisplayName = this.strings.HelloWorld.notFound;
                  {{ '}' }}
              },
              (error: AjaxError) => {{ '{' }}
                  this.errorMessage = Net.getErrorMessage(error);
                  this.loading = false;
              {{ '}' }}
          );
      {{ '}' }}
                  </code>
              </pre>
          </div>
      </div>
    `,
    styles: [`

    `]
})
export class PowershellExampleComponent implements OnInit, OnDestroy {
    public loading = true;
    public displayCode = true;
    public displayCodeButtonContent: string;
    private serviceSubscription: Subscription;
    private psSession: PowerShellSession;
    public errorMessage: string;
    public serviceDisplayName: string;
    public strings = this.appContextService.resourceCache.getStrings<Strings>();
    public serviceDefinition: any;

    /**
     * When module navigation is initiated, this is called, and is required of all components to allow browser back and forward
     * functionality.  This is also required of any component that modifies the URL in any way or shape.
     */
    public static navigationTitle(appContextService: AppContextService, snapshot: ActivatedRouteSnapshot): string {
        return MsftSme.resourcesStrings<Strings>().HelloWorld.powershell.title;
    }

    constructor(private appContextService: AppContextService, private helloService: HelloService) {
        this.serviceDisplayName = 'Loading...';
    }

    public ngOnInit() {
        this.displayCodeButtonContent = this.strings.HelloWorld.showCode;
        this.psSession = this.appContextService.powerShell.createSession(this.appContextService.activeConnection.nodeName);
        this.getServices();
    }

    public ngOnDestroy() {
        this.psSession.dispose();
    }

    /*
    //  The Get Services call on the "hello service" initiates a PowerShell session executes
    */
    private getServices() {
        this.serviceSubscription = this.helloService.getService(this.psSession, 'winrm').subscribe(
            (service: any) => {
                this.loading = false;
                if (service) {
                    this.serviceDisplayName = service.displayName;
                    this.serviceDefinition = service;
                } else {
                    this.serviceDisplayName = this.strings.HelloWorld.notFound;
                }
            },
            (error: AjaxError) => {
                this.errorMessage = Net.getErrorMessage(error);
                this.loading = false;
            }
        );
    }

    public toggleCode() {
        this.displayCode = !this.displayCode;

        if (!this.displayCode) { 
            this.displayCodeButtonContent = this.strings.HelloWorld.showCode;
        } else {
            this.displayCodeButtonContent = this.strings.HelloWorld.hideCode;
        }
    }
}
