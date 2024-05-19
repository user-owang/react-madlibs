### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

  react is a front end framework. it is very useful when you are building a web app that has a lot of repeated components because you can write the code for each component once and reuse it anywhere.

- What is Babel?

  babel is a translation layer that helps translate jsx into html and javascript

- What is JSX?

  JSX is similar to jinja in that it is similar to html, but allows for javascript to be passed into a file.

- How is a Component created in React?

  you can use a function or a class to define a component

- What are some difference between state and props?

  state can be changed dynamically and on changing, it will rerender the component. props are passed through to components as things that are not meant to change, but can be changed by changing state and then passing state in as a prop

- What does "downward data flow" refer to in React?

- What is a controlled component?

  a controlled component is a component whose contents are determined by the state

- What is an uncontrolled component?

  an uncontrolled component is a component whose contents are not determined by state, but could potentially be saved to the state later.

- What is the purpose of the `key` prop when rendering a list of components?

  the key prop helps identify unique components from within an array of components even if their order changes.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

  Because indexes will change and potentially duplicate if an array value is moved around or deleted and keys should be unique

- Describe useEffect.  What use cases is it used for in React components?

  useEffect defines a function to run after the rendering phase of a component. An example of a use case would be resetting a controlled form's values upon submit

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

  useRef helps keep track of a value across renders. changing a ref value does not trigger a re-render

- When would you use a ref? When wouldn't you use one?

  You would use useRef to define a DOM object, set up/clear timers, etc.

- What is a custom hook in React? When would you want to write one?

  a custom hook is a piece of logic that is defined in a separate file that you can use across multiple components. You would write one when you see multiple components using a similar piece of logic so that you dont have to keep rewriting it.