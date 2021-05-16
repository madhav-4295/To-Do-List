import React from "react"
import TodoForm from "./todoForm"
// import Todo from "./todo"



import Todo from "./todo"
class TodoList extends React.Component{
    state={
        todos:[],
   
    }
    //Adding to-do task in the todos
    addTodo=(todo)=>{
        console.log(todo)
        
        this.setState({todos:[...this.state.todos,todo]})
        console.log(this.state.todos)
    }
    //deleting specific to-do task 
    delete=(id)=>{
        this.setState({
            todos:this.state.todos.filter(item=>item.id!==id)
        })
    }

    //updating the state of the specific to-do task
    update=(status,id)=>{
         
        //console.log(this.state.todos)
        this.setState({
            todos: this.state.todos.map(todo=>{
                if(todo.id===id){
                    return{
                        ...todo,
                        status:status
                    }
                    
                }else{
                    return todo;
                }
                
            })
        },()=>{console.log(this.state.todos)})
        


    }
    //Adding and Updating labels for the specific to-do task
    updateLabel=(text,id)=>{
        this.setState({
            todos:this.state.todos.map(todo=>{
                if(todo.id===id){
                    return {
                        ...todo, labels:text
                    }
                }else{
                    return todo
                }
            })
        },()=>{console.log(this.state.todos)})
    }
    //Updating Assigned To for the specified task
    
    updateAssignedTo=(name,id)=>{
        this.setState({
            todos:this.state.todos.map(todo=>{
                if(todo.id===id){
                    return {
                        ...todo, assignedTo:name
                    }
                }else{
                    return todo
                }
            })
        },()=>{console.log(this.state.todos)})
    }
   
    
    render(){
        
        
        return(
            <div style={{margin:"20px"}}>

                {/* Rendering the TodoForm component */}
                <TodoForm onSubmit={this.addTodo} />

                 {/* conditionally rendering the table based on length of todos to display list of tasks */}
                 {this.state.todos.length>0?
                <table className="table table-secondary table-hover">
                 <thead>
                     <tr>
                        <th>Task ID</th>
                         <th>Task</th>
                         <th>Description</th>
                         <th>Assigned To</th>
                         <th>Due Date</th>
                         <th>Status</th>
                         <th>Update Status</th>
                         <th>Labels</th>
                         <th>Add Labels</th>
                         <th>Delete Task</th>
                     </tr>
                 </thead>
                 <tbody>
                {/* Passing down state values and functions to the Todo componet as props 
                    Functions:
                        1. Update Status of the task-->Update
                        2. Deleting the task--> delete
                        3. Adding and Updating labels-->updateLabel
                        4. Updating Assigned to-->updateAssignedTo*/}
                 {this.state.todos.map(todo=>(
                     <React.Fragment key={todo.id}>
                     <Todo id= {todo.id} text={todo.text} description={todo.description} assignedTo={todo.assignedTo} status={todo.status}
                         dueDate={todo.dueDate} labels={todo.labels} updateLabel={this.updateLabel}update={this.update} delete={this.delete}
                         updateAssignedTo={this.updateAssignedTo} />
                     </React.Fragment>
                     
                 ))}
                     
                 </tbody>
                 </table>:null}
                 
               
               
                
            </div>
        )
    }
}

export default TodoList