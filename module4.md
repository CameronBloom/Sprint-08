# Testing Web Applications

## Key Concepts
> understand different kinds of tests
> define why testing is important
> write unit tests

## Essential Questions
> what are the different types of tests
> why is testing important
> how would you test to see if something is on your web page
> how do you test a click event

### Notes
> ... 

### Objective 1 - Use React-Testing Library for Testing React Components
> utilize the "arrage, act, assert" structure for testing 
> we are checking rendered elements, not implementation details (classes)
> first step: import dependencies, methods, components
> second step: arrange renders the React element into a virtual DOM
> third step: act queries the DOM for a specific node
> fourth step: assert runs specific functions that test the specified node

### Objective 2 - Use the React-Testing Library to Test User Interactions With fireEvent
> testing queries are prefixed by "find", "get", and "query"
> the React-testing library is designed to mimic how a human interacts with a website
> we test interface pieces by capturing what we expect to see (or not see) in the DOM using queries