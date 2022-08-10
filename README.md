<p align="center">
<img src="/assets/Banner.png" width="700px"/>
  </p>

# ✈️ YOUFLY - The Perfect Vacation
### A CPSC 455 Project
With just the click of a button, get swept away by the perfect vacation tailored just for you.

Youfly is a **travel booking web application** that allows users to create a personalized profile by answering a series of questions. Based on their profile youfly will provide optimal travel destination recommendations and the top activities to do at that destination. 
 
 ### Table of Contents
1. [Repositories](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#repositories)
2. [Deployments](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#deployments)
3. [Project Team](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#project-team)
4. [Project Description](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#project-description)
5. [Project Task Requirements](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#project-task-requirements-pre-project-planning)
6. [Technical Architecture](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#technical-architecture)
    - [Descriptions of Technology Used](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#react)
    - [Directory/File Structures](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#repository-folder-structures)
8. [Functionality and Feature Set](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#functionality-and-feature-set)
    - [Use Cases](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#basic-user-flows)
    - [Unique/Special Feature](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#above-and-beyond-functionality)
    - [Additional Out of Scope Features](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#additional-features-beyond-course-scope)
9. [Next Steps](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#next-steps)
10. [Team Contributions](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#team-contributions)
11. [Miscellaneous](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22#miscellaneous)
# 

### Repositories
**Client:** [WixHub Client Repo](https://github.com/CPSC-455-Summer-2022/WixHub_Project_S22)   

**Server:** [WixHub Server Repo](https://github.com/CPSC-455-Summer-2022/WixHub_Server)   

### Deployments
**Client:** [WixHub Client Deployed Site](https://wixhub-client.herokuapp.com/)   
_Try our test account: { user_name: john.doe@gmail.com, password: 1234password }_


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
Since React’s component-level state did not fully meet our requirements persistence across multiple different components throughout the app, we integrated Redux to create a store that acts as the single source of truth for our current user’s data. Since the user’s data depended on the server, we used Redux Thunks as middleware to dispatch asynchronous functions to the store. 

### Material UI
Material UI was essential in making our frontend beautiful and responsive. Material UI gave us styling components that elevated the look at feel of our web app. We overrode some of the out-of-the-box styled components that we integrated into our frontend to make them better suit our web app’s style and brand. Compared to competitors such as Bootstrap, we thought Material UI has surpassed it in recent years, offering more visually appealing components that are easier to use.

### React Router
We used React Router DOM to allow the user to navigate through our React components. Traditionally, websites were multiple pages. However, React is a single-page web app, and to navigate through this (and to render different components on subsequent pages), we used React Router’s Route and Link elements. These elements are the backbone to allowing the user to navigate through our app when clicking on different buttons in the Navbar and visiting different destination recommendation cards. It also acted as a way for us to handle page access, limiting users access to particular components and pages based on their stored state in redux (i.e. logged in, logged out, completed questionnaire). 

### Redux Persist
Detecting when a user was logged in and what data the redux store had after the user left the web app seemed like a very hard problem at first. However, we overcame this problem by using Redux Persist, which gave us the necessary methods to persist the current session’s user data and rehydrate it when re-visiting the website. This allows users to remain logged into their account across tabs and page refreshes until they manually log out. 

### Vanilla Javascript/CSS/HTML
Since we used React for the frontend’s rendering and Material UI for styling, we didn’t have to rely that much on the old way of making a website. However, one does not simply make a React app without writing at least a little bit of this. We obviously had to use the Javascript language for creating functions in React. Sometimes we would use some inline CSS to style a few components when we wanted to make small customizations. Finally, React uses JSX, which encompasses the tags that look similar to HTML.

### Express.js
To support a seamless channel of data from our database to our client facing user interface, our team build an Node.js web application. This allowed us to use Express's minimal, flexible and robust set of features to create an effective middleware API. We designed multiple data schemas for important information models stored within our MongoDB and several endpoints for each schema allowing functionality such calls such as GET, POST, PATCH and DELETE. We also used Node.js within our express application to build our custom recommendation generator algorithm. This also enabled us to create extensive error handling and effective response status code returning. 

### MongoDB
Our team leveraged MongoDB to store our application data in a quick and easy to access format. The no-sql document structure allowed for rapid database querying and scalability. The team also used MongoDB in conjunction with the ODM, Mongoose to manage relationships between our stored data, validate our outlined schemas and translate between objects we mapped out in our Express.js application and those stored objects in MongoDB. 

### SwaggerUI
To address one of the challenges our team faced, we built clear and concise server documentation to make all database actions within the front end seamless. This was done using a Swagger UI due to it's automation capalities with OpenAPI, pretty interface and ease of use. This required additional YAML comments to each endpoint to ensure documentation was correct and easy to follow. 

### Repository Folder Structures
Our folder structures follow best industry practices, ensuring it's easy to access, read and build upon.

**Front-End**

Our code can be found in the src directory where we subdivided our application into meaningful directories.
- components (including sub-directories for each page, as well as common components with each component within it's own well defined file)
- context (where we handling log in authorization)
- redux (handling of reducers and api service thunks - promise handling)
- services (async calls to our server endpoints)
- index.js (our applications starting point)

**Server**

Our code is split up into the following directories
- models (where MongoDB/Mongoose Schemas are defined and pre-loaded data is inputed into the Database)
- routes (where each defined schemas endpoints are)
- public (default folder for the public facing view of the deployed server)
- app.js (where the application is started and dependencies are declared)

## Functionality and Feature Set
youfly is built upon the principle of empowering those looking to travel who don't know where to go. As such our website is focused on generating tailored destination recommendations. 

youfly has two main use cases:
1. The ability for logged in users to get a tailored destination recommendation based on their user profile
2. The ability for logged in users to view the top activities (as rated by trip advisor) for each of the recommended destinations with direct links to find out more information and book these activities. 

### Basic User Flows
Below is a walkthrough of the user flow within youfly outlining in addition the two main use cases our application provides users. 

  <p align="center">
<img src="/assets/userFlow.png" width="700px"/>
  </p>  
  
<p align="center">
<img src="/assets/useCase.png" width="500px"/>
  </p>
  
### Unique Functionality 
Our team's unique functionality is our recommendation generator algorithm. This algorithm, was created within our Express.js server using Node.js and is called in our front end questionService using a well documented endpoint. It takes in a userID and a user's profile (their responses to a series of 8 tailored questions) as inputs and returns a destination as an output. Currently our algorithm assigns a "matching score" to each destination where depending on a user response to each question, each stored destination will receive x number of points. The destination with the greatest matching score after going through each question is returned. The algorithm also checks to ensure the recommended destination is unique (isn't already a destination that the user has been recommended). Tune into the next section to see our plan's for the algorithm going forward. 

  <p align="center">
<img src="/assets/uniqueFunctionality.png" width="900px"/>
  </p>
  
### Additional Features (Beyond Course Scope)
Below are some additional features where our team went outside the scope of the course to apply our learnings in unique and impactful ways.
    <p align="center">
<img src="/assets/featureFunctionality.png" width="700px"/>
  </p>

## Next Steps
The future of youfly is bright and we're only just getting started. Through our extensive research and work developing solutions for the travel and vacationing space, it's clear that there's a need for solutions like youfly to take the stress out of planning vacations. That's why we plan on continuing to expand youfly's offerings and functionality. The following are our main next steps going forward:

1. **Authentication**
Our application currently has basic authentication but minimal security features for passwords. We plan to begin by changing the way we store passwords to use bcrypt/scrypt/PBKDF2 for maximimum security robustness. We will then also aim to add forgot password flow using email as a verification process. Finally, we look to integrate social platform APIs to enable single sign on (i.e. Google/Facebook).

2. **Algorithm**
To further distinguish our solution and the value it brings as a destination recommendation engine, we look towards building out our available destinations to recommend to include a large dataset of destinations worldwide. We also plan to add more varying questions (allowing users to get different questions every time they submit a new recommendation request. Finally and most importantly we aim to build a machine learning model for our algorithm to match destinations to users based. We will do this by generating a series of sentiments and key words from the users question as well as developing a web scraper for destination information from Wikipedia. Using this information we can then run a pre-built NLP model from a platform like Tensorflow to match users with destinations. 

3. **Trip Booking**
Finally, to make the booking process seamless for users, we hop to build in the ability to both book destinations and activities directly on the site, enabling them to do everything without having to navigate away. This will be an extensive process as it will require various integrations with existing booking platforms. 


## Team Contributions

### Josh Tillson - i4i2b
- Responsible for the development, aligning, response/error handling and debugging all of the Express.js server. 
- Collaborated with Weichong on MongoDB schemas. 
- Generated all default data for Users, Destinations and Questions. 
- Developed the project documentation (README & SwaggerUI). 
- Created the service structure (functions that call the server endpoints). 
- Collaborated with Ronin on the Redux store and thunks structure. 
- Aided in the debugging of frontend components. 

### Ronin Cunningham - m0c2b 
- Responsible for the development, infrastructure, architecture, and debugging all of the central components of the frontend
- Created the components for the entire flow (Landing Page, Dashboard, Account, Destination, Activity Page, etc.) and their routing
- Built the core Redux infrastructure to store the logged-in userObject in the Redux store. Added thunks for asynchronous functions
- Designed the global styling for all components with Material UI
- Built the central form components all throughout the app along with the data structures used to dispatch user data to the backend
- Fixed bugs (race conditions, etc.) and refactored code smells to match best practices
- Collaborated with Josh to specify endpoints and db model for fetching, collaborated with Sherman for Login and Signup page routing

### Sherman Lam - z2o2b
- Responsible for the creation, development and debugging of all aspects of user sign-up, login authentication
- Developed the protected routing of allowing only User Dashboard, Account , Generate Recommendation, Destination, and Activity pages to users who are logged into our site
- Created guards in place to prevent unauthorized access of pages when URL of the page is manually entered regardless of signed in/ logged out
- Implemented page redirection to navigate users between pages to enhance ease of user-flow and increase user accesibility
- Prevent logged-in users from accessing pages that they should not have access to, such as log in and signup pages
- Created authentication architecture, utilizing JWT (Javascript Web Token) technology in order to procure a time-limited user token, which is stored in the browser's localstorage in order to allow for persistence of the user's log in status
- Developed the process in which our application can access the localstorage to verify that the token is still active and determining whether the user should still be logged in based on the token's expiration time
- Created the process to store the user's current state into Redux in order for the rest of the application to access the user's information as well as update
- Created the thunks, services, as well as server-side changes in order to allow for user-login processes
- Implemented Redux-Persist in order to have the redux store state be persisted throughout new tabs, new windows, as long as the user specifies that they want to have their account status "remember me" upon login, whilst still having checks in place such that regardless of remember status, will log the user out if the token has expired
- Implemented the "remember me" functionality using token technology to persist user status throughout differnt windows/ sessions as long as the user's logged in token is valid
- Ensure that users that did not complete the question process will be directed to the Question stepper process prior to allowing them access to the User Dashboard or the Generate Destination pages
- Created the Figma web application mockups and determine what features our site would need to feature in order to provide a good user experience
- Created the conditional Navigation bar determined through logged in or logged out status as well as refining the routing between pages, and having correct page to page navigation
- Assisted in discovering bugs, errors, and other abnormalities and resolving issues with other groupmates
- Collaborated with Ronin on front-end components that revolve around the signup/login process
- Collaborated with Josh on server side modifications that allowed for signup/login as well as ensuring that signup does not conflict with existing accounts and that login had the correct authentication
- Collaborated with Kevin on server side modifications, as well as working with him on Question Stepper process for new-account signup flow and ensuring that the flow into the stepper and out of the stepper was maintained

### Weichong Zhao - x4x2b 

## Miscellaneous

### Mockups Rendered and Designed in [Figma](https://www.figma.com/file/e95iL2v2cbitVYxDk2pyFE/YouFly---CPSC455?node-id=0%3A1)
<p align="center">
<img src="/assets/figma_mockup1.png" width="700px"/>
  </p>
<p align="center">
<img src="/assets/figma_mockup2.png" width="700px"/>
  </p>
  
