# Intro to Class Components
> functional components versus class components
> function components taken in props and return a JSX object which renders to the screen
> class components typically extend an existing React.Component and use the `render()` method to return the JSX to thens creen

## Key Concepts
> creating class components
> sharing data between class components
> respond to events with class componentes

## Essential Questions
> what sets a class component apart from a function component?
>> - functional components are new items in React
>> - class components are legacy items in React

> how do you reference props in a class component?
>> - functional components drill down props
>> - class components use the constructor to add props

> how do you use state in a class component?
>> - functional components use the `const [count, setCount] = useState(0)` methodology
>> - class components add state as a property within the `constructor()` object
>> -- we need methods that will be able to modify state
>> -- we can pass methods as properties to component objects
>> -- we use the `setState()` method to update class state and overwrite our whole state object

> how do you trigger events in a class component?

### Notes
> Sample Class Component
> ` class Item extends React.Component { `
> `   render() {                         `
> `     return (<h1>Hello World</h1>)    `
> `   }                                  `
> ` }                                    `

> Sample Props + State + Methods
> ` class Item extends React.Component { `
> `                                      `
> `   constructor(props) {               `
> `     super(props)                     `
> `     this.state(props) = {            `
> `       item: ''                       `
> `     }                                `
> `   }                                  `
> `                                      `
> `  addItem = (evt, item) => {          `
> `    evt.preventDefault();             `
> `    const newItem = { ... }           `
> `    this.setState(                    `
> `      {                               `
> `        ...this.state,                `
> `        groceries: [...this.state.groceries, newItem] `
> `      }                               `
> `    )                                 `
> `  }                                   `
> `                                      `
> `   render() {                         `
> `     return (                         `
> `       <h1>${this.props.name}</h1>    `
> `     )                                `
> `   }                                  `
> ` }                                    `

### Objective 1 - Explain Class Components, and Use a Class Component to Render Some State Data to the DOM
> explain what class components are
> =================================
>> - class components are the same as JavaScript classes
>> - we are extending the base react class from the react library
>> - the react base class provides access wide range of features, including the react api and lifecycle
>> - the `render()` function is essential to understanding how classes work
>> - class components can also hold state

> use a class component to render some JSX to the screen
> ======================================================
> ` class App extends React.Component { ` extend the React Base Component 'Component'
> `   constructor() {                   `
> `     super()                         ` gives us access to `this`
> `     this.state = {}                 ` this becomes the heart of our application (everything lives on state)
> `                                     `
> `   render() {                        ` instead of returning JSX, we use the `render()` method
> `     return (                        `
> `       <div className="App">         ` this is all the same!
> `       </div>                        `
> `     )                               `
> `   }                                 `
> ` }                                   `

### Objective 2 - Share Data Between Components Using State and Props
> state
> =====
>> - state is a component level storage object that we can use to hold onto data that may be needed
>> - state should be set up on the constructor function
>> - we can create, read, delete and update state
>> - the `render()` function gets called again whenever state updates
>> - we can pass state around as `props` through multiple levels of our components
>> - state is as persistent in memory as your component
>> - state is mutable
>> - state can only be changed through the `setState` method


## Objective 3 - Respond to Events Triggered by User Interaction and Handle User Input via Forms in React
> react event handlers
> ====================
>> - we respond to events triggered by user interations using event handlers
>> - DOM events occur any time a user interacts with a DOM element (clicks, scrolls, etc.)
>> - events are fired/trigger within the browser window and are attached to specific elements
>> - JavaScript has an event model built into the language
>> - in React, all events are wrapped inside a synthetic event object
>> - in React, objects are pooled, meaning the event object can be used by other types of DOM elements
>> - we can declare methods on classes using arrow functions
>> >> - `handleEvent = () => alert('Event Triggered');`