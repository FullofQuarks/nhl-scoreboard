import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ScoreboardConfig } from '../../models/scoreboard-config';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbTypeahead, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, filter, map, merge, Observable, OperatorFunction, Subject } from 'rxjs';

@Component({
    selector: 'app-configuration-form',
    templateUrl: './configuration-form.component.html',
    styleUrls: ['./configuration-form.component.css']
})
export class ConfigurationFormComponent implements OnInit {
    @Input() currentConfiguration!: ScoreboardConfig;
    @Input() hockeyTeams!: string[];
    @Output() newConfiguration = new EventEmitter<ScoreboardConfig>();
    @ViewChild('instance', { static: true }) instance!: NgbTypeahead;
    focus$ = new Subject<string>();
    click$ = new Subject<string>();
    model: any;

    search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
        const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
        const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
        const inputFocus$ = this.focus$;

        return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
            map(term =>
                (term === ''
                    ? this.hockeyTeams
                    : this.hockeyTeams.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
                ).slice(0, 10)
            )
        );
    };

    public form: FormGroup = new FormGroup({ team: new FormControl() });

    constructor() {}

    ngOnInit(): void {
        this.form.controls['team'].setValue(this.currentConfiguration?.preferences?.teams[0] ?? '');
    }

    saveConfiguration() {
        this.newConfiguration.emit(this.currentConfiguration);
    }

    itemSelected($event: NgbTypeaheadSelectItemEvent) {
        this.form.controls['team'].setValue($event.item);
        this.currentConfiguration.preferences.teams[0] = $event.item;
        console.warn(this.currentConfiguration.preferences.teams[0]);
    }
}
