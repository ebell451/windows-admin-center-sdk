import { Component } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import {
    AppContextService,
    ConfirmationDialogOptions,
    ConfirmationDialogResult,
    ConfirmationListDialogOptions,
    ConfirmationListDialogResult,
    DialogOptions,
    DialogResult,
    DialogService,
    MessageDialogOptions,
    MessageDialogResult
} from '@msft-sme/shell/angular';

import { ExampleFullScreenDialogOptions, ExampleFullScreenDialogResult } from './dialog-example-full-screen-dialog.component';

@Component({
    selector: 'sme-ng2-controls-dialog-example',
    template: `
      <div class="m-l-xxs tool-container">
        <div>
          <h3>Message Dialog Example</h3>
          <button (click)="onClickMessageDialog()">Click me for a message dialog!</button>
        </div>

        <div>
          <h3>Message Dialog with Link Example</h3>
          <button (click)="onClickMessageDialogWithLink()">Click me for a message dialog with link!</button>
        </div>

        <div>
          <h3>Message Dialog with Checkbox Example</h3>
          <button (click)="onClickMessageDialogWithCheckbox()">Click me for a message dialog with a checkbox!</button>
        </div>

        <div>
          <h3>Confirmation Dialog Example</h3>
          <button (click)="onClickConfirmationDialog()">Click me for a confirmation dialog!</button>
        </div>

        <div>
          <h3>Confirmation Dialog Double Check Example</h3>
          <button (click)="onClickDoubleCheckConfirmationDialog()">Click me for a confirmation dialog with a double check (confirm button disabled if double check box unchecked)!</button>
        </div>

        <div>
          <h3>Confirmation List Dialog Example</h3>
          <button (click)="onClickConfirmationListDialog()">Click me for a confirmation dialog with a list!</button>
          <button (click)="onClickConfirmationListDialog('radio')">Click me for a confirmation dialog with a radio list!</button>
        </div>

        <div>
          <h3>Custom Full screen Dialog Example</h3>
          <button (click)="onClickFullScreenDialog()">Click me for a full screen dialog!</button>
        </div>
        <div>
          <h3>Custom dialog that opens a dialog</h3>
          <button (click)="onClickConfirmationDialogChain()">Click me for a dialog that opens another dialog!</button>
        </div>
      </div>

      <sme-message-dialog id="message-dialog"></sme-message-dialog>
      <sme-confirmation-dialog id="confirmation-dialog"></sme-confirmation-dialog>
      <sme-confirmation-list-dialog id="confirmation-list-dialog"></sme-confirmation-list-dialog>
      <sme-dialog-example-full-screen-dialog id="full-screen-dialog"></sme-dialog-example-full-screen-dialog>
      <sme-dialog-example-dialog-chain id="dialog-chain"></sme-dialog-example-dialog-chain>
    `
})
export class DialogExampleComponent {

    public static navigationTitle(appContextService: AppContextService, snapshot: ActivatedRouteSnapshot): string {
        return 'sme-dialog';
    }

    /**
     * Initializes a new instance of the DialogExampleComponent class.
     *
     * @param dialogService The dialog service provider.
     */
    constructor(private dialogService: DialogService) { }

    /**
     * The method to run when the message dialog button is clicked.
     */
    public onClickMessageDialog(): void {
        let subject = this.dialogService.show('message-dialog', {
            buttonText: 'Button Text',
            message: 'Check the console for a logging of the result when you dismiss this dialog!',
            title: 'My title!'
        });

        subject.subscribe((result) => {
            //
        });
    }

    /**
     * The method to run when the message dialog button is clicked.
     */
    public onClickMessageDialogWithLink(): void {
        let subject = this.dialogService.show<MessageDialogOptions, DialogResult>('message-dialog', {
            buttonText: 'Button Text2',
            message: 'Check out microsoft site for more information!',
            title: 'My title2!',
            externalLink: { url: 'http://www.microsoft.com', title: 'Microsoft' }
        });

        subject.subscribe((result) => {
            //
        });
    }

    /**
     * The method called when the message dialog with checkbox button is clicked.
     */
    public onClickMessageDialogWithCheckbox(): void {
        let subject = this.dialogService.show<MessageDialogOptions, MessageDialogResult>('message-dialog', {
            buttonText: 'Button Text2',
            message: 'Check out microsoft site for more information!',
            title: 'My title2!',
            checkboxText: 'Do not show this message again'
        });

        subject.subscribe((result) => {
            console.log(result);
        });
    }

    /**
     * The method to run when the confirmation dialog button is clicked.
     */
    public onClickConfirmationDialog(): void {
        let subject = this.dialogService.show<ConfirmationDialogOptions, ConfirmationDialogResult>('confirmation-dialog', {
            cancelButtonText: 'Cancel',
            checkboxText: 'Click here to do a thing!',
            confirmButtonText: 'OK',
            message: 'Check the console for a logging of the result when you dismiss this dialog!',
            title: 'My title!'
        });

        subject.subscribe((result) => {
            //
        });
    }

    /**
     * The method to run when the double check confirmation dialog button is clicked.
     */
    public onClickDoubleCheckConfirmationDialog(): void {
        let subject = this.dialogService.show<ConfirmationDialogOptions, ConfirmationDialogResult>('confirmation-dialog', {
            cancelButtonText: 'Cancel',
            checkboxText: 'Click here to do a thing!',
            doubleCheckText: 'Click here to enable the confirm button!',
            confirmButtonText: 'OK',
            message: 'Check the console for a logging of the result when you dismiss this dialog!',
            title: 'My title!'
        });

        subject.subscribe((result) => {
            //
        });
    }

    /**
     * The method to run when the confirmation dialog button is clicked.
     */
    public onClickConfirmationListDialog(listT?: string): void {
        let strings: any[] = [];
        for (let i = 0; i < 50; i++) {
            strings.push({title: 'list item #' + i, value: 'list item #' + i});
            // strings.push('list item ' + i);
        }

        let obs = Observable.timer(2000).flatMap((_) => Observable.of(strings));

        let subject = this.dialogService.show<ConfirmationListDialogOptions, ConfirmationListDialogResult>('confirmation-list-dialog', {
            cancelButtonText: 'Cancel',
            checkboxText: 'Click here to do a thing!',
            confirmButtonText: 'OK',
            listDataSource: obs,
            listType: listT,
            title: 'My title!',
            listFooterText: 'This is the list footer.',
            listHeaderText: 'The list header:'
        });

        subject.subscribe((result) => {
            // handle result
        });
    }

    /**
     * The method to run when the full screen dialog button is clicked.
     */
    public onClickFullScreenDialog(): void {
        let subject = this.dialogService.show<ExampleFullScreenDialogOptions, ExampleFullScreenDialogResult>('full-screen-dialog', {
            title: 'Full screen!',
            label: 'Very sad label in a huge dialog.'
        });

        subject.subscribe((result: ExampleFullScreenDialogResult) => {
            // handle result
        });
    }

    /**
     * The method to run when the confirmation dialog button is clicked.
     */
    public onClickConfirmationDialogChain(): void {
        let subject = this.dialogService.show<ConfirmationDialogOptions, ConfirmationDialogResult>('dialog-chain', {
            cancelButtonText: 'Cancel',
            checkboxText: 'Do not show another dialog confirmation dialog',
            confirmButtonText: 'OK',
            message: 'This should open another dialog when you click OK and the checkbox is unchecked',
            title: 'first dialog'
        });

        subject.subscribe((result) => {
            // handle the result
        });
    }
}
