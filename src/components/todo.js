
import React from "react";
const options=[
    {
        label:"To be Done",
        value:"To be Done"
    },
    {
        label:"In progress",
        value:"In progress"
    },
    {label:"Completed",
    value:"Completed"}
]
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:"none",
            labels:"",
            assignedTo:this.props.assignedTo

            
            
        }
    }
    
    
   
    //Handling status changes
    handleChange=(e)=>{
        this.setState({status:e.target.value})
            
     
    }
    
    
    
    handlelabels=(e)=>{
        this.setState({labels:e.target.value})
    }
    //Handling Assigned To Changes
    handleAssignedTo=(e)=>{
        this.setState({assignedTo:e.target.value},()=>{console.log(this.state.assignedTo);})
    }
    
    render(){
        
        return(
            <>
                {/* displaying data */}
                 <tr key={this.props.id} >
                    <td>{this.props.id}</td>
                    <td >{this.props.text}</td>
                    <td >{this.props.description}</td>
                    <td > <input type="text" value={this.state.assignedTo} onChange={this.handleAssignedTo} onBlur={()=>this.props.updateAssignedTo(this.state.assignedTo,this.props.id)}></input></td>
                    <td >{this.props.dueDate}</td>

                    {/* rendering status options  */}
                    <td >
                    <select type="text" value={this.state.status} onChange={this.handleChange}>
                    <option value="none" defaultValue hidden >Select Status</option>
                    {options.map((option)=>(
                    <option  value={option.value}>{option.label}</option>
                    ))}
                    </select>
                    </td>

                    <td >
                    {/* Button to update status */}
                    <button className="btn btn-outline-primary"  onClick={()=>this.props.update(this.state.status,this.props.id)}><i className="bi bi-plus-circle-fill"></i></button>
                    </td>


                    <td ><input className="form-control" type="text" name="labels" placeholder="Enter tags or labels"value={this.state.labels} onChange={this.handlelabels}></input></td>
                    {/* Button to update Labels */}

                    <td ><button className="btn btn-outline-primary" onClick={()=>this.props.updateLabel(this.state.labels,this.props.id)}><i className="bi bi-plus-circle-fill"></i></button></td>

                    {/* Button to Delete the task */}
                    <td ><button  className="btn btn-outline-danger" onClick={()=>this.props.delete(this.props.id)}><i className="bi bi-trash2-fill"></i></button></td>
                    </tr>
               
             

            </>
            
                       
                            
            
            
        )
    }
}

export default Todo
