package main

import (
	"net/http"
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
