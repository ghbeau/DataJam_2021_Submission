# DataJam Canada 2021 - _**Centre for Cross-Network Trafficking Data**_

<span style="color:blue">_This is a repository for research projects in the human trafficking domain. It includes all future related project ideas or research topics that would be useful for our project._

_Each topic would have a separate repository. This would include the following:_</span>

## 1. Problem Statement

_A description of an issue to be addressed._

 Many organisations working against human trafficking (or adjacent domains such as sexual abuse) operate on community levels, provide services to local communities, and access local data on trafficking. Research suggests that trafficking corridors between provinces are prevalent and active, with many cases moving past the local level to a larger scale. Due to this, we have the making it hard to identify larger-scale trends in trafficking throughout Canada. Anecdotal evidence from various speakers at DataJam (specifically the Panel) corroborates the importance of a service to connect local efforts to more extensive networks at play.  A centralised data hub targeted at community organisations, with data logging capability for the NGOs, is sorely needed to coordinate between regions and track the macro trends throughout Canada. 


Legal case data from databases such as Sherlock are straightforward to access. In general, we can access data on human trafficking cases that have been reported to authorities, which allows us to paint a macro picture of the **reported** criminal human trafficking trends. However, trying to gauge the scale and nature of unreported data remains to be complicated. Local NGOs provide an invaluable resource to tap for gathering/estimating local unreported data and statistics on human trafficking that exist outside the legal sphere, allowing us to bridge this data gap. 


 ## 2. Objective
_Objective of the solutions (the challenge, problem or need that it contributes to solve)._

Our team aims streamline resources and sharing of data across Canada for NGOs to better solve and coordinate anti-trafficking efforts. 

## 3. Solution/Data use case description

_A comprehensive description of the data-based solution or/and data use case._

Centre for Cross-Network Trafficking Data (CCNTD) is a data collection website that allows organisations to report anonymous data to a network. CCNTD links this to a more extensive repository of geo-data of legal reported cases and unreported cases. The website provides basic data statistics for our targetted users (workers at community outreach services and NGOs working against trafficking) to visualize cases and their respective descriptions on an interactive map that is only accessible to registered users.

We want to expand this prototype into a help network for victims across Canada, allowing victims to obtain a list of NGOs/helplines they could contact around their area at a given time. 

## 4. Pitch

_A pitch of maximum 4 minutes._

[link to video](https://youtu.be/yfPm_xeBj4o)
[hd version](https://youtu.be/-5ixLE7ODqI)


## 5. Datasets

Location: [/datasets](datasets)

_A list of data sets, sources and challenges for the research project._
This would include:

- API access to required TAH data
- Access to other datasets (either through API or downloaded)
- Statements on data quality issues, transformations needed
- Container for new data generated for this research (i.e. through merging other data sets)

### Public Datasets
We used various publicly available datasets, mostly pertaining to reported crime statistics and legal cases, as well as various socio-economic indices. 

List of Public Datasets used: 
1.	The Canadian Index of Multiple Deprivation **[can_scores_quintiles_EN.csv]**: https://www150.statcan.gc.ca/n1/pub/45-20-0001/452000012019002-eng.htm
2.	Geographic Attribute File, Census year 2016 **[2016_92-151_XBB.csv]**: https://www150.statcan.gc.ca/n1/en/catalogue/92-151-X
3.	Incident-based crime statistics, by detailed violations, Canada, provinces, territories and Census Metropolitan Areas [Data Used for Canada and Provinces **[Provincestat.csv ]**]: https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510017701
4.	Sherlock Case Law Database [used for **[NetworkLoc 2 2.csv]** and **[Location.csv]**]: https://sherloc.unodc.org/cld/v3/sherloc/cldb/index.html?lng=en

### Modified/New Datasets
1. **[CDI_lang_lat.csv]**  is a cleaned merged database of The Canadian Index of Multiple Deprivation and Geographic Attribute File, Census year 2016. This is used to create the Index of Multiple Deprivation Interactive Map and Data Explorer. Our aim with publishing this data is to provide a rudimentary social context for various areas in Canada. Potential further extensions of this that have been considered involved investigating potential correlation between various parameters and incidence rate of cases, which will be possible as our users expand our dataset. 

2. **[NetworkLoc 2 2.csv]** and **[Location.csv]** consists of data scrapped and sourced from the Search Results in the Sherlock Case Law Database under Canada and Trafficking in Persons. NetworkLoc is database consists of legal data about cases. The location database consists of specific movements detected in each case – for example should a case mention a general geographical area (say Toronto was mentioned in a case description), it would be added to our database. These databases are used to create the Trafficking Corridor Interactive Map and Data Explorer to allow community organizations see the larger data trends and if necessary, coordinate with others. We plan to add data collected from the standardized database made by incidents reported by NGOs on the platform. 

3.	**[DashDisplay.csv]** is a merged database of all Incident-based crime statistics from StatCan, by detailed violations, Canada, provinces, territories, and Census Metropolitan Areas, that were deemed relevant to human trafficking. 


## 6. Project Code

### Frontend

Location: [/project](project)

To run the user interface for our application, download the 'frontend' folder that is within the 'project' folder. To run the user interface, node.js must be installed on the local device (install from here: https://nodejs.org/en/download/). Then, from the terminal, navigate into the 'frontend' folder and run the command:
```
npm install
```
This will install all the required JavaScript packages needed to run the program. Then in the terminal, run the command:
```
npm start
```
This will run the code for the website locally and open it in a tab in the browser. This code represents what the website would look like to a user that is already logged in. Therefore, this application does not yet include features such as login or editing of profiles.

### R Code
We have made two different Shiny Apps: The Crime Statistics Dashboard, and Indexes and Corridor.  Shiny is an R package that makes it easy to build interactive web apps straight from R. Each app has two main parts: UI and Server. The UI section is used to set the layout of the app. The Server section is where the data is transformed, and plots, maps, and visualisations are created. We have used 15 different R packages for both the apps to create the plots and dashboard. 


The Crime Statistics Dashboard displays the 16 crime based statistics: “Actual incidents”, “Rate per 100,000 population”, “Percentage change in rate”, “Unfounded incidents”, “Percent unfounded”, “Total cleared”, “Cleared by charge”, “Cleared otherwise”, “Total, persons charged”, “Rate, total persons charged per 100,000 population aged 12 years and over”, “Total, adult charged”, “Rate, adult charged per 100,000 population aged 18 years and over”, “Total, youth charged”, “Rate, youth charged per 100,000 population aged 12 to 17 years”, “Total, youth not charged”, “Rate, youth not charged per 100,000 population aged 12 to 17 years”. These statistics are extracted from [DashDisplay.csv].


The UI section includes a dropdown menu where you can choose the province, and then boxes containing each crime statistics over time for the selected crime. Each box is collapsible and is colored based on the type of value of crim statistics. For example, if it was a crime statistic reported as a rate, then the box is orange. Similarly, red if percentage and blue if a number. The layout is set by the ‘shinydashboard’ package. The Server section consists of creating a reactive database that changes based on the input from the dropdown with province. Then, graphs for each statistic from the reactive database is made. The app can be accessed at: https://niranjani.shinyapps.io/dashdisplay/ . 


The Indexes and Corridor consists of two tabs: Index of Multiple Deprivation and Trafficking Corridor. The UI section of the Interactive Map tab consists of 2 sections.
The first section consists of a dropdown that chooses the province, which is followed by the histograms of the indicators scores for the province selected. The second section consists of a navigation bar with the four indicators and an interactive map that maps the indicator score quintiles onto each census dissemination area for the province selected from the dropdown. Clicking on one of the markers on the map creates a popup with information about the census dissemination area. The server section for the map creates a reactive database that changes based on the input from the dropdown with province. This reactive database is used to map the markers, coloured based on indicator score quantile, onto dissemination area coordinates. The plotting is done using the ‘Leaflet’ package. 
The next sub-tab is the Data Explorer, which displays all available data used. Using the package ‘DT’, a data table for exploration is created. All data explorer columns have options to be filtered. In addition, there is an option to show 10, 25, and 100 entries at once.  

## 7. Additional docs (Optional)

Location: [/docs](docs)

- PowerPoint presentation
- Flayers
- Additional videos/demo
- Protocols
- Guides

### Logo/Branding Designs
Designs were modified from free open-source illustrations in https://undraw.co/, using illustrator and saved in .svg format
Logo_square.svg is our logo for websites/social media etc
banner.svg is a banner design

## References
<a id="1">[1]</a> 
Canadian Centre to End Human Trafficking (2021).  
Human Trafficking Corridors in Canada.

