import React, {Component} from 'react'
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Booklist from './components/BookList'
import Shelf from './components/Shelf'
import data from './data'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
  }

  addToShelf(title){
    this.setState({
      shelf: [...this.state.shelf, title]
    })
  }

  clearShelf(){
    this.setState({
      shelf: []
    })
  }

  filterBooks(input){
    let filteredBooks = this.state.books.filter((element,index) =>{ 
    return (element.title.includes(input) || element.author.includes(input))
    })
    this.setState({
      books: filteredBooks
    })
  }
  reset(){
    this.setState({
      books: data
    })
  }

  render(){
    return(
      <div>
        <Header />
        <SearchBar filter={this.filterBooks} resetFN={this.reset}/>
        <div className='thebottomrow'>
          <Booklist booksprop={this.state.books} addToShelfFN={this.addToShelf}/>
          <Shelf shelfprop={this.state.shelf} clearShelfFN={this.clearShelf}/>
        </div>
      </div>
    )
  }
}

export default App;
