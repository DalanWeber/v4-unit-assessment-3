import React, {Component} from 'react'

class BookList extends Component {
    constructor(props){
      super(props)

      this.state = {

      }
      this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(){
        
    }

    render(){
        let mappedbooks = this.props.booksprop.map((element,index) => {
            return (
                <div className='list' key={index}>
                        <img onClick={(e) => this.props.addToShelfFN(element.title)} src={element.img} alt='SomeWords'/>
                        <p className="booktitle">{element.title} by {element.author}</p>
                </div>
            )
        })


        return(
           <div  className='booklist'>
               {mappedbooks}
           </div> 
        )
    }

}
  
export default BookList;