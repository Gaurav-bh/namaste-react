import User from "./User";
import Userclass from "./Userclass";
import react from "react";


class About extends react.Component{
    constructor(props){
        super(props);
        // console.log("About constructor")
        
    }
    componentDidMount(){
        // console.log("About did mount")
    }
    
    render(){
        // console.log("About Render")
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste react about page</h2>
                <Userclass name={"gaurav"}></Userclass>
            </div>
        )

    }
}
// const About =()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste react about page</h2>
//             <User></User>
//             <Userclass name={"gaurav"}></Userclass>
//         </div>
//     )
// }
export default About;