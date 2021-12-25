import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { ScoreboardConfig } from '../../models/scoreboard-config';
import { first } from 'rxjs';
import { HockeyTeams } from '../../models/hockey-teams';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    constructor(private configService: ConfigService, private router: Router, private location: Location) {}

    public currentConfiguration!: ScoreboardConfig;
    public hockeyTeams: string[] = HockeyTeams;
    private domainName: string = '';

    ngOnInit(): void {
        var tmpDomain = document.createElement('a');
        tmpDomain.href = window.location.href;
        this.domainName = tmpDomain.hostname;
        this.configService
            .getCurrentConfiguration(this.domainName)
            .pipe(first())
            .subscribe((c: ScoreboardConfig) => {
                this.currentConfiguration = c;
                return this.currentConfiguration;
            });
    }

    saveConfiguration($event: ScoreboardConfig) {
        this.configService.saveCurrentConfiguration(this.domainName, $event).pipe(first()).subscribe();
    }
}
