import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScoreboardConfig } from '../models/scoreboard-config';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    constructor(private httpService: HttpClient) {}

    public getCurrentConfiguration(): Observable<ScoreboardConfig> {
        return this.httpService.get<ScoreboardConfig>('http://localhost:8080/config');
    }
}
