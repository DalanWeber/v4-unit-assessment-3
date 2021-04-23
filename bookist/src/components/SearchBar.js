import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props){
      super(props)

      this.state = {
        inputValue: ''
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleClear = this.handleClear.bind(this)
    }
    
    handleChange(value){
        this.setState({
            inputValue: value
        })
    }
    
    handleClick(){
        this.props.filter(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }

    handleClear(){
        this.setState({
            inputValue: ''
        })
        this.props.resetFN()
    }
    
    render(){
      return(
        <div className="searchbar">
            <input value={this.state.inputValue} onChange={(e)=>this.handleChange(e.target.value)}/>
            <button onClick={this.handleClick}>Search</button>
            <button onClick={this.handleClear}>Clear</button>
        </div>
      )
    }
}
  
export default SearchBar;