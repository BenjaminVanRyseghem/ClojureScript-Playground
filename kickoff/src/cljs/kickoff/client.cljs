(ns hello-clojurescript
  (:require
    [dommy.utils :as utils]
    [dommy.core :as dommy])
  (:use-macros
    [dommy.macros :only [node sel sel1]]))

(defn handle-click []
  (js/alert "Hello!"))

(def clickable (sel1 :#clickable))
(.addEventListener clickable "click" handle-click)
