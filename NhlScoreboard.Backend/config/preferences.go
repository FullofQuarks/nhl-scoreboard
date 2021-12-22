package config

type Preferences struct {
	TimeFormat          string   `json:"time_format"`
	EndOfDay            string   `json:"end_of_day"`
	Location            string   `json:"location"`
	LiveGameRefreshRate int      `json:"live_game_refresh_rate"`
	Teams               []string `json:"teams"`
	SogDisplayFrequency int      `json:"sog_display_frequency"`
	GoalAnimations      struct {
		PrefTeamOnly bool `json:"pref_team_only"`
	} `json:"goal_animations"`
}
