<p align="center">
<img src="/assets/Banner.png" width="700px"/>
  </p>
 
# ✈️ YOUFLY - The Perfect Vacation
### A CPSC 455 Project
With just the click of a button, get swept away by the perfect vacation tailored just for you.

Youfly is a **travel booking web application** that allows users to create a personalized profile by answering a series of questions. Based on their profile youfly will provide optimal travel destination recommendations and the top activities to do at that destination.

### Repositories
**Client:** [WixHub Client Repo](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22)   

**Server:** [WixHub Server Repo](https://github.com/CPSC-455-Summer-2022/WixHub_Server)   

### Deployments
**Client:** [WixHub Client Deployed Site](https://wixhub-client.herokuapp.com/)   

**Server:** [WixHub Server Deployed Site](https://wixhub-server.herokuapp.com/)  

**Documentation:** [WixHub Server Swagger](https://wixhub-server.herokuapp.com/api-docs)  

### Project Team
- Ronin Cunningham - m0c2b 
- Sherman Lam - z2o2b
- Weichong Zhao - x4x2b 
- Josh Tillson - i4i2b

## Project Description

<p align="center">
<img src="/assets/youflyIntro.png" width="800px"/>
  </p>

Youfly is a **travel booking web application** that allows users to create a personalized profile by answering a series of questions. Based on their profile youfly will provide optimal travel destination recommendations and the top activities to do at that destination. Youfly is geared towards those **eager travellers who have been going stir crazy** over the course of the pandemic and are **ready to travel** with the reduced restrictions but **don't know where to go** first. Youfly makes the decision for our users by finding the optimal destination for each and every traveller. 

Youfly stores user **profile data** and their **accompanying destination matching** to provide optimal recommendations. Youfly also stores **data around its travel destinations** (key words scraped from Wikipedia pages for sentiment analysis) to optimize the destination and traveller matching. 

The objective of youfly is to use a **Machine Learning Tensorflow model** to enable optimal vacation destination matching, however if faced with time limitations our team can have **preset locations** based on the set answers the user makes to the series of profile questions. 

## Project Task Requirements (Pre-Project Planning)
Below are an evolving list of project requirements to develop a prototype version of youfly for CPSC 455. It will be continuously expanded on through GitHub's Project feature this summer as we approach August Demo.

### Minimal Requirements
- Simple modern design and easy to use interface ✅
- Straightforward and comprehensive profile creation process that maximizes retention ✅
- Vacation Destination matching to user profile ✅

### Standard Requirements (No ML Implemented)
- Interactive welcome page with walk through tutorial ✅
- Multiple optimal travel destination options ✅
- Curating pre-planned travel recommendations in MongoDB ✅
- Displaying top activities for each recommended destination ✅

### Stretch Requirements (Possible ML Implementation)
- Selecting activities/excursions within that travel destination that match individual profile ⛔
- Machine Learning model to ensure continuous optimization for travel destination matching ⛔
- Profile linking and grouping between multiple individuals/parties looking to travel together ⛔
- Direct booking capabilities through external booking site APIs (viability tbd) ⛔

### Requirements Breakdown
1. Simple modern design and easy to use interface 
    - Select colour palette ✅
    - Frame mockups in Figma ✅
    - Establish wireframing and navigation in Figma ✅
    - Select React boilerplate ✅
    - Create main/welcome page ✅
    - Create Navbar ✅
    - Create About page ✅
    - Create matched destination page ✅
    - Add in navigation ✅
    - Test and receive feedback from friends and family on UX ✅
    - Sign-In/Sign-Up Process Made ✅
    - User Profile Questionaire ✅
    - Website Responsiveness ✅
    - Account Settings Page ✅
2. Straightforward and comprehensive profile creation
    - Establish series of questions ✅
    - Frame mockups in Figma ✅
    - Storing user information in database (setting up MongoDB and the necessary queries) ✅
3. Vacation Destination matching to user profile
    - Establish a set series of destinations ✅
    - Create a mapping of question responses to vacation destinations ✅
    - Python script for webscraping data from vacation destination wikipedia pages ⛔
4. Server 
    - Comprehensive document schema for Users, Destinations and Questions ✅
    - Effective error handling ✅
    - Clear and concise endpoint documentation ✅
    - Algorithm for destination matching to use within the destination recommendation endpoint ✅

## Technical Architecture
Description on how tech from Units 1-5 are implemented within our application.

<p align="center">
<img src="/assets/techStack.png" width="1000px"/>
  </p>
  
### React
React was central in developing our frontend’s most important feature, the functionality and rendering of data. We utilized components to build each and every page you see from the ground up, along with rendering the component’s state and making API calls to the backend. Compared to other tech such as vanilla Javascript/CSS/HTML, React is the clear winner since it offers components that are both reusable and loosely coupled. From the User Dashboard to the Destination Card, we leveraged React components to build these crucial parts of our web app.

### Redux
Since React’s component-level state was not suitable for state that was needed at multiple different components throughout the app, we integrated Redux to create a store that acts as the single source of truth for our current user’s data. Since the user’s data depended on the server, we used Redux Thunks as middleware to dispatch asynchronous functions to the store.

### Material UI
Material UI was essential in making our frontend beautiful and responsive. Material UI gave us styling components that elevated the look at feel of our web app. We overrode some of the out-of-the-box styled components that we integrated into our frontend to make them better suit our web app’s style and brand. Compared to competitors such as Bootstrap, we thought Material UI has surpassed it in recent years, offering more visually appealing components that are easier to use.

### React Router
We used React Router DOM to allow the user to navigate through our React components. Traditionally, websites were multiple pages. However, React is a single-page web app, and to navigate through this (and to render different components on subsequent pages), we used React Router’s Route and Link elements. These elements are the backbone to allowing the user to navigate through our app when clicking on different buttons in the Navbar and visiting different destination recommendation cards.

### Redux Persist
Detecting when a user was logged in and what data the redux store had after the user left the web app seemed like a very hard problem at first. However, we overcame this problem by using Redux Persist, which gave us the necessary methods to persist the current session’s user data and rehydrate it when re-visiting the website.

### Vanilla Javascript/CSS/HTML
Since we used React for the frontend’s rendering and Material UI for styling, we didn’t have to rely that much on the old way of making a website. However, one does not simply make a React app without writing at least a little bit of this. We obviously had to use the Javascript language for creating functions in React. Sometimes we would use some inline CSS to style a few components when we wanted to make small customizations. Finally, React uses JSX, which encompasses the tags that look similar to HTML.

### Express.js
TODO - Josh

### MongoDB
TODO - Josh

### SwaggerUI
TODO - Josh

## Functionality and Feature Set


  <p align="center">
<img src="/assets/featureFunctionality.png" width="700px"/>
  </p>
  

### Basic User Flows

  <p align="center">
<img src="/assets/userFlow.png" width="700px"/>
  </p>
  
### Above and Beyond Functionality 

  <p align="center">
<img src="/assets/uniqueFunctionality.png" width="900px"/>
  </p>

## Next Steps

## Team Contributions

### Josh Tillson - i4i2b


### Ronin Cunningham - m0c2b 


### Sherman Lam - z2o2b


### Weichong Zhao - x4x2b 

## Miscellaneous

### Mockups Rendered and Designed in [Figma](https://www.figma.com/file/e95iL2v2cbitVYxDk2pyFE/YouFly---CPSC455?node-id=0%3A1)
<p align="center">
<img src="/assets/figma_mockup1.png" width="700px"/>
  </p>
<p align="center">
<img src="/assets/figma_mockup2.png" width="700px"/>
  </p>
  
