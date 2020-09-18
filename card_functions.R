library("dplyr")
library("htmltools")

get_title_panel <- function() {
  h1("Science Fiction",
     tags$br(),
     tags$small("Novels to stimulate innovation and progress",
                class = "text-muted text-primary"))
}

exec_card_component <- function(name, title, portrait) {
  div(
    class = "card",
    img(class = "card-img-top",
        src = portrait,
        alt = name,
        width = "200"),
    div(
      class = "card-body",
      h5(class = "card-title",
         name),
      p(class = "card-text",
        title)
    )
  )
  
}

get_cards_component <- function(data) {
  data %>%
    purrr::pmap(exec_card_component) %>%
    div(class = "card-wrapper") %>%
    doRenderTags()
}



