package main

import (
	"net/http"

	"jwoods.dev/ui"
)

func (app *application) homeHandler(w http.ResponseWriter, r *http.Request) {
	data := app.newTemplateData()
	app.render(w, r, http.StatusOK, "home.tmpl", data)
}

func (app *application) projectsHandler(w http.ResponseWriter, r *http.Request) {
	data := app.newTemplateData()
	app.render(w, r, http.StatusOK, "projects.tmpl", data)
}

func (app *application) experienceHandler(w http.ResponseWriter, r *http.Request) {
	data := app.newTemplateData()
	app.render(w, r, http.StatusOK, "experience.tmpl", data)
}

func (app *application) contactHandler(w http.ResponseWriter, r *http.Request) {
	data := app.newTemplateData()
	app.render(w, r, http.StatusOK, "contact.tmpl", data)
}

func (app *application) robotsHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFileFS(w, r, ui.Files, "/static/robots.txt")
}

func (app *application) sitemapHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFileFS(w, r, ui.Files, "/static/sitemap.xml")
}
