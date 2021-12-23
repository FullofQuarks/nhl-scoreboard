import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { ScoreboardConfig } from '../../models/scoreboard-config';
import { first } from 'rxjs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    constructor(private configService: ConfigService) {}

    public currentConfiguration!: ScoreboardConfig;

    ngOnInit(): void {
        this.configService
            .getCurrentConfiguration()
            .pipe(first())
            .subscribe(c => (this.currentConfiguration = c));
    }
}
