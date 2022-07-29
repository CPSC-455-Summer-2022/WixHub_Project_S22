<p align="center">
<img src="/assets/Banner.png" width="700px"/>
  </p>
 
# ✈️ YOUFLY - The Perfect Vacation
### A CPSC 455 Project
With just the click of a button, get swept away by the perfect vacation tailored just for you . 

### Repositories
**Client:** [WixHub Client Repo](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22)   

**Server:** [WixHub Server Repo](https://github.com/CPSC-455-Summer-2022/WixHub_Server)   

### Deployments
**Client:** [WixHub Client Deployed Site](https://wixhub-client.herokuapp.com/)   

**Server:** [WixHub Server Deployed Site](https://wixhub-server.herokuapp.com/)  

### Project Team
- Ronin Cunningham - m0c2b 
- Sherman Lam - z2o2b
- Weichong Zhao - x4x2b 
- Josh Tillson - i4i2b

## Project Description

Youfly is a **travel booking web application** that allows users to create a personalized profile by answering a series of questions. Based on their profile youfly will provide optimal travel destination recommendations and the top activities to do at that destination. Youfly is geared towards those **eager travellers who have been going stir crazy** over the course of the pandemic and are **ready to travel** with the reduced restrictions but **don't know where to go** first. Youfly makes the decision for our users by finding the optimal destination for each and every traveller. 

Youfly stores user **profile data** and their **accompanying destination matching** to provide optimal recommendations. Youfly also stores **data around its travel destinations** (key words scraped from Wikipedia pages for sentiment analysis) to optimize the destination and traveller matching. 

The objective of youfly is to use a **Machine Learning Tensorflow model** to enable optimal vacation destination matching, however if faced with time limitations our team can have **preset locations** based on the set answers the user makes to the series of profile questions. 

## Project Task Requirements
Below are an evolving list of project requirements to develop a prototype version of youfly for CPSC 455. It will be continuously expanded on through GitHub's Project feature this summer as we approach August Demo.

### Minimal Requirements
- Simple modern design and easy to use interface 
- Straightforward and comprehensive profile creation process that maximizes retention
- Vacation Destination matching to user profile

### Standard Requirements (No ML Implemented)
- Interactive welcome page with walk through tutorial
- Multiple optimal travel destination options
- Curating pre-planned travel recommendations in MongoDB
- API integration with TripAdvisor to get a destinations top activities

### Stretch Requirements (Possible ML Implementation)
- Selecting activities/excursions within that travel destination that match individual profile
- Machine Learning model to ensure continuous optimization for travel destination matching
- Profile linking and grouping between multiple individuals/parties looking to travel together
- Direct booking capabilities through external booking site APIs (viability tbd)

### Minimal Requirements Breakdown *(still expanding)*
1. Simple modern design and easy to use interface 
    - Select colour palette
    - Frame mockups in Figma
    - Establish wireframing and navigation in Figma
    - Select React boilerplate
    - Create main/welcome page
    - Create Navbar
    - Create About page
    - Create matched destination page
    - Add in navigation
    - Test and receive feedback from friends and family on UX
2. Straightforward and comprehensive profile creation
    - Establish series of questions
    - Frame mockups in Figma
    - Storing user information in database (setting up MongoDB and the necessary queries)
3. Vacation Destination matching to user profile
    - Establish a set series of destinations
    - Create a mapping of question responses to vacation destinations
    - Python script for webscraping data from vacation destination wikipedia pages
    - Storing vacation destinations with large text scraped from wikipedia page for sentiment analysis (setting up MongoDB and the necessary queries)

### Initial Welcome Page Mockup
<p align="center">
<img src="/assets/Welcome page.png" width="700px"/>
  </p>

### Initial Destination Matching Page Mockup
<p align="center">
<img src="/assets/A9C62B29-404C-45D5-A259-EA57235EACCB.jpeg" width="700px"/>
  </p>

### Initial Sign Up Page Mockup
<p align="center">
<img src="/assets/sign up.jpg" width="700px"/>
  </p>
