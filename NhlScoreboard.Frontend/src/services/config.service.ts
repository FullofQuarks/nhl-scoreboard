import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScoreboardConfig } from '../models/scoreboard-config';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    constructor(private httpService: HttpClient) {}

    public getCurrentConfiguration(domain: string): Observable<ScoreboardConfig> {
        return this.httpService.get<ScoreboardConfig>(`http://${domain}/config`);
    }

    public saveCurrentConfiguration(domain: string, newConfig: ScoreboardConfig): Observable<any> {
        return this.httpService.post<ScoreboardConfig>(`http://${domain}/config`, newConfig, {
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
