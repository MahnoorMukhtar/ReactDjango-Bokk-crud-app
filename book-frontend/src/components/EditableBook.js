import React from "react";
import Book from "./Book";
import BookForm from "./BookForm";

class EditableBook extends React.Component{
    state={
        inEditMode: false
    }
    handleSaveBook=(book)=>
    {
        this.leaveEditMode()
        book.id=this.props.id
        this.props.onUpdateBook(book)
    }
    leaveEditMode=()=>
    {
        this.setState({inEditMode: false})
    }
    enterEditMode=()=>
    {
        this.setState({inEditMode: true})
    }
    handleDelete=()=>
    {
        this.props.onDeleteBook(this.props.id)
    }
    render()
    {
        const component=()=>{
            if(this.state.inEditMode)
            {
                return(
                    <BookForm
                        key={this.props.id}
                        id={this.props.id}
                        title={this.props.title}
                        description={this.props.description}
                        author={this.props.author}
                        onCancelClick={this.leaveEditMode}
                        onFormSubmit={this.handleSaveBook}
                        />
                )
            }
            else {return (
                <Book
                title={this.props.title}
                description={this.props.description}
                author={this.props.author}
                onEditClick={this.enterEditMode}
                onDeleteClick={this.handleDelete}
                />
            )
        }}
        return(
            <div className="mb-4 p-5" style={{boxShadow: '0 0 10px #ccc'}}>
                {component()}
            </div>
        )
       
         
    }
}

export default EditableBook;