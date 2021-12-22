package config

type Boards struct {
	Scoreticker struct {
		PreferredTeamsOnly bool `json:"preferred_teams_only"`
		RotationRate       int  `json:"rotation_rate"`
	} `json:"scoreticker"`
	Seriesticker struct {
		PreferredTeamsOnly bool `json:"preferred_teams_only"`
		RotationRate       int  `json:"rotation_rate"`
	} `json:"seriesticker"`
	Standings struct {
		PreferredStandingsOnly bool   `json:"preferred_standings_only"`
		StandingType           string `json:"standing_type"`
		Divisions              string `json:"divisions"`
		Conference             string `json:"conference"`
	} `json:"standings"`
	Clock struct {
		Duration            int    `json:"duration"`
		HideIndicator       bool   `json:"hide_indicator"`
		PreferredTeamColors bool   `json:"preferred_team_colors"`
		ClockRgb            string `json:"clock_rgb"`
		DateRgb             string `json:"date_rgb"`
		FlashSeconds        bool   `json:"flash_seconds"`
	} `json:"clock"`
	Weather struct {
		Enabled         bool   `json:"enabled"`
		View            string `json:"view"`
		Units           string `json:"units"`
		Duration        int    `json:"duration"`
		DataFeed        string `json:"data_feed"`
		OwmApikey       string `json:"owm_apikey"`
		UpdateFreq      int    `json:"update_freq"`
		ShowOnClock     bool   `json:"show_on_clock"`
		ForecastEnabled bool   `json:"forecast_enabled"`
		ForecastDays    int    `json:"forecast_days"`
		ForecastUpdate  int    `json:"forecast_update"`
	} `json:"weather"`
	Wxalert struct {
		AlertFeed     string `json:"alert_feed"`
		UpdateFreq    int    `json:"update_freq"`
		ShowAlerts    bool   `json:"show_alerts"`
		NwsShowExpire bool   `json:"nws_show_expire"`
		AlertTitle    bool   `json:"alert_title"`
		ScrollAlert   bool   `json:"scroll_alert"`
		AlertDuration int    `json:"alert_duration"`
		ShowOnClock   bool   `json:"show_on_clock"`
	} `json:"wxalert"`
}
