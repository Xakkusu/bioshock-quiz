# Bioshok Quiz

You think you know your game, then let's prove it!

The Bioshock Quiz is a fun little game that quizzes the user about their Bioshock knowledge. Hence this quiz is for people who played at least one game out of the series and want to test themselves on what they picked up from it. The goal is to answer as many questions correctly as possible. 

The Bioshock games have captivated millions of players all around the world. Yet they are dried out of new content. What better way is there to spend the time waiting for a new game, than to refresh everything you know about the series and prove that you are worthy of new content. 

As many people have become tired of waiting for Judas or a new Bioshock games and replaying the old games yearly, I wanted to pay my respect to my favourite video game (Bioshock II) and its series. This quiz is also a fun thing to use when spending time with friends, from which everyone thinks they know the most about this game.

Interested? Then check it out here: [Bioshock Quiz](https://xakkusu.github.io/bioshock-quiz/index.html)

![Bioshock Quiz Am I Responsive Image](docs/readme-images/bioshockQuiz-amiresponsive.PNG)

## Contents
- [SITE OWNER GOALS](#site-owner-goals)
- [USER EXPERIENCE (UX)](#user-experience-ux)
- [WIREFRAMES](#wireframes)
- [FINAL DESIGN](#final-design)
    - [Imagery](#imagery)
    - [Color Scheme](#color-scheme)
    - [Typography](#typography)
    - [Visual Effects](#visual-effects)
    - [Final Look](#final-look)
- [FEATURES](#features)
    - [Index Page](#index-page)
    - [Quiz Page](#quiz-page)
    - [404 Page](#404-page)
    - [Future Features](#future-features)
- [TESTING](#testing)
    - [Accessibility](#accessibility)
    - [W3C Validators](#w3c-validators)
    - [JSHint](#jshint)
    - [Form Testing](#form-testing)
    - [Links Testing](#links-testing)
    - [Browser Testing](#browser-testing)
    - [Device Testing](#device-testing)
    - [User Stories Testing](#user-stories-testing)
    - [Fixed Bugs](#fixed-bugs)
- [TECHNOLOGIES USED](#technologies-used)
    - [Languages](#languages)
    - [Frameworks, Libraries and Programs used](#frameworks-libraries-and-programs-used)
- [DEPLOYMENT](#deployment)
- [CREDITS](#credits)
    - [Media](#media)
    - [Resources](#resources)
- [ACKNOWLEDGEMENTS](#acknowledgements)


## SITE OWNER GOALS
- to provide the user with a fun short quiz mainly for Bioshock/gaming fans with increasingly more difficult questions
- to provide the user the opportunity to test oneself on game knowledge depending on the different Bioshock games (I-III)
- to provide the user with a website with a familiar styling and theme of the games
- to provide the user with the ability to gain more knowledge in case they didn't achieve the score they wanted


## USER EXPERIENCE (UX)
#### First Time User Goals
- I want to take a Bioshock quiz to test my knowledge
- I want to understand the website, its structure and how to take the quiz
- I want the quiz to be easy to use and navigate
- I want to take the quiz whenever, wherever
- I want to take the test on whichever device

#### Returning User Goals
- I want to be able to choose between different types of quizzes
- I want to be able to improve my knowledge of the Bioshock series

#### Frequent User Goals
- I want to be able to choose between different types of quizzes
- I want to be able to improve my knowledge of the Bioshock series
- I want to be able to see my score of the quiz outside of taking the quiz


## WIREFRAMES
Wireframes were produced using Balsamiq. 

 <details>

 <summary>Desktop Wireframe</summary>
Index Page:
<img src="docs/wireframes/index-page-desktop.png" alt="Desktop Index Wireframe">

Quiz Page:
<img src="docs/wireframes/quiz-page-desktop.png" alt="Desktop Quiz Wireframe">

404 Page:
<img src="docs/wireframes/404-page-desktop.png" alt="Desktop 404 Wireframe">

 </details>

 <details>
    <summary>Mobile Wireframe</summary>

Index Page:
<img src="docs/wireframes/index-page.png" alt="Mobile Index Wireframe">

Quiz Page:
<img src="docs/wireframes/quiz-page.png" alt="Mobile Quiz Wireframe">

404 Page:

<img src="docs/wireframes/404-page.png" width="50%" alt="Mobile 404 Wireframe">

</details>


## FINAL DESIGN
### Imagery
The imagery as well as the colour scheme were chosen to be as in sync with Bishock's main theme, especially menu looks, as possible. This is of great importance so the user will quickly associate its looks and design with the common themes in the game. This was done to be in line with all three games, however since two of the three games have a greatly different tone than Bioshock II the former dominated the most decisions.
The Background image was chosen to represent all three games. From the underwater world to the city in the clouds everything should be included for the main look  so the theme is easy to connect  with the games and is credited below.
An Art Deco style for the main content boxes were chosen to be in line with Bioshock I and II Art Deco styling of its in-game-world and its menu styling.

### Color Scheme
![Bioshock Quiz Color Palette](docs/readme-images/bioshock-color-scheme.png)
The main colors consist of darker green colours as well as brighter gold and silver colors for highlights. Other minor colors were mainly used for gradient styling of buttons and the countdown bar. All colors are in line with the colors of the games so the user will be familiar with the color palette and connect the quiz to the games just by the look of it. The only colors of this scheme that stand out are the red and green colors chosen for wrong and right answers in the quiz. However, as brighter colours in Bioshock Infinite are in pastel tones I chose pastel tones for these two colors as well to again stay in line with the games' colour scheme.

The color palette was created by using the [coolors](https://coolors.co/) website.

### Typography
[Google Fonts](https://fonts.google.com/) was used for the following fonts:
- ![Limelight font image](docs/readme-images/limelight-font.png) 
[Limelight](https://fonts.google.com/specimen/Limelight?query=Limelight) was chosen for all the headings to set them apart from the other content. The font was chosen as it closely resembles some fonts used in the games, therefore it stays in line with the game's styling.
- ![Didact Gothic font image](docs/readme-images/didact-gothic-font.png) 
[Didact Gothic](https://fonts.google.com/specimen/Didact+Gothic?query=Didact+Gothic) was used for all the other text elements as it is easy to read and still resembles some fonts used in the Bioshock games.
- Sans Serif was chosen as a backup font, in case for any reason the main font isn't being imported into the site correctly.

### Visual Effects
Images and more information for these effects are given below in the [Features](#features) part.
#### Shadows
All elements that are shown in content boxes have a shadow to differentiate them either from the background image or from its content part that lay below it (e.g.: when clicking outside the game box while playing it).
#### Buttons Hover Effect
On larger screens when placing the mouse above any kind of button a hover-effect will appear. The shadow will change its opacity and color to a brighter gold to make it stand out. The cursor will become a pointer as well, unless it is in the quiz section and an answer has already been chosen.
#### Answer Buttons Wrong/Right
When the user chose an answer the right answer will change colors to green, the wrong to a red both with a silver font color to easily indicate which is wrong and which would have been correct. 
#### Next Button
In the quiz section the next button will only appear after the user chose an answer.
#### Countdown Bar
In the quiz section there is a time-bar to indicate to the user the decreasing time to answer each question.

### Final Look
<details>
<summary>Desktop</summary>

Index Page:

<img src="docs/final-look/desktop-final-look-index1.html.png" width="90%" alt="Desktop Index Page">
<img src="docs/final-look/desktop-final-look-index2.html.png" width="90%" alt="Desktop Index How To Play Page">
<img src="docs/final-look/desktop-final-look-index3.html.png" width="90%" alt="Desktop Index Leaderboard Page">

Quiz Page:

<img src="docs/final-look/desktop-final-look-quiz1.html.png" width="90%" alt="Desktop Quiz Page">
<img src="docs/final-look/desktop-final-look-quiz2.html.png" width="90%" alt="Desktop Quiz Answers Page">
<img src="docs/final-look/desktop-final-look-quiz3.html.png" width="90%" alt="Desktop Quiz Game Pause Page">
<img src="docs/final-look/desktop-final-look-quiz4.html.png" width="90%" alt="Desktop Quiz End of Game Page">

404 Page:

<img src="docs/final-look/desktop-final-look-404.html.png" width="90%" alt="Desktop 404 Page">

</details>

<details>
<summary>Mobile</summary>

Index Page:

<img src="docs/final-look/mobile-final-look-index1.html.png" width="50%" alt="Mobile Index Page">
<img src="docs/final-look/mobile-final-look-index2.html.png" width="50%" alt="Mobile Index How To Play Page">
<img src="docs/final-look/mobile-final-look-index3.html.png" width="50%" alt="Mobile Index Leaderboard Page">

Quiz Page:

<img src="docs/final-look/mobile-final-look-quiz1.html.png" width="50%" alt="Mobile Quiz Page">
<img src="docs/final-look/mobile-final-look-quiz2.html.png" width="50%" alt="Mobile Quize Answers Page">
<img src="docs/final-look/mobile-final-look-quiz3.html.png" width="50%" alt="Mobile Quiz Game Pause Page">
<img src="docs/final-look/mobile-final-look-quiz4.html.png" width="50%" alt="Mobile Quiz End of Game Page">

404 Page:

<img src="docs/final-look/mobile-final-look-404.html.png" width="50%" alt="Mobile 404 Page">

</details>

## FEATURES
The Bioshock Quiz consists of the landing page (index), the quiz page and a 404 error page.

All pages have the following in common:
#### Favicon
<img src="docs/features/favicon-feature.png" alt="favicon in browser tab">

#### Heading and Logo
<img src="docs/features/logo-feature.png" alt="logo and heading">

- Is a link, can be clicked and will redirect the user to the landing page.

#### Button Hover Effect
<img src="docs/readme-images/buttons-hover-effect.gif" alt="cursor going over buttons">

- Only on larger screens when placing the mouse above a button the shadow will change color and have a higher opacity. 
- The cursor will change to a pointer as well
- This is done to indicate to the user that something is different and can be clicked compared to the other content.

### Index Page
![Index Content](docs/features/main-index-feature.png)
- The landing page has a simple design that is similar to various quiz websites as well as, due to its design, is similar to other Bioshock content.
- The section is made up out of the Logo, an input field and 4 buttons that are selectable by the user.
- The whole section is responsive and will adapt according to screen size. When using a larger smartphone horizontally some of the buttons will appear next to one another instead of being stacked on top of each other.

#### Name Input and Start Game field
![Input field and Let's play Button](docs/features/name-input-feature.png)
- The user has to input a name in order to start the quiz.
- The user can start the quiz after entering the name either by pressing the "Enter" key or selecting the "Let's Play"- Button by being directed to the quiz.html.

![Input field and Let's play Button](docs/features/alert-name-feature.png)
- If the user tries to start the quiz without entering a name the alert: "Enter a name to start" is shown. This is done to prevent starting a game without leaving a name first.

![Input field and Let's play Button focused](docs/features/name-input-focus-feature.png)
- When focused the input field's border will change color so the user will know better that they can enter a name now.

#### How to Play - Pop-Up
![How to Play Pop-Up field](docs/features/how-to-play-feature.png)
- If the user selects the "How to Play?" button an instruction-section will appear.
- The user is informed through this on how the game works and how to navigate the quiz-website overall.
- The user can select the "return"-button anytime they like to return to the landing page. The user could also click on the greyed out part outside of the section to go back to the landing page.

#### Leaderboard - Pop-Up 
![Leaderboard field](docs/features/leaderboard-empty-feature.png)
![Leaderboard field](docs/features/leaderboard-feature.png)
- If the user selects the "Leaderboard" button an leaderboard-section will appear.
- The user will see either an empty leaderboard or if they played before they will see their name and score. The top 5 names + scores are displayed in the list.
- The user can select the "return"-button anytime they like to return to the landing page. The user could also click on the greyed out part outside of the section to go back to the landing page.


#### Need more knowledge Button 
![Button to an external website](docs/features/knowledge-feature.png)
- If the user selects the "Need more knowledge button" they will be transferred to the [Bioshock Wiki](https://bioshock.fandom.com/wiki/BioShock_Wiki) in an external tab.
- Here they can look up whatever they think they lack knowledge in.

### Quiz Page
![Quiz main content](docs/features/quiz-feature.png)
- The quiz page has a nearly identical design to the index page, so the user should already be familiar with how it works.
- The section is made up out of the Logo and 4 buttons that are selectable by the user. When choosing a button a pop-up with the according quiz will appear.
- The whole section is responsive and will adapt according to screen size. On smaller smartphones and smaller tabletes the buttons will be stacked on top of each other. When using a larger smartphone horizontally or a larger desktop screen the buttons will appear next to one another in two rows.

#### Game Section Pop-Up
![Quiz main content](docs/features/quiz-pop-up-feature.png)
- This section consists of the quiz itself and only pops up when a game type has been selected.
- It is made up out of the question, a countdown-bar, a timer, answer-buttons and if certain conditions are fulfilled a score and a next-button.

![Quiz main content mobile](docs/features/quiz-pop-up-mobile-feature.png)
- The whole section is responsive and will adapt according to screen size. On smaller smartphones and smaller tabletes the answer-buttons will be stacked on top of each other.

#### Timer, Timebar, Questions Left, Score
![Gama Data Section with no score](docs/features/quiz-game-data-no-score-feature.png)
- A Timer that counts down from 20 seconds is shown within a countdown bar which also runs down. This indicates to the user in a simple visual way how much time they have left to answer a certain question.
- A counter how many questions are left to be asked is given as well.
- When the user has not answered a question correctly only this information is given in this part.

![Gama Data Section with score](docs/features/quiz-game-data-score-feature.png)
- When the user has answered a question correctly the timer will stop its countdown at this point until the next question will be loaded in. 
- In this part a score-counter will appear as well. This way the user is always informed about all relevant game-related data.

#### Answers
![Answer buttons after user chose one](docs/features/quiz-answer-feature.png)
- The buttons have the same hover-effect as every other button, however they are styled in different colors to set themselves apart from the others. This is done to visually indicate to the user that this part of the website is different from the other parts as it is the quiz itself.
- The answer's order is random through the Fisher–Yates shuffle.
- After the user selects an answer the selected button will either turn green with a white font or it will turn red and the correct answer will turn green. 
- This reveal of the correct and false answer is commonly done in quizzes and other games to indicate to the user what they have done wrong or correct.
- The whole section is responsive and will adapt according to screen size. On smaller smartphones and smaller tabletes the answer-buttons will be stacked on top of each other.

![Answer buttons no-drop](docs/features/non-drop-button.gif)
- If an answer has been chosen the other ones cannot be selected anymore which is indicated visually as well by the cursor having the no-drop value.

#### Next Button
![Answers no next button](docs/features/quiz-no-next-btn-feature.png)
![Answers with next button](docs/features/quiz-next-btn-feature.png)
- When the user has not selected an answer yet there will be no next button.
- As soon as the user clicks on an answer-button the next button will appear below the answers. This way the user can only go to the next question after they selected an answer.
- If the time is up the next button will appear as well as the correct-answer will be shown in green as well to the user.
- The user can only choose the next button or click outside the game-window and another pop-up will appear.

#### Game Pause Section
![Game Pause Section](docs/features/quiz-game-pause.png)
- When playing the game and clicking outside the game window a pop-up will appear giving the user the two options to either keep playing or starting the game new. The user has hence always the chance to end the quiz whenever they like.
- Starting a new game will redirect the user to the beginning quiz page and they can choose again which quiz they want to start.
- Having this Pause Window open will pause the timer as well and resume when selecting the according button.

#### End of Game Section
![End of Game Section](docs/features/quiz-end-of-game-feature.png)
- After going through all questions when selecting the last next button an end of game pop-up will appear.
- This tells the user that the quiz is finished, their name and their final score.
- The user can then choose whether they would play a quiz again or want to add their score to the leaderboard. The first option will redirect the user at the beginning of the quiz page and the second will redirect the user to the landing page where they can choose to see the leaderboard with their score.

### 404 Page
![404 Page](docs/features/404-feature.png)
- When an error occurs or a wrong input is given to the url the 404-page will show up with the information on how to be redirected to the landing page.

### Future Features
- I played with the thought of getting rid of the next button feature and automatically switching to the next question after some time has passed after the answer has been chosen/revealed. However, as I have a bias against this I discussed this thought after the first few test-users went through the quiz with them. My own bias is that I think accessibility wise it makes more sense to use a button as going to the next question might go too fast for some people, or one can control when to start a new question on their own since life gets in the way of a fun little game sometimes. Moreover, various of my test users mentioned in a talk about the website that they generally dislike when a game does too much for them especially when it comes to decisions they would like to choose themselves. I already implemented the time constraint via a timer during the questions, for all of these reasons I decided against this feature for now. Yet, I would like to keep the option open in case future users or I would want that.


## TESTING
### Accessibility
#### Lighthouse Testing
##### Mobile
Index:

<img src="docs/testing/lighthouse-mobile-index.png" width="60%" alt="Lighthouse mobile index rating">

Quiz:

<img src="docs/testing/lighthouse-mobile-quiz.png" width="60%" alt="Lighthouse mobile quiz rating">

404:

<img src="docs/testing/lighthouse-mobile-404.png" width="60%" alt="Lighthouse mobile 404 rating">

##### Desktop
Index:

<img src="docs/testing/lighthouse-desktop-index.png" width="60%" alt="Lighthouse desktop index rating">

Quiz:

<img src="docs/testing/lighthouse-desktop-quiz.png" width="60%" alt="Lighthouse desktop quiz rating">

404:

<img src="docs/testing/lighthouse-desktop-404.png" width="60%" alt="Lighthouse desktop 404 rating">

#### Wave Testing
##### Index Page

<img src="docs/testing/wave-index.png" alt="Wave index rating" width="40%">

##### Quiz Page

<img src="docs/testing/wave-quiz.png" alt="Wave quiz rating" width="40%">

##### 404 Page

<img src="docs/testing/wave-404.png" alt="Wave 404 rating" width="40%">

### W3C Validators
#### HTML
No errors were returned for all pages from the W3C Markup Validator:

- [Index Page HTML-validator results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fxakkusu.github.io%2Fbioshock-quiz%2Findex.html)

- [Quiz Page HTML-validator results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fxakkusu.github.io%2Fbioshock-quiz%2Fquiz.html)

- [404 Page HTML-validator results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fxakkusu.github.io%2Fbioshock-quiz%2F404)

#### CSS
No errors were returned for the CSS stylesheet from the W3C CSS Validator:

- [Stylesheet CSS-validator results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fxakkusu.github.io%2Fbioshock-quiz%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### JShint
[JSHint](https://jshint.com/) was used to validate the JavaScript.
<details>
<summary>script.js</summary>
No errors or warnings.

<img src="docs/testing/jshint-script.png" alt="script.js JSHint result">
</details>
<details>
<summary>quiz.js</summary>
No errors. Warnings about semantics that could be confusing, however, as these variables concern variables from another JS-file they do exist due to their size they are just stored in the questions.js

<img src="docs/testing/jshint-quiz.png" alt="quiz.js JSHint result">
</details>
<details>
<summary>questions.js</summary>
No errors or warnings.

<img src="docs/testing/jshint-question.png" alt="questions.js JSHint result">
</details>

### Links Testing
- All internal links are working and redirecting the user to the pages they are meant to redirect them to. 
- All external links are working and redirecting, through a separate tab, the user to the external website they are meant to be redirected to.


### Browser Testing
The website was successfully tested on the following browsers:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

### Device Testing
- This website was viewed and tested on various devices such as smartphones (Iphone X, Samsung Galaxy S20, Iphone 13, Huawei P40 Pro+), laptops and desktops to guarantee that it is responsive for several screen sizes. Full successful testing was performed on all of the devices.


- The following websites, besides google dev tools, were used to check responsiveness:
    - [Am I Responsive - Index Page](https://ui.dev/amiresponsive?url=https://xakkusu.github.io/bioshock-quiz/index.html)
    - [Am I Responsive - Quiz Page](https://ui.dev/amiresponsive?url=https://xakkusu.github.io/bioshock-quiz/quiz.html)
    - [Am I Responsive - 404 Page](https://ui.dev/amiresponsive?url=https://xakkusu.github.io/bioshock-quiz/404.html)
    - [Responsinator - Index Page](http://www.responsinator.com/?url=https%3A%2F%2Fxakkusu.github.io%2Fbioshock-quiz%2Findex.html)
    - [Responsinator - Quiz Page](http://www.responsinator.com/?url=https%3A%2F%2Fxakkusu.github.io%2Fbioshock-quiz%2Fquiz.html)
    - [Responsinator - 404 Page](http://www.responsinator.com/?url=xakkusu.github.io%2Fbioshock-quiz%2F404.html)

### User Stories Testing
#### First Time User Goals
- I want to take a Bioshock quiz to test my knowledge

    The quiz tests the user's knowledge from simple questions up to questions that only die-hard fans can answer.
- I want to understand the website, its structure and how to take the quiz

    Through the common structure found in various quiz games most users should be already familiar with the website's set up. However, through the "How to Play?" Content the whole process of the game is easily explained step by step.
- I want the quiz to be easy to use and navigate

    All buttons, input fields and text are written in large, easy to understand fonts as well as simple language, as the website does not want the user to be overwhelmed when being tested about their knowledge. The user can return via return buttons or via clicking outside of pop-up windows which is explained in the How to Play section.
- I want to take the quiz whenever, wherever.

    The user can play the game whenever they like on whichever device they like, as long as they have internet connection.
- I want to take the test on whichever device

    The user can play the game whenever they like on whichever device they like, as long as they have internet connection.

#### Returning User Goals
- I want to be able to choose between different types of quizzes

    The user can choose between quizzes about Bioshock I to III or all of them however many times they want to.
- I want to be able to improve my knowledge of the Bioshock series

    If the user wants to learn more outside of the questions they can do so by choosing the "Need more knowledge?"-button on the landing page. They will be redirected to the Bioshock-Wiki where pretty much all important information about the games is stored.

#### Frequent User Goals
- I want to be able to choose between different types of quizzes

    The user can choose between quizzes about Bioshock I to III or all of them however many times they want to.
- I want to be able to improve my knowledge of the Bioshock series

    If the user wants to learn more outside of the questions they can do so by choosing the "Need more knowledge?"-button on the landing page. They will be redirected to the Bioshock-Wiki where pretty much all important information about the games is stored.
- I want to be able to see my score of the quiz outside of taking the quiz

    The user's score can be saved in the scoreboard if they choose to do so, otherwise only the name will be stored.

### Fixed Bugs
1. Questions were shown incorrectly, not one after another, but either jumped straight to the end or showed only three questions and then the last.
    - up to then the next-button's eventListener (for a "click") was in its own function, I put in the runGame()-function and had it execute the function which was on its own before.
    - didn't do this before as I thought it would be better in case I would need this function somewhere else.

2.  The questions after some time jumped from 1 to 2 to 4 to 8 to 15. 
    - put in various alerts for the questionsAsked variable to see its current value in the console while debugging
    - found out while incrementing it there was a bug, as well as giving the above mentioned event listener an external function through which I could better test where the problem was
    - this new function I gave the questionAsked variable as parameters and later as an argument and after I debugged this function I deleted all relevant alerts


3. After deploying the finished quiz, while playing the game the timer, score and questions left would react to the spacebar and enter key, so the would: timer - restart, questions left - subtract random numbers between 1-5 and go into the negative & score - add random numbers between 1-5
    - added event listeners for both keys in runGame()-function to prevent their default behaviour (as I could not find out what else they were doing I thought preventDefault() would be the safest option)
    - for spacebar I had to add various event listener events as it still would happen on different browsers/devices, so I took all names for spacebar I was able to find, so this problem could still occur if a browser uses another definition


### Known Bugs
- When pausing the game while already having answered a question the timer will still continue running down when returning to the game even though the answer has been selected. This does not change anything on any other variable, however I was not able to fix this yet with my current knowledge. At the same time this case should generally not occur as all the test users I had either paused before giving an answer or when pausing after an answer they returned to the start the game question. However, I would like to be able to fix this once I acquire the know-how.


## TECHNOLOGIES USED
### Languages
- HTML
- CSS
- JavaScript

### Frameworks, Libraries and Programs used
- [Balsamiq](https://balsamiq.com/wireframes/)- Used to create wireframes.
- [GitHub](https://GitHub.com/) - Used for version control and hosting.
- [Gitpod](https://gitpod.io/) - IDE to develop the website.
- [Google Fonts](https://fonts.google.com/) - Used to import  fonts used on the website.
- [Google Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools)- Used for troubleshooting, debugging, inspecting page's elements, testing responsiveness and styling elements.
- [Iconduck](https://iconduck.com/icons/164196/games-bioshock) - Used for website's favicon.
- [Coolors](https://coolors.co/) - Used to create a color palette.
- [Google Chrome's Lighthouse](https://developers.google.com/web/tools/lighthouse) - Used to test performance and accessibility.
- [Wave](https://wave.webaim.org/) Used to test accessibility.
- [W3C HTML Markup Validator](https://validator.w3.org/) Used to validate HTML code.
- [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) Used to validate CSS code.
- [JSHint](https://jshint.com/) Used to test all Javascript code.
- [Am I Responsive](https://ui.dev/amiresponsive) Used to test responsiveness.
- [Responsinator](http://www.responsinator.com/) Used to verify responsiveness especially usage for mobile devices.
- Code Institute's Gitpod Template to generate IDE workspace.


## DEPLOYMENT
The steps to deploy this project using GitHub pages were the following:
1. Go to the Settings tab of your GitHub repository.
2. On the left-hand sidebar, in the Code and automation section, select "Pages".
3. Make sure to select the following:
    - Source is set to 'Deploy from Branch'.
    - Main branch is selected.
    - Folder is set to / (root).
4. Click Save next to /root.
5. "Your GitHub Pages site is currently being built from the main branch." shows up.
6. Go back to the Code tab. Wait a few minutes for the build to finish and refresh your repository where a Deployments section will show the deployed project.

The live link can be found here - [Bioshock Quiz](https://xakkusu.github.io/bioshock-quiz/index.html)

How to run the project locally:

Fork the repository:
- Log in (or sign up) to Github.
- Go to the repository for: Xakkusu/bioshock-quiz.
- Click the Fork button in the top right corner.

#### Clone repository:
1. Log in (or sign up) to GitHub.
2. Go to the repository for: Xakkusu/bioshock-quiz.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.
6. A clone of the repository will now be created on your machine.


## CREDITS
### Media
As little different images as possible were chosen for the website to not overstimulate the user while taking the quiz. The following images were gratefully used:
- [Background Image](https://www.wallpaperflare.com/bioshock-columbia-video-games-tower-wallpaper-ursfm) - Wallpapaerflare
- [Logo Image](https://de.wikipedia.org/wiki/Datei:Bioshock_logo_2.svg) - Wikipedia
- [Favicon Image](https://iconduck.com/icons/164196/games-bioshock) - Iconduck
- [Border Image](https://imgbin.com/png/Jdg6XMxa/art-deco-png) - IMGBIN

### Resources
- Tutorials from Code Institute's lessons that we learned in the course of our diploma-education used to understand the basic concepts of JavaScript. 

- [Stack Overflow](https://stackoverflow.co/)

- [MDN](https://developer.mozilla.org/en-US/)

- [W3Schools](https://www.w3schools.com/)

- To understand the use of modals/pop-ups when clicking a certain element I relied on the material from [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) and this [Youtube Video by Florin Pop](https://www.youtube.com/watch?v=XH5OW46yO8I). Both explained the whole concept and code behind it very well. The according sections in my code where these things were relied on are also marked with a comment. 

-  To understand the general use and structure of a quiz game I relied on the content of the following [Youtube video by GreatStack](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=14s). Especially on how to implement the content for the questions and answers the code as well as the explanation helped a lot. The according sections in my code where these things were relied on are also marked with a comment.

- To understand the Fisher-Yates Shuffle to shuffle my answers I relied on the material from [Medium written by Khaledhassan](https://medium.com/@khaledhassan45/how-to-shuffle-an-array-in-javascript-6ca30d53f772). As there were many sources to choose from, his article described it in an effective understandable way. The according sections in my code where these things were relied on are also marked with a comment. 

- To understand the concept of a timer I relied on the material from [JavaScript.Info](https://javascript.info/settimeout-setinterval), [SheCodes](https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript) and this [Youtube Video by CodeSTACKr](https://www.youtube.com/watch?v=JRevaOwNKTI). Compared to other sources I could easily adapt their teachings to my cause. The according sections in my code where these things were relied on are also marked with a comment.

- To understand the concept of a progress bar for my countdown bar I relied on the material from [W3Schools](https://www.w3schools.com/howto/howto_js_progressbar.asp). It explained the whole concept and code behind it very well. The according sections in my code where these things were relied on are also marked with a comment.

- To understand the use the concept of border images I relied on the following [Youtube Video by Kevin Powell](https://www.youtube.com/watch?v=ypstT5UfCsk). It allowed me to easily implement a border image. The according sections in my code where these things were relied on are also marked with a comment.

- To understand the use the concept of localStorage being displayed in a leaderboard according to the score I relied on the following [Youtube Playlist by FloridaJS](https://www.youtube.com/playlist?list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF). Especially video 8 & 9 allowed me to display various scores and rank them after the quiz is done. The according sections in my code where these things were relied on are also marked with a comment.


## ACKNOWLEDGEMENTS
- My mentor Antonio for their guidance and support.
- Code Institute for informative course material.