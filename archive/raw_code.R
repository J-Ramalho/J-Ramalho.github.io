library(readxl)
library(tidyverse)

# Get the Data

volcano <- readr::read_csv('https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2020/2020-05-12/volcano.csv')
eruptions <- readr::read_csv('https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2020/2020-05-12/eruptions.csv')
events <- readr::read_csv('https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2020/2020-05-12/events.csv')
tree_rings <- readr::read_csv('https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2020/2020-05-12/tree_rings.csv')
sulfur <- readr::read_csv('https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2020/2020-05-12/sulfur.csv')

coordinates

# longitude / latitude
azores_box <- c(-31.36, 39.75, -24.40, 36.50)

volcano_az <- volcano %>%
  filter(longitude >= -31.36 & longitude <= -24.4) %>%
  filter(latitude <= 39.75 & latitude >= 36.5)

# azores_volcano2 <- volcano %>%
#   filter(country == "Portugal")

eruptions_az <- eruptions %>%
  filter(longitude >= -31.36 & longitude <= -24.4) %>%
  filter(latitude <= 39.75 & latitude >= 36.5)

events_az <- events %>%
  filter(volcano_name == "Pico")

volcano_az_recent <- eruptions_az %>%
  filter(start_year >= 1432)

# population growth

eruptions_count <- eruptions %>%
  group_by(start_year) %>%
  summarise(eruptions_total = n()) %>%
  rename(year = start_year) %>%
  filter(year >= 1800)

population <- read_csv("Report_4/data/population_total.csv")
population <- population %>%
  mutate(`1800` = as.numeric(`1800`))
pop_long <- population %>%
  pivot_longer(-country, names_to = "year", values_to = "population") %>%
  mutate(year = as.numeric(year))

pop_growth <- pop_long %>%
  group_by(year) %>%
  summarise(pop_total = sum(population)/1000000000)

plot_data <- eruptions_count %>%
  left_join(pop_growth)

ggplot() +
  geom_point(data = plot_data, aes(x = year, y = eruptions_total), color = "black") +
  geom_point(data = plot_data, aes(x = year, y = pop_total), color = "red")
  # scale_x_discrete(breaks = seq(1800, 2100, 50))

# volcanoes durations

library(lubridate)

eruption_az_time <- eruptions_az %>%
  filter(!is.na(end_day)) %>%
  mutate(start_date = glue('{start_year}-{start_month}-{start_day}'),
         end_date = glue('{end_year}-{end_month}-{end_day}')) %>%
  mutate(end_date = ymd(end_date)) %>%
  filter(!is.na(end_date)) %>%
  select(volcano_name, eruption_number, start_date, end_date) %>%
  mutate(eruption_interval = interval(start = start_date, end = end_date)) %>%
  mutate(eruption_duration = eruption_interval / months(x = 1))




















