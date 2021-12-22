package config

type SBIO struct {
	Screensaver struct {
		Enabled      bool   `json:"enabled"`
		Animations   bool   `json:"animations"`
		Start        string `json:"start"`
		Stop         string `json:"stop"`
		DataUpdates  bool   `json:"data_updates"`
		MotionSensor bool   `json:"motionsensor"`
		Pin          int    `json:"pin"`
		Delay        int    `json:"delay"`
	} `json:"screensaver"`
	Dimmer struct {
		Enabled           bool   `json:"enabled"`
		Source            string `json:"source"`
		Daytime           string `json:"daytime"`
		Nighttime         string `json:"nighttime"`
		Offset            int    `json:"offset"`
		Frequency         int    `json:"frequency"`
		LightLevelLux     int    `json:"light_level_lux"`
		Mode              string `json:"mode"`
		SunsetBrightness  int    `json:"sunset_brightness"`
		SunriseBrightness int    `json:"sunrise_brightness"`
	} `json:"dimmer"`
	Pushbutton struct {
		Enabled                 bool   `json:"enabled"`
		Bonnet                  bool   `json:"bonnet"`
		Pin                     int    `json:"pin"`
		RebootDuration          int    `json:"reboot_duration"`
		RebootOverrideProcess   string `json:"reboot_override_process"`
		DisplayReboot           bool   `json:"display_reboot"`
		PowerOffDuration        int    `json:"poweroff_duration"`
		PowerOffOverrideProcess string `json:"poweroff_override_process"`
		DisplayHalt             bool   `json:"display_halt"`
		StateTriggered1         string `json:"state_triggered1"`
		StateTriggered1Process  string `json:"state_triggered1_process"`
	} `json:"pushbutton"`
}
