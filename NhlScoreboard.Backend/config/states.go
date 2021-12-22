package config

type States struct {
	OffDay       []string `json:"off_day"`
	Scheduled    []string `json:"scheduled"`
	PostGame     []string `json:"post_game"`
	Intermission []string `json:"intermission"`
}
