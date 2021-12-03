import { Injectable, Injector } from '@angular/core';
import { BusyService } from './busy,service';

@Injectable()
export class ShareFacadeService {
    public get busyService(): BusyService {
        if (!this._busyService) {
            this._busyService = this.injector.get(BusyService);
        }
        return this._busyService;
    }

    constructor(
        private injector: Injector,
    ) {}
    // Singleton Pattern
    private _busyService: BusyService | undefined;

    public initSpinnerBS = this.busyService.initSpinnerBS;
    public spinnerBS = this.busyService.spinnerBS;

    startInitSpinner(): void{
        this.busyService.startInitSpinner();
    }

    stopInitSpinner(): void {
        this.busyService.stopInitSpinner();
    }

    startSpinner(): void {
        this.busyService.startSpinner();
    }

    stopSpinner(): void {
        this.busyService.stopSpinner();
    }

}
