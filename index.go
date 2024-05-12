package main

import (
	"log"
	"net/http"
	"text/template"
)

func main() {

    login := func(writter http.ResponseWriter , req *http.Request){
        tmpl := template.Must(template.ParseFiles("login.html"))
        tmpl.Execute(writter,nil)
    }

    signup := func(writter http.ResponseWriter , req *http.Request){
        tmpl := template.Must(template.ParseFiles("signup.html"))
        tmpl.Execute(writter,nil)
    }

    http.HandleFunc("/login",login)

    http.HandleFunc("/register",signup)

    log.Fatal(http.ListenAndServe(":6969",nil))
}
