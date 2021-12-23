export class ScoreboardConfig {
    debug: boolean = false;
    logLevel: string = '';
    liveMode: boolean = false;
    preferences: Preferences = new Preferences();
    states: States = new States();
    boards: Boards = new Boards();
    sbio: SBIO = new SBIO();

    public simpleConfiguration(selectedTeam: string): void {
        this.debug = false;
        this.liveMode = false;
        this.logLevel = 'INFO';
        this.preferences = {
            end_of_day: '8:00',
            goal_animations: {
                pref_team_only: true
            },
            live_game_refresh_rate: 10,
            location: '',
            sog_display_frequency: 4,
            teams: [selectedTeam],
            time_format: '12h'
        };
        this.sbio = {
            dimmer: {
                daytime: '',
                enabled: false,
                frequency: 5,
                light_level_lux: 400,
                mode: 'always',
                nighttime: '',
                offset: 0,
                source: 'software',
                sunrise_brightness: 40,
                sunset_brightness: 5
            },
            pushbutton: {
                bonnet: false,
                display_halt: true,
                display_reboot: true,
                enabled: false,
                pin: 25,
                poweroff_duration: 10,
                poweroff_override_process: '',
                reboot_duration: 2,
                reboot_override_process: '',
                state_triggered1: 'weather',
                state_triggered1_process: ''
            },
            screensaver: {
                animations: true,
                data_updates: false,
                delay: 30,
                enabled: false,
                motion_sensor: false,
                pin: 7,
                start: '22:00',
                stop: '08:00'
            }
        };
        this.states = {
            intermission: ['scoreticker', 'team_summary'],
            off_day: ['team_summary', 'clock'],
            postGame: ['team_summary', 'scoreticker', 'clock'],
            scheduled: ['team_summary', 'scoreticker', 'clock']
        };
        this.boards = {
            clock: {
                clock_rgb: '',
                date_rgb: '',
                duration: 15,
                flash_seconds: true,
                hide_indicator: false,
                preferred_team_colors: true
            },
            scoreticker: {
                preferred_teams_only: false,
                rotation_rate: 5
            },
            seriesticker: {
                preferred_teams_only: true,
                rotation_rate: 5
            },
            standings: {
                conference: 'eastern',
                divisions: 'atlantic',
                preferred_standings_only: true,
                standing_type: 'division'
            },
            weather: {
                data_feed: 'EC',
                duration: 60,
                enabled: false,
                forecast_days: 3,
                forecast_enabled: false,
                forecast_update: 1,
                owm_apikey: '',
                show_on_clock: true,
                units: 'metric',
                update_freq: 5,
                view: 'full'
            },
            wxalert: {
                alert_duration: 5,
                alert_feed: 'EC',
                alert_title: true,
                nws_show_expire: false,
                scroll_alert: true,
                show_alerts: false,
                show_on_clock: true,
                update_freq: 5
            }
        };
    }
}

class Preferences {
    time_format: string = '';
    end_of_day: string = '';
    location: string = '';
    live_game_refresh_rate: number = 0;
    teams: string[] = [];
    sog_display_frequency: number = 0;
    goal_animations: GoalAnimations = new GoalAnimations();
}

class GoalAnimations {
    pref_team_only: boolean = false;
}

class States {
    off_day: string[] = [];
    scheduled: string[] = [];
    postGame: string[] = [];
    intermission: string[] = [];
}

class Boards {
    scoreticker: Scoreticker = new Scoreticker();
    seriesticker: Seriesticker = new Seriesticker();
    standings: Standings = new Standings();
    clock: Clock = new Clock();
    weather: Weather = new Weather();
    wxalert: Wxalert = new Wxalert();
}

class Scoreticker {
    preferred_teams_only: boolean = true;
    rotation_rate: number = 5;
}

class Seriesticker {
    preferred_teams_only: boolean = true;
    rotation_rate: number = 5;
}

class Standings {
    preferred_standings_only: boolean = true;
    standing_type: string = '';
    divisions: string = '';
    conference: string = '';
}

class Clock {
    duration: number = 0;
    hide_indicator: boolean = false;
    preferred_team_colors: boolean = true;
    clock_rgb: string = '';
    date_rgb: string = '';
    flash_seconds: boolean = false;
}

class Weather {
    enabled: boolean = false;
    view: string = '';
    units: string = '';
    duration: number = 0;
    data_feed: string = '';
    owm_apikey: string = '';
    update_freq: number = 0;
    show_on_clock: boolean = false;
    forecast_enabled: boolean = false;
    forecast_days: number = 0;
    forecast_update: number = 0;
}

class Wxalert {
    alert_feed: string = '';
    update_freq: number = 0;
    show_alerts: boolean = false;
    nws_show_expire: boolean = false;
    alert_title: boolean = false;
    scroll_alert: boolean = false;
    alert_duration: number = 0;
    show_on_clock: boolean = false;
}

class SBIO {
    screensaver: Screensaver = new Screensaver();
    dimmer: Dimmer = new Dimmer();
    pushbutton: Pushbutton = new Pushbutton();
}

class Screensaver {
    enabled: boolean = false;
    animations: boolean = false;
    start: string = '';
    stop: string = '';
    data_updates: boolean = false;
    motion_sensor: boolean = false;
    pin: number = 0;
    delay: number = 0;
}

class Dimmer {
    enabled: boolean = false;
    source: string = '';
    daytime: string = '';
    nighttime: string = '';
    offset: number = 0;
    frequency: number = 0;
    light_level_lux: number = 0;
    mode: string = '';
    sunset_brightness: number = 0;
    sunrise_brightness: number = 0;
}

class Pushbutton {
    enabled: boolean = false;
    bonnet: boolean = false;
    pin: number = 0;
    reboot_duration: number = 0;
    reboot_override_process: string = '';
    display_reboot: boolean = false;
    poweroff_duration: number = 0;
    poweroff_override_process: string = '';
    display_halt: boolean = false;
    state_triggered1: string = '';
    state_triggered1_process: string = '';
}
