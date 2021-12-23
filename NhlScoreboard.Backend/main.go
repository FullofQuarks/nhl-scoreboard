package main

import (
	"encoding/json"
	"github.com/gin-contrib/cors"
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
	if err != nil {
		panic("config file doesn't match schema definition")
	}

	router := gin.Default()
	router.Use(cors.Default())

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

	result, marshalError := json.MarshalIndent(&newConfig, "", "    ")
	if marshalError != nil {
		panic("Couldn't convert response to JSON")
	}

	saveErr := ioutil.WriteFile("config.json", result, 0644)
	if saveErr != nil {
		panic("Couldn't save file")
	}

	c.IndentedJSON(http.StatusCreated, newConfig)
}
