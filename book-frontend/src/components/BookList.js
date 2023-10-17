import '../App.css'
import React from 'react';
import EditableBook from './EditableBook';

class BookList extends React.Component
{
    render()
    {
        console.log("booklist")
        const books=this.props.books.map((book)=>{
            return (<EditableBook
                key={book.id}
                id={book.id}
                title={book.title}
                description={book.description}
                author={book.author}
                onDeleteBook={this.props.onDeleteBook}
                onUpdateBook={this.props.onUpdateBook}
            />)
        });
        return(
            <div>
                {books}
            </div>
        )
    }
}

export default BookList;