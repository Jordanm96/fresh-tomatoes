# README

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Healthy Tomatoes** (inspired by rotten tomatoes) is an application that will allow users to access a list of movies with reviews written by the users themselves. People who access this app will create an account so that they may view and add movies they have watched. Movies added by the user will include the title, poster image, and a brief plot description. Aside from the details of the movie, each film will also contain a list of user reviews. Healthy Tomatoes allows the user to become a movie critic, as they write their own personal opinions on the movie and leave it with a rating to help other users decide what to watch next.

<br>

## MVP
### Planning

- README

### Server (Back End)

- **RESTful JSON API**.
  - 
  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with at least 3 tables: users, movies, and reviews
    - Association between users to movies and reviews, and movies to reviews
  - Utilize **Rails** to define models for interacting with the database.
  - Implement working generic controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) between tables

### Client (Front End)

- Have a working, interactive **React** app
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional or class React components appropriately.
  - Utilize state and props in the components efficiently.
- Consume data from my **Ruby on Rails API**, and render that data in my components.
- Utilize **React Router**, for client-side routing.
- Demonstrate Full CRUD actions ( `index`, `show`, `create`, `update`, and `delete` ) on the front end.

### Styling

- Be styled with CSS
- Use Flexbox or Grid
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

### Linting

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase`, `snake_case`, and `kebab-case` convention.
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes and comments are okay).

### Deployment

- Deploy the fully functional front-end via Surge or Netlify.
- Deploy the back-end via Heroku.

### Procedural

- Initialize a **git repo on Github**, with a link to my hosted project.
- Have **frequent commits**, making a commit history at least every day. (75 commits minimum)
- Use effective and safe **branching and merging** processes.

<br>

### Goals

- Users can view all movies with corresponding movie details and reviews created by users
- Users can add their movies and reviews
- Users may edit movies
- Users may remove reviews that only they created
- Users table
- Movies table
- Reviews table (associated with movie_id and user_id)

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Splits up my components for easy file navigation |
|   React Router   | Allows smooth transitions between all screens |
| Axios | Used to access data from an API|
| Bootstrap Library | Import premade styles for buttons and forms |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

[Component Tree](https://whimsical.com/project-4-hdtW2k6hZ8Ka6e7SQFsoU)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal    |    H     |     3 hrs      |      hrs     |     hrs    |
| Back-end Setup    |    H     |     3 hrs      |      hrs     |     hrs    |
| Layout    |    H     |     3 hrs      |      hrs     |     hrs    |
| Header   |    H     |     3 hrs      |      hrs     |     hrs    |
| Footer    |    L     |     3 hrs      |      hrs     |     hrs    |
| Login/Register Form    |    L     |     3 hrs      |      hrs     |     hrs    |
|  Movies   |    H     |     3 hrs      |      hrs     |     hrs    |
| Movie Detail   |    H     |     3 hrs      |      hrs     |     hrs    |
| Movie Create    |    L     |     3 hrs      |      hrs     |     hrs    |
| Movie Edit    |    L     |     3 hrs      |      hrs     |     hrs    |
| Review Create    |    H     |     3 hrs      |      hrs     |     hrs    |
| Review Edit    |    L     |     3 hrs      |      hrs     |     hrs    |
| Review Delete    |    L     |     3 hrs      |      hrs     |     hrs    |
| Header CSS   |    H     |     3 hrs      |      hrs     |     hrs    |
| Footer CSS   |    L     |     3 hrs      |      hrs     |     hrs    |
| Login/Register Form CSS    |    H     |     3 hrs      |      hrs     |     hrs    |
|  Movies CSS   |    H     |     3 hrs      |      hrs     |     hrs    |
| Movie Detail CSS   |    H     |     3 hrs      |      hrs     |     hrs    |
| Movie Create CSS   |    H     |     3 hrs      |      hrs     |     hrs    |
| Movie Edit CSS   |    L     |     3 hrs      |      hrs     |     hrs    |
| Review Create CSS  |    H     |     3 hrs      |      hrs     |     hrs    |
| Review Edit CSS   |    L     |     3 hrs      |      hrs     |     hrs    |
| Review Delete    |    L     |     3 hrs      |      hrs     |    hrs    |
| TOTAL               |          |     69 hrs      |      hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://app.diagrams.net/#G1995mcTTVAbj0lzZ1popNFQs90x2Zic-h)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!
- Get the average rating from all reviews and display it next to each movie
- 

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
