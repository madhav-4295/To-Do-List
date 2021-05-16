import React from "react";
const vDate=(date)=>{
    const date1=new Date()
    let mm= date1.getMonth()+1
    if(mm<10){
        mm="0"+mm
    }
    const today= date1.getFullYear()+"-"+mm+"-"+date1.getDate()
    if(new Date(today)> new Date(date)){
        return false
    }else{
        return true
    }
}
class TodoForm extends React.Component{
    
    
        state={
            
            text:"",
            description:"",
            assignedTo:"",
            dueDate:"",
            errorMessage:"",
            
            
            
        }
    
    handleChange=(e)=>{
         this.setState({[e.target.name]:e.target.value})
        
        
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
       
        if(this.state.dueDate!=="" && this.state.text!=="" && this.state.description!=="" && this.state.assignedTo!==""){

            //validating if date is previous or not
            if(vDate(this.state.dueDate)===false){
                this.setState({errorMessage:"Due date should be current or future date",})
            }else{
                this.setState({errorMessage:""})
                this.props.onSubmit({
                    text:this.state.text,
                    description:this.state.description,
                    assignedTo:this.state.assignedTo,
                    dueDate:this.state.dueDate,
                    id: Date.now(),
                    labels:'',
                    status:""
                    
                })
                this.setState({text:"",description:"",assignedTo:"",dueDate:""})
            }
        }else{this.setState({errorMessage:"all fields are mandatory"})}

       
    }
    render(){
        return(
            <div style={{margin:"8px"}}>
                <h1>To-Do List</h1>
                <div className="input-group">
               
                    <input type="text" className="form-control" value={this.state.text} onChange={this.handleChange} name="text" placeholder="Enter task"></input>
                    <input type="text" className="form-control" value={this.state.description} onChange={this.handleChange} name="description" placeholder="Enter description"></input>
                    <input type="text" className="form-control" value={this.state.assignedTo} onChange={this.handleChange} name="assignedTo" placeholder="Assigned to"></input>
                    <input type="date" className="form-control" value={this.state.dueDate} onChange={this.handleChange} name="dueDate" placeholder="Due date"
                     >

                     </input>
                   
                    
                    <button onClick={this.handleSubmit} className="btn btn-primary btn-sm">Add</button>
               
                </div>
                {this.state.errorMessage.length>0?
                    <p className="alert alert-danger" role="alert" style={{width:"30%",height:"20%",alignSelf:"center",marginLeft:"30%"}}>{this.state.errorMessage}</p>
                :null}
            </div>
        )
    }
}

export default TodoForm