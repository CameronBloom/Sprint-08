# The React Lifecycle

## Key Concepts
> what are the three phases of the react lifecycle
> what role do the constructor and render methods play in the react lifecycle
> how do you use the componentDidMount() method
> how do you use the componentDidUpdate() method

## Essential Questions
> what are the react lifecycles
> what order do things happen within a component
> where do we set state when we retrieve data from an api

### Notes
> the `constructor()` function runs first
> the `render()` function runs last
> the `componentDidMount()` function runs after the component mounts...
> the `render()` function runs again whenever state gets updated
> the `componentDidUpdate()` function takes in our `prevProps` and `prevState`
>> - anytime the properties or state get updated, `componentDidUpdate()` and `render()` will run

### Objective 1 - Describe the Three Phases of the React Component Lifecycle
> when talking about the lifecycle, we're talking about the base class component
> each time we extend the react base class, we gain access to the react component lifecycle
> we have access to lifecycle methods provided to us from the react api
> we can gain control over when things happen during the component lifecycle
> there are three phases: MOUNTING, UPDATING and UNMOUNTING

> the render phase has no side effects and may be paused, aborted, or restarted
>> before the component gets mounted to the screen, we have some initial data in the `contructor()`
>> - state data is initialized
>> - we can receive props and place them on our component as state
>> after the `constructor()` has run, the next big step is running `render()`
>> `render()` takes the JSX elements and passes them through the virtual DOM to the actual DOM
>> the phase concludes by running `componentDidMount()`

> the updating phase can be triggered by new `props`, running `setState()`, or forcing an update
>> `render()` takes the JSX elements and passes them through the virtual DOM to the actual DOM
>> the phase concludes by running `componentDidUpdate()`

> the unmountain phase represents the end of the lifecycle
>> as soon as the component leaves the screen, the phase concludes by running `componentWillUnmount()`
>> - we can use this to clean up the environment when a component is no longer in use

### Objective 2 - Properly Explain What the Constructor and Render Methods Do and What Their Place is in the React Component Lifecycle
> v = fn(s)
> view (what's being presented to the DOM) is a function of state
> the view is what the user sees and interacts with on our web pages
> state is used to drive our views
> the `constructor()` function is used to intialize your class and the data your class needs

### Objective 3 - Use the componentDidMount Function to Set a Component's State Post Render
> use the `componentDidMount()` function to set a component's state post `render()`
> the `componentDidMount()` lives on the base react class component
> the `componentDidMount()` gets invoked after the render gets called
> the `componentDidMount()` only gets invoked once
> the `componentDidMount()` is used for any async data loading that you'd need to have on state

