import './App.css';
import React from "react"
import BookList from './components/BookList';
import ToggleBookForm from './components/ToggleBookForm';

class App extends React.Component{

  state={
    books: []
  }
  componentDidMount(){
    console.log("fetching");
    fetch("http://127.0.0.1:8000/api/books/")
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({books: data})
    })
  }

  getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

  createNewBook=(book)=>{

    var csrstoken= this.getCookie('csrftoken')
    console.log("creating new book")
    fetch("http://127.0.0.1:8000/api/books/"  , {
        method: "POST", 
        headers : {
          "Content-Type": "application/json",
          "X-CSRFToken" :csrstoken,
        },
        body: JSON.stringify(book)

    })
    .then(resp=>resp.json())
    .then(book=>{
      this.setState({
        books: this.state.books.concat([book])
      })
    })
  }

  


  updateBook=(newBook)=>{
    var csrstoken= this.getCookie('csrftoken')

      fetch(`http://127.0.0.1:8000/api/books/${newBook.id}/`,{
        method:"PUT",
          headers:
          {
            "Content-Type": "application/json",
            "X-CSRFToken" :csrstoken,
        },
        body:JSON.stringify(newBook),
      })
      .then(resp=>resp.json())
      .then(newBook=>{
        const newbook=this.state.books.map((book)=>{
          if(book.id===newBook.id){
            return Object.assign({}, newBook)
          }
          else {
            return book
          }
        })

        this.setState({books: newbook})
      })
  }

  deleteBook=(bookId)=>{
    var csrftoken= this.getCookie('csrftoken')
    fetch(`http://127.0.0.1:8000/api/books/${bookId}/`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken
      },
    })
    .then(()=>{
      this.setState({books: this.state.books.filter(book => book.id !== bookId)})
    })
  }

render()
{
  return(
    <main className='d-flex justify-content-center my-4'>
      <div className='col-7'>
        <BookList
              books={this.state.books}
              onDeleteBook={this.deleteBook}
              onUpdateBook={this.updateBook}
        />
        <ToggleBookForm
              onBookCreate={this.createNewBook}
          />
      </div>

    </main>
  )
}


}

export default App;

