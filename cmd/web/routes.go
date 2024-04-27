package main

import (
	"net/http"

	"jwoods.dev/ui"
)

func (app *application) routes() http.Handler {
	mux := http.NewServeMux()

	mux.Handle("GET /static/", http.FileServerFS(ui.Files))

	mux.HandleFunc("GET /{$}", app.homeHandler)
	mux.HandleFunc("GET /projects", app.projectsHandler)
	mux.HandleFunc("GET /experience", app.experienceHandler)
	mux.HandleFunc("GET /contact", app.contactHandler)
	mux.HandleFunc("GET /robots.txt", app.robotsHandler)
	mux.HandleFunc("GET /sitemap.xml", app.sitemapHandler)

	return mux
}
