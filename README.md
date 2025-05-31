# Social App

---

This is a simple social media application built with **React** and **React Router**, demonstrating basic routing, state management, and component interaction. Users can view a feed of posts, like or dislike them, and see a summary of their total likes and dislikes on a profile page.

---

## Features

* **Feed Page**: Displays a list of posts with images.
* **Like/Dislike Functionality**: Users can like or dislike individual posts. Each post tracks its own likes and dislikes.
* **Profile Page**: Shows the aggregate number of likes and dislikes across all posts.
* **Navigation**: Seamless navigation between the Feed and Profile pages using React Router.
* **Responsive Design**: Basic styling with Tailwind CSS.

---

## Technologies Used

* **React**: A JavaScript library for building user interfaces.
* **React Router**: For declarative routing in React applications.
* **Tailwind CSS**: A utility-first CSS framework for styling.

---

## Installation and Setup

To run this project locally, follow these steps:

1.  **Clone the repository** (or copy the code into your project):

    ```bash
    git clone <repository-url> # If you have a Git repository
    cd social-app # Navigate into the project directory
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**:

    ```bash
    npm start
    # or
    yarn start
    ```

    This will open the application in your browser, usually at `http://localhost:3000`.

---

## Project Structure

The project is organized into the following main files:

* **`App.jsx`**: The main application component, handling routing and global state for total likes/dislikes.
* **`components/`**:
    * **`Feed.jsx`**: Displays the list of posts and manages individual post interactions (likes/dislikes).
    * **`Post.jsx`**: Represents a single post with an image and like/dislike buttons.
    * **`Profile.jsx`**: Shows the aggregated like and dislike counts.

---

## How It Works

### `App.jsx`

* Manages the global state for `totalLikes` and `totalDisLikes` using `useState`.
* Provides `handleLikes` and `handleDislikes` functions to update these global counts, which are passed as props to the `Feed` component.
* Sets up routing using `BrowserRouter`, `Routes`, and `Route` from `react-router-dom` to navigate between the Feed and Profile pages.

### `Feed.jsx`

* Contains an array of image URLs to simulate posts.
* Uses local state `postsState` to track the likes, dislikes, and reaction status (`isLiked`, `isDisliked`) for each individual post.
* The `handleLike` and `handleDislike` functions update the specific post's state and also call the `onLike`/`onDislike` props received from `App.jsx` to update the global counts.
* Renders multiple `Post` components, passing relevant data and handlers.

### `Post.jsx`

* Receives `imgUrl`, `onLike`, `onDislike`, `likes`, `dislikes`, and `hasReacted` as props.
* Displays the post image and buttons for liking and disliking.
* The buttons are disabled once a user has reacted to a post to prevent multiple reactions on the same post.

### `Profile.jsx`

* Receives `totalLikes` and `totalDisLikes` as props from `App.jsx`.
* Displays these aggregated counts, providing a summary of user activity.

---

## Styling

**Tailwind CSS** is used for styling. Classes like `min-h-screen`, `bg-gray-100`, `shadow-md`, `p-4`, `flex`, `justify-between`, `text-2xl`, `font-bold`, `text-blue-600`, `space-x-4`, `hover:underline`, `rounded-lg`, `overflow-hidden`, `w-70`, `h-70`, `h-60`, `object-cover`, `text-green-500`, `text-red-500`, `disabled:opacity-50` are applied directly in the JSX.

---

## Future Enhancements

* Add user authentication.
* Implement a backend to store posts and user data persistently.
* Allow users to create new posts.
* Add comments to posts.
* Improve UI/UX with more advanced styling and animations.
* Implement an "unlike" or "undislike" functionality.
