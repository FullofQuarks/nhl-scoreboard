package main

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"net/http"

	"NhlScoreboard.Backend/config"
)

type configStruct struct {
	Debug       bool               `json:"debug"`
	LogLevel    string             `json:"logLevel"`
	LiveMode    bool               `json:"liveMode"`
	Preferences config.Preferences `json:"preferences"`
	States      config.States      `json:"states"`
	Boards      config.Boards      `json:"boards"`
	SBIO        config.SBIO        `json:"sbio"`
}

func main() {
	plan, fileReadErr := ioutil.ReadFile("config.json")
	if fileReadErr != nil {
		panic("config file not found")
	}

	var dat configStruct
	err := json.Unmarshal(plan, &dat)
	fmt.Println(dat.Boards.Clock.Duration)
	if err != nil {
		panic("config file doesn't match schema definition")
	}
	router := gin.Default()
	router.GET("/config", func(context *gin.Context) {
		context.JSON(http.StatusOK, dat)
	})
	router.POST("/config", postConfig)

	runErr := router.Run("localhost:8080")
	if runErr != nil {
		panic("problem running: " + runErr.Error())
	}
}

func postConfig(c *gin.Context) {
	var newConfig configStruct

	if err := c.BindJSON(&newConfig); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Incorrectly formatted"})
	}

	c.IndentedJSON(http.StatusCreated, newConfig)
}
