bamako_long <- bamako %>% 
  mutate(hour_num = str_extract(Hour, "[:digit:]+")) %>%
  pivot_longer(cols = names(bamako)[str_which(names(bamako), "[Sample]")],
               names_to = "sample",
               values_to = "weight"
  ) %>%
  mutate(sample_num = str_extract(sample, "[:digit:]+")) %>%
  select(sample_num, weight)