import React from 'react';
import logo from './1.jpg';
import './App.css';


class App extends React.Component{

  constructor(props)
  {
    super(props)
    this.state={
      newItem:"",
      list:[]
    }
  }

  addItem(todoValue)
  {
    if(todoValue!="")
    {
      const newItem={
        id : Date.now(),
        value : todoValue,
        isDone:false
      };

      const list=[...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem:""
      });
    }
  }

  deleteItem(id){
    const list=[...this.state.list];
    const updatedlist=list.filter(item=>item.id!==id);
    this.setState({list:updatedlist})
  }

  updateInput(input)
  {
    this.setState({newItem:input})
  }

  render()
  {
    return(

     <div>

         <h1 className="app-title" >
           Welcome to TODO App
         </h1>
         
         <div className="container">
           
            <h2>Things to do </h2>
            <br/>
            <input
            type="text"
            className="input-text"
            placeholder="Enter new item"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
            />
             

            <button

            className="add-btn"
            onClick={()=>this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
            
            >   Add</button>

            <div className="list">
              
                {this.state.list.map(item=>{
                return(
                  <p key={item.id}  class="text">
                    <input
                   
                    type="checkbox"
                    name="idDone"
                    
                    onChange={()=>{}}
                    />
                    {item.value}

                    <button className="btn" 
                    onClick={()=>this.deleteItem(item.id)}
                    >
                    Delete
                    </button>
                  </p>
                );
                  
                 } )}
                
             

            </div>
         </div>
     </div>

    );
  }
}
export default App;