
import react from "react";
class Userclass extends react.Component{
    constructor(props){
        
        super(props)
        this.state={
            count:0,
            userinfo:{
                name:"Dummy",
                location:"Default Location"
            }
        }
        // console.log("User Constructor"+this.props.name)
    }
    async componentDidMount(){
        // console.log("User did mount"+this.props.name)
        
            const data= await fetch("https://api.github.com/users/Gaurav-bh");
            const json= await data.json(); 
            console.log("here");
            console.log(json)
            this.setState({
                userinfo:json
            });
        
    }
    render()
    {
        // console.log("User Render"+this.props.name)
        const {name,location}=this.state.userinfo
        return (
            <div className="user-detail">
                <h2>{this.state.count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })

                }}>increase</button>
                <h2>Name :- {name}</h2>
                <h2>Location :- {location}</h2>
                <h2>Contact :- bhardwajg556@gmail.com</h2>
            </div>
          )

    }
}
 export default Userclass;