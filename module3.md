# Composing and Sharing Non-Visual Behavior

## Key Concepts
> define stateful logic
> use custom hooks
> use custom hooks to extend multiple pieces of stateful logic

## Essential Questions
> how should you name custom hooks?
> how would you set up a custom hook?
> what is stateful logic?
> when would you want to implement a custom hook?

### Notes
> stateful logic deals with anything that updates the state inside our components

### Objective 1 - Define Stateful Logic
> stateful logic is logic that is built into a component and usually deals with state 
>> a function that handles a click event
>> a function that sets a toggle state
>> a function that formats data before it gets displayed

### Objective 2 - Apply Non-Visual Behavior (Stateful Logic) With Custom Hooks
> custom hooks are called this because you are building the hook yourself to apply non-visual behavior and stateful logic
> this way, you can reuse the same hook over and over again. 
> custom hooks follow the same naming patterns that you've already learned (i.e., prefacing the function name with use, as in useState). 
> you can build a reusable custom hook for anything from handling controlled inputs to managing event listeners or watching for key presses
> by building a custom hook, we can skip writing out all of the stateful logic for our non-visual behavior
> custom hooks produce beautiful, DRY code that is easy to read and use

### Objective 3 - Compose Hooks in a Custom Hook to Extend Multiple Pieces of Stateful Logic
> we can extend our stateful logic by combining several hooks in a powerful, single custom hook
> we can develop this complexity using multiple hooks inside a single custom hook