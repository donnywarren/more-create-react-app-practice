# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

1. Fork
1. Feature
1. Clone
1. Pull Request

![React](https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png)

# [Create React App](https://facebook.github.io/create-react-app)

![](my-book.png)

## Start Here

Inside this repo, run the following command to create a new react app:

```sh
npx create-react-app my-book
```

> `npx` is a tool for running JavaScript npm modules that are intended for use as commands.

Use `npm start` to start a server that will serve your new React application:

```bash
cd my-book
npm start
```

You can view the app at `http://localhost:3000`

> Note: If you ever need to stop the server, you can hit `ctrl-c` in the terminal window.

Your job will be to implement the following:

1. A Header component
2. A Book component
3. A Footer component

Your App component will have three children: Header, Book, and the Footer component.
1. In the App component, create a `book` object that has the following properties:

    *   `title`
    *   `image`
    *   `description`

1.  Pass the `book` object properties into the `<Book />` element as props.
1.  In the `Book.js` file, use the props that were passed down to the component
    to render the data into the JSX.
1.  Create another `<Book />` element in the App's render() method, with information about another book passed as props.


**Required**
- Your app should resemble the mockup as closely as possible.

**Tips:**
- Use Google Images to find book images
- Use http://generator.lorem-ipsum.info/_latin to generate bogus text, useful for mockups.
- Use Flexbox

