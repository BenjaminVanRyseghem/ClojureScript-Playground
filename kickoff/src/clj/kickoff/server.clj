(ns kickoff.server
  (:use compojure.core)
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.resource :as resources]
            [ring.util.response :as response]
            [kickoff.clickme :as cm]
            [compojure.handler :as handler]
            [compojure.route :as route])
  (:gen-class)
  (:import [com.mongodb MongoOptions ServerAddress]))

(defroutes app-routes
  (GET "/" [] (response/redirect "/help.html"))
  (GET "/app" [] (cm/render-app))
  (route/not-found "Not Found"))

(def app
  (-> (handler/site app-routes)
      (resources/wrap-resource "public")))

(defn -main [& args]
  (jetty/run-jetty app {:port 3000}))
