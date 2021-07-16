# [Fresh Tomatoes](https://fresh-tomatoes.netlify.app/)

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

**Fresh Tomatoes** (inspired by rotten tomatoes) is an application that will allow users to access a list of movies with reviews written by the users themselves. People who access this app will create an account so that they may view and add movies they have watched. Movies added by the user will include the title, poster image, and a brief plot description. Aside from the details of the movie, each film will also contain a list of user reviews. Fresh Tomatoes allows the user to become a movie critic, as they write their own personal opinions on the movie and leave it with a rating to help other users decide what to watch next.

<br>

## MVP

### Server (Back End)

- **RESTful JSON API**
  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with 3 associated tables: users, movies, and reviews
  - Utilize **Rails** to define models for interacting with the database.
  - Implement working generic controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) between tables
  - Include validations for user and movie creation
  - Authenitcation for user sign-up and sign-in functionality

### Client (Front End)

- Have a working, interactive **React** app
- Consume data from my **Ruby on Rails API**, and render that data in my components.
- Utilize **React Router**, for client-side routing.
- Demonstrate Full CRUD actions ( `index`, `show`, `create`, `update`, and `delete` ) on the front end.

### Styling

- Use Flexbox or Grid
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

<br>

### Goals

- Users can view all movies with corresponding movie details and reviews created by users
- Users can add their movies and reviews
- Users may edit movies that only they created
- Users may remove reviews that only they created

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Splits up my components for easy file navigation |
|   React Router   | Allows smooth transitions between all screens |
| Axios | Used to access data from an API|
| Ruby on Rails | Backend MVC framework|
| Bootstrap | Import premade styles for buttons and forms |

<br>

### Client (Front End)

#### Wireframes

![Sign Up Landing Screen](https://user-images.githubusercontent.com/78659139/116120460-65d7f100-a674-11eb-9dc1-fb19ec7baa65.png)

![Sign In Screen](https://user-images.githubusercontent.com/78659139/116120677-a7689c00-a674-11eb-8bf5-412115be49c5.png)

![Movies Screen](https://user-images.githubusercontent.com/78659139/116135094-83fa1d00-a685-11eb-8568-605afda532c1.png)

![MovieDetails Screen](https://user-images.githubusercontent.com/78659139/116135299-cfacc680-a685-11eb-8fb4-bf93f0479f36.png)

![MovieEdit Screen](https://user-images.githubusercontent.com/78659139/116135427-ff5bce80-a685-11eb-84bc-25cc373122b0.png)

![MovieCreate Screen](https://user-images.githubusercontent.com/78659139/116135484-0da9ea80-a686-11eb-8d5c-0c07e5311c38.png)

![ReviewCreate Screen](https://user-images.githubusercontent.com/78659139/116135570-21ede780-a686-11eb-878a-056a4ea6b93f.png)

![Mobile](https://user-images.githubusercontent.com/78659139/116134953-57460580-a685-11eb-8fec-feb3ae7e4f27.png)

#### Component Tree

[Component Tree](https://whimsical.com/project-4-hdtW2k6hZ8Ka6e7SQFsoU)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ containers/
      |__ MainContainer.jsx
|__ components/
      |__ MovieCard.jsx
            |__ MovieCard.jsx
            |__ MovieCard.css
      |__ ReviewCard
            |__ ReviewCard.jsx
            |__ ReviewCard.css
      |__ Reviews
            |__ Reviews.jsx
            |__ Reviews.css
|__ layouts/
      |__ Layout.jsx
      |__ Header.jsx
      |__ Footer.jsx
|__ screens/
      |__ SignIn
      |__ SignUp
      |__ Movies
            |__ Movies.jsx
            |__ Movies.css
      |__ MovieCreate
            |__ MovieCreate.jsx
            |__ MovieCreate.css
      |__ MovieDetails
            |__ MovieDetails.jsx
            |__ MovieDetails.css
      |__ MovieEdit
            |__ MovieEdit.jsx
            |__ MovieEdit.css
      |__ ReviewCreate
            |__ ReviewCreate.jsx
            |__ ReviewCreate.css
|__ services/
      |__ auth.js
      |__ movies.js
      |__ reviews.js



```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal    |    H     |     1 hrs      |      .5 hrs     |     .5 hrs    |
| Back-end Setup    |    H     |     3 hrs      |      5 hrs     |     5 hrs    |
| Layout    |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| Header   |    H     |     2 hrs      |     1 hrs     |    1 hrs    |
| Footer    |    L     |     2 hrs      |     1 hrs     |    1 hrs    |
| Login/Register Form    |    L     |     3 hrs      |     2 hrs     |   2 hrs    |
| MoviesAll   |    H     |     3 hrs      |     1 hrs     |    1 hrs    |
| MovieInfo   |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| MovieCreate    |    L     |     3 hrs      |     1 hrs     |    1 hrs    |
| MovieEdit    |    L     |     3 hrs      |     1 hrs     |    1 hrs    |
| Review Create    |    H     |     3 hrs      |     1.5 hrs     |    1.5 hrs    |
| Review Delete    |    L     |     2 hrs      |     1 hrs     |    1 hrs    |
| Header CSS   |    H     |     2 hrs      |     .5 hrs     |    .5 hrs    |
| Footer CSS   |    L     |     1 hrs      |     .5 hrs     |    .5 hrs    |
| Login/Register Form CSS    |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| MovieCreate/MovieEdit CSS    |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| MoviesAll CSS   |    H     |     3 hrs      |     1 hrs     |    1 hrs    |
| MovieInfo CSS   |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| ReviewCreate CSS  |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| TOTAL               |          |     49 hrs      |      31 hrs     |     31 hrs    |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://app.diagrams.net/#G1995mcTTVAbj0lzZ1popNFQs90x2Zic-h)
<br>

***

## Post-MVP

- Get the average rating from all reviews and display it next to each movie
- Conditional rendering a tomato or a splat for rotten in the review box
- Search bar on Movies page to find a specific movie

***

## Code Showcase
```
  def show
    render json: @movie.as_json(include: [{reviews: {include: :user}}, :user], methods: :rating)
  end

```
```
 <div className="movie-info">
                {movie.rating === 0 ? (
                  <p>(No reviews added)</p>
                ) : (
                  <>
                    <p>
                      {" "}
                      <img
                        id="tomato"
                        src="https://cdn.iconscout.com/icon/free/png-512/tomato-vegetable-emoj-symbol-food-30690.png"
                        alt="tomato"
                      />{" "}
                      {movie.rating}%
                    </p>
                  </>
```




## Code Issues & Resolutions

1. At first, it was hard to grab information from my reviews and users on my MovieInfo screen. To solve the issue, I ahd to modify the movies controller and my routes in order to make sure the movie data coming back included the review object, and a user object nested within.

