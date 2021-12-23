import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { ScoreboardConfig } from '../../models/scoreboard-config';
import { first, tap } from 'rxjs';
import { HockeyTeams } from '../../models/hockey-teams';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    constructor(private configService: ConfigService) {}

    public currentConfiguration!: ScoreboardConfig;
    public hockeyTeams: string[] = HockeyTeams;

    ngOnInit(): void {
        this.configService
            .getCurrentConfiguration()
            .pipe(first())
            .subscribe((c: ScoreboardConfig) => {
                this.currentConfiguration = c;
                return this.currentConfiguration;
            });
    }

    saveConfiguration($event: ScoreboardConfig) {
        this.configService.saveCurrentConfiguration($event).pipe(first()).subscribe();
    }
}
