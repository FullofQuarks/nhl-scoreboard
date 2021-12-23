export class ScoreboardConfig {
    debug: boolean = false;
    logLevel: string = '';
    liveMode: boolean = false;
    preferences: Preferences = new Preferences();
    states: States = new States();
    boards: Boards = new Boards();
}

class Preferences {
    timeFormat: string = '';
    endOfDay: string = '';
    location: string = '';
    liveGameRefreshRate: number = 0;
    teams: string[] = [];
    sogDisplayFrequency: number = 0;
    goalAnimations: GoalAnimations = new GoalAnimations();
}

class GoalAnimations {
    prefTeamOnly: boolean = false;
}

class States {
    offDay: string[] = [];
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
    preferredTeamsOnly: boolean = true;
    rotationRate: number = 5;
}

class Seriesticker {
    preferredTeamsOnly: boolean = true;
    rotationRate: number = 5;
}

class Standings {
    preferredStandingsOnly: boolean = true;
    standingType: string = '';
    divisions: string = '';
    conference: string = '';
}

class Clock {
    duration: number = 0;
    hideIndicator: boolean = false;
    preferredTeamColors: boolean = true;
    clockRgb: string = '';
    dateRgb: string = '';
    flashSeconds: boolean = false;
}

class Weather {
    enabled: boolean = false;
    view: string = '';
    units: string = '';
    duration: number = 0;
    dataFeed: string = '';
    owmApikey: string = '';
    updateFreq: number = 0;
    showOnClock: boolean = false;
    forecastEnabled: boolean = false;
    forecastDays: number = 0;
    forecastUpdate: number = 0;
}

class Wxalert {
    alertFeed: string = '';
    updateFreq: number = 0;
    showAlerts: boolean = false;
    nwsShowExpire: boolean = false;
    alertTitle: boolean = false;
    scrollAlert: boolean = false;
    alertDuration: number = 0;
    showOnClock: boolean = false;
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
    dataUpdates: boolean = false;
    motionSensor: boolean = false;
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
    lightLevelLux: number = 0;
    mode: string = '';
    sunsetBrightness: number = 0;
    sunriseBrightness: number = 0;
}

class Pushbutton {
    enabled: boolean = false;
    bonnet: boolean = false;
    pin: number = 0;
    rebootDuration: number = 0;
    rebootOverrideProcess: string = '';
    displayReboot: boolean = false;
    powerOffDuration: number = 0;
    powerOffOverrideProcess: string = '';
    displayHalt: boolean = false;
    stateTriggered1: string = '';
    stateTriggered1Process: string = '';
}
