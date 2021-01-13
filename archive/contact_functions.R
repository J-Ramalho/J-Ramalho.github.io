library(htmltools)
library(dplyr)
library(shiny)


contact_card_component <- function(name, title, portrait) {
  div(
    br(),
    # class = "card",
    img(
        # class = "card-img-top",
        style = "border-radius: 100%",
        src = portrait,
        alt = name,
        width = "100",
        # height = "100"
        ),
    div(
      class = "card-body",
      h5(
        # class = "card-title",
        name),
      p(
        # class = "card-text",
        title)
    )
  )
}

get_contact_cards <- function(data) {
  data %>%
    purrr::pmap(contact_card_component) %>%
    div(class = "card-wrapper") %>%
    doRenderTags()
}



