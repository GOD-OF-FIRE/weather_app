## Front End Test
An ReactJS focused take home test for Front-end Developers.

### Instructions
* Clone this repo
* Complete this exercise and submit either a zip of the solution or a link to a new repo
* Please incorporate ReactJS framework into your solution. All other choices of libraries, frameworks, etc. are up to you.
* Also show case the use of any State Management libraries (e.g. *redux*, *mobx*,  *react-query*, etc.) in the application.


### Requirements
* Solution should be responsive
* Use the [Open Weather API](https://openweathermap.org/api).
* Show the "current" conditions for Bangalore-India 
    - Current weather description (ie. sunny, cloudy)
    - Current temperature
    - Today's high temperature
    - Today's low temperature
* Allow the user to toggle more data in the current conditions area:
    - Wind Speed
    - Humidity
    - Pressure
    - Sunrise/Sunset Time
* Show the 7 Day forecast as a multi-line chart (use any charting library you would like but it should be incorporated as an React Component)
    - Y axis should show the High and Low temperature as separate lines
    - X axis should show 7 days (starting with the "current" day)
    - The chart should have a tool tip that when activated shows:
        + Day of the week
        + High temperature
        + Low temperature
        + Weather description (ie. Breezy)

### Bonus
* Using Typescript.
* Use of latest *React Hooks* and *Context* APIs will be preferred.
* Using [GraphQL based Open Weather APIs](https://github.com/konstantinmuenster/graphql-weather-api) to create the app.
* Unit Testing
* Project Layout Structure.