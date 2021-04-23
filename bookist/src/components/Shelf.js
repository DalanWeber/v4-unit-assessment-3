import React, {Component} from 'react'

class Shelf extends Component {
    constructor(props){
      super(props)

      this.state = {

      }
      this.handleClear = this.handleClear.bind(this)
    }
    
    handleClear(){
        this.props.clearShelfFN()
    }
    
    render(){
        let theshelf = this.props.shelfprop.map((title,index) => {
            return <div key={index}>
                        <li>{title}</li>
                    </div>
        })
        
      return(
        <div className="shelf">
            <h1>Your Titles</h1>
            <button onClick={this.handleClear}>clear shelf</button>
            {theshelf}
        </div>
      )
    }
}
  
export default Shelf;