Reload dev window: Cntrl + Shift + p



1.
for user Import and
export you have to make sure to add attribute 'type=module' in script

2. Export are of Two Type[1. Default
    export, 2. Named Export]

3. Hooks: We have diff types of hooks in JS.
We can 't update the variables drecyl in React js, like we did in JS , its not allowed in react so tp update variables or avliues you have to usue react hooks , because everything gone through react 

You - > React - > Website
Website - > react - > you

    ==
    >
    Usestate: Used to manage the state of variable or element, like update values or other ==
    >
    UserEffect: Used to use the use things on sidestack, dont block anything like, API ===
    >
    Useref: Used to select the dom element(Taking ref of element) ==
    >
    useContext: Used to managed Data globally we can say data center(Example: dark theme light theme) ==
    >
    useReducer: Used to manage the complex logic(Example: user logged in or not, localstotage deta managed) ==
    >
    UseMemo: Used to reduce re - rendering or used
for optimization
    ==
    >
    UseCallback: Used to reduce re - rendering or used
for optimization


USE STATE Hook: When we need to change the variable or update it, we are using the usestate hook to avoid interact with website directly

NOTE: Here when we will
try to print value in console intantly after update so it will show the prevoius value becauase it working a synchronlsy like new value instaly shown in browser or UI but in console.value ansynchronisly changed

Syntx: Const[val, setval] = usestate(val)
val == Read only
setval == write only



10: UseEffect: Mounting: Jab jab koi change krunga useeffect chlega