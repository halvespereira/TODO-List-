import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      userInput: '',
      currentState: [],
      itemChecked: false,
    }
  }
  onChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  addItem () {
    const NewItem = this.state.userInput.split(',');
    this.setState({
      currentState: [...this.state.currentState, NewItem[0]],
      userInput: '',
    });
  }
  clickItem (e) {
    this.setState({
      itemChecked: !this.state.itemChecked,
    })
    if (!this.state.itemChecked) {
      e.target.parentElement.className='crossedOff'
    } else{
      e.target.parentElement.className="notCrossedOff"
    }
  }

  deleteItem () {
    this.setState({
      userInput: '',
      currentState: [],
      itemChecked: false,
    })
  }


  render () {
    
    const item = this.state.currentState.map((i, idx) => 
      <label className='listLabel' key={idx} htmlFor={idx}>
        <input id={idx} type="checkbox" onChange={this.clickItem.bind(this)}>
        </input><span className="checkmark"></span>{i}
      </label>
    )
    return (
      <div className="App">
        <h1>TO-DO LIST</h1>
        <NewItem addItem={this.addItem.bind(this)}
          onFieldChange={this.onChange.bind(this)}
          inputValue={this.state.userInput}
          deleteItem={this.deleteItem.bind(this)}
        />
        <div className="listDiv">
          {item}<hr />
        </div>
      </div>
    );
  }
  
}

 const NewItem = (props) => (
    <div id='input-button-outerDiv'>
      <div>
        <input id = 'itemInput' type="text" placeholder="Type an item here..." onChange={props.onFieldChange} value={props.inputValue}></input>
      </div>
      <button type="button" id='addButton' onClick={props.addItem}>Add Item <i class="fas fa-plus"></i></button>
      <button type="button" id='deleteButton' onClick={props.deleteItem}>Delete items <i class="fa fa-trash-o"></i> </button>
    </div>
 )



export default App;


