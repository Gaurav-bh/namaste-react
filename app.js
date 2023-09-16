import  React  from 'react';
import  ReactDOM  from 'react-dom';


const child1=React.createElement(
    "h1",
    {id:"child1"},
    "Hi i am the first child"

);
const child2=React.createElement(
    "h1",
    {id:"child2"},
    "Hi i am the second child"

)

const parent=React.createElement(
    "div",
    {id :"heading"},
    [child1,child2]
);
const heading= React.createElement(
    "div",
    {id:"parent"},
    parent
    
);
const revision=React.createElement(
    "h1",
    {},
    "Hi hello"
)
console.log(heading)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
