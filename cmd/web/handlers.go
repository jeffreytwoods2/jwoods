package main

import (
	"net/http"

	"jwoods.dev/ui"
)

func (app *application) homeHandler(w http.ResponseWriter, r *http.Request) {
	data := app.newTemplateData()
	OGTags := map[string]string{
		"og:title":       "Home - Jeffrey Woods",
		"og:url":         "https://jwoods.dev",
		"og:image":       "/static/img/smile.png",
		"og:type":        "website",
		"og:description": "Portfolio website for software developer Jeffrey Woods",
	}
	data.OGTags = OGTags
	app.render(w, r, http.StatusOK, "home.tmpl", data)
}

func (app *application) projectsHandler(w http.ResponseWriter, r *http.Request) {
	data := app.newTemplateData()
	OGTags := map[string]string{
		"og:title":       "Projects - Jeffrey Woods",
		"og:url":         "https://jwoods.dev/projects",
		"og:image":       "/static/img/jeep/jeep-og.webp",
		"og:type":        "website",
		"og:description": "Projects built by software developer Jeffrey Woods",
	}
	data.OGTags = OGTags
	app.render(w, r, http.StatusOK, "projects.tmpl", data)
}

func (app *application) experienceHandler(w http.ResponseWriter, r *http.Request) {
	data := app.newTemplateData()
	OGTags := map[string]string{
		"og:title":       "Professional experience - Jeffrey Woods",
		"og:url":         "https://jwoods.dev/experience",
		"og:image":       "/static/img/hs.webp",
		"og:type":        "website",
		"og:description": "Professional experience of software developer Jeffrey Woods",
	}
	data.OGTags = OGTags
	app.render(w, r, http.StatusOK, "experience.tmpl", data)
}

func (app *application) contactHandler(w http.ResponseWriter, r *http.Request) {
	data := app.newTemplateData()
	OGTags := map[string]string{
		"og:title":       "Contact - Jeffrey Woods",
		"og:url":         "https://jwoods.dev/experience",
		"og:image":       "/static/img/hs.webp",
		"og:type":        "website",
		"og:description": "Contact information for software developer Jeffrey Woods",
	}
	data.OGTags = OGTags
	app.render(w, r, http.StatusOK, "contact.tmpl", data)
}

func (app *application) robotsHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFileFS(w, r, ui.Files, "/static/robots.txt")
}

func (app *application) sitemapHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFileFS(w, r, ui.Files, "/static/sitemap.xml")
}
