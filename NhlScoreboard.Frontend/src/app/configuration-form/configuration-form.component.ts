import { Component, Input, OnInit } from '@angular/core';
import { ScoreboardConfig } from '../../models/scoreboard-config';

@Component({
    selector: 'app-configuration-form',
    templateUrl: './configuration-form.component.html',
    styleUrls: ['./configuration-form.component.css']
})
export class ConfigurationFormComponent implements OnInit {
    @Input() currentConfiguration!: ScoreboardConfig;

    constructor() {}

    ngOnInit(): void {
        console.table(this.currentConfiguration);
    }
}
