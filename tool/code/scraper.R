## Scraper for IDMC's global report data

# dependencies
library(XML)
library(RCurl)

# custom code
source('tool/code/write_tables.R')

###################################################
###################################################
############# Scraping the HTML tables ############
###################################################
###################################################

#########################################
# function to scrape the data from 2013 #
#########################################
scrape2013 <- function() {
  cat('Getting the IDMC data for 2013....')

  # list of urls
  base_url = 'http://www.internal-displacement.org/global-figures'

  # downloading the into a doc
  doc <- htmlParse(base_url)

  # extracting the attributes of interest from their pages.
  output <- data.frame(
    Country =  xpathSApply(doc, '/html/body/div/div[2]/div[2]/div/table[2]/tbody/tr/td[1]', xmlValue),
    Newly_Displaced_2013 = xpathSApply(doc, '/html/body/div/div[2]/div[2]/div/table[2]/tbody/tr/td[2]/b', xmlValue)
    )

  # cleaning
  output$Newly_Displaced_2013 <- as.numeric(gsub(',', '', output$Newly_Displaced_2013))

  # results
  cat('done.\n')
  return(output)
}
idmc2013 <- scrape2013()

# writing output
cat('\nWriting data for 2013 in CSV.')
write.csv(idmc2013, 'tool/data/idmc2013.csv', row.names = F)

# writing table in dbs
writeTables(idmc2013, 'IDMC_2013', 'scraperwiki')

#########################################
# function to scrape the data from 2013 #
#########################################
scrape2014 <- function() {
  cat('Getting the IDMC data for 2014....')

  # list of urls
  base_url = 'http://www.internal-displacement.org/global-figures'

  # downloading the into a doc
  doc <- htmlParse(base_url)

  # extracting the attributes of interest from their pages.
  # Estimate_Type sometimes is NA. this controls for that.
  # Estimate_Metadata also has at least one NA. this controls for that.
  output <- data.frame(
    Country =  xpathSApply(doc, '/html/body/div/div[2]/div[2]/div/table[1]/tbody/tr/td[1]/a', xmlValue),
    Estimate_Type = xpathSApply(doc, '/html/body/div/div[2]/div[2]/div/table[1]/tbody/tr/td[2]', xmlValue),
    Number_of_IDPs = xpathSApply(doc, '/html/body/div/div[2]/div[2]/div/table[1]/tbody/tr/td[3]/b', xmlValue),
    Estimate_Metadata = xpathSApply(doc, '/html/body/div/div[2]/div[2]/div/table[1]/tbody/tr/td[4]', xmlValue),
    Conflict_Related_IDPs_Figure_Analysis = xpathSApply(doc, '/html/body/div/div[2]/div[2]/div/table[1]/tbody/tr/td[5]/p', xmlValue)
    )

  # cleaning
  output$Number_of_IDPs <- as.numeric(gsub(',', '', output$Number_of_IDPs))
  output$Conflict_Related_IDPs_Figure_Analysis <- gsub('more', '', output$Conflict_Related_IDPs_Figure_Analysis)
  output$Estimate_Type <- gsub('\t', '', output$Estimate_Type)
  output$Estimate_Type <- gsub('\n', '', output$Estimate_Type)

  # results
  cat('done.\n')
  return(output)
}
idmc2014 <- scrape2014()

# writing output
cat('\nWriting data for 2014 in CSV.')
write.csv(idmc2014, 'tool/data/idmc2014.csv', row.names = F)

print(idmc2014)

# writing table in dbs
writeTables(idmc2014, 'IDMC_2014', 'scraperwiki')

######################################
# function to scrape the time-series #
# that appears on the chart          #
######################################
scrapeTimeSeries <- function() {
  # I have no idea how to scrape this data now.
}
# timeSeriesData <- scrapeTimeSeries()

# writing output
# cat('\nWriting data for the time series.')
# write.csv(timeSeriesData, 'data/time_series_data.csv', row.names = F)