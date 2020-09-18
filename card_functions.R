library(htmltools)
library(dplyr)
library(shiny)


card_component <- function(name, title, portrait) {
  div(
    class = "card",
    img(class = "card-img-top",
        src = portrait,
        alt = name,
        width = "200",
        height = "280"),
    div(
      class = "card-body",
      h5(class = "card-title",
         name),
      p(class = "card-text",
        title)
    )
  )
}

get_cards <- function(data) {
  data %>%
    purrr::pmap(card_component) %>%
    div(class = "card-wrapper") %>%
    doRenderTags()
}



