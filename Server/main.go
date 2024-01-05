package main

import (
	"fmt"
	"log"
	"net/http"
	"encoding/json"
	"github.com/gocolly/colly"
)

func findTranslation(word string, sourceLanguage string, translationLanguage string) (string, string, string) {
	url := fmt.Sprintf("https://%s.wikipedia.org/wiki/%s",sourceLanguage, word)
	linkElementClassName := fmt.Sprintf("li.interwiki-%s", translationLanguage)

	mainPageCollector := colly.NewCollector()
	secondPageCollector := mainPageCollector.Clone()

	var result, resultUrl string

	mainPageCollector.OnHTML(linkElementClassName, func(e *colly.HTMLElement){
		resultUrl = e.ChildAttr("a","href")
		secondPageCollector.Visit(resultUrl)
	})
	secondPageCollector.OnHTML("h1.firstHeading", func(e *colly.HTMLElement){
		result = e.ChildText(".mw-page-title-main")
	})
	mainPageCollector.Visit(url)
	return result, url, resultUrl
}

func main(){
	http.HandleFunc("/translate",func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		queryData := r.URL.Query()
		if(!queryData.Has("w") || !queryData.Has("sl") || !queryData.Has("tl")){
			log.Fatal("Missing parameter")		
		}
		result, mainUrl, SecondUrl := findTranslation(queryData.Get("w"), queryData.Get("sl"), queryData.Get("tl"))

		data := map[string]interface{}{
			"translatedWord" : result,
			"originalLanguagePageUrl" : mainUrl,
			"translationLanguagePageUrl" : SecondUrl,
		}
		jsonData, err := json.Marshal(data)
		if err != nil{
			log.Fatal("An error occurred while marshalling data into json!", err)
		}
		fmt.Fprint(w, string(jsonData))
	})
	err := http.ListenAndServe("localhost:3000", nil)
	if err != nil{
		log.Fatal("An error occurred while running the server!", err)
	}
}