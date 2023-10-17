import React from "react";
import "./bookform.css"

class BookForm extends React.Component{
    state={
        title: this.props.title || '',
        author: this.props.author || '',
        description: this.props.description || ''
    }
    handleSubmit=(e)=>
    {
        e.preventDefault()
        console.log("bookform")
        this.props.onFormSubmit({...this.state})
    }
    handleTitleUpdate=(e)=>
    {
        this.setState({title: e.target.value})
    }

    handleAuthorUpdate=(e)=>
    {
        this.setState({author: e.target.value})
    }

    handleDescriptionUpdate=(e)=>
    {
        this.setState({description: e.target.value})
    }

    render()
    {
        const buttonText=this.props.id ? 'Update Book' : 'Create Book'
        return(
            <div className="card p-4">
                <form className="card-body" onSubmit={this.handleSubmit}>
                 <div className="form-group">
                    <label>Title</label>
                    <input type="text" value={this.state.title} onChange={this.handleTitleUpdate} placeholder="Enter Book Title" />
                </div>
                <div className="form-group ">
                    <label>Author</label>
                    <input type="text" value={this.state.author} onChange={this.handleAuthorUpdate} placeholder="Author's name" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea rows="4" type="text" value={this.state.description} onChange={this.handleDescriptionUpdate} placeholder="Enter description"></textarea>
                </div>
                <div className="form-group d-flex">
                    <button type="submit" className="btn btn-primary">
                        {buttonText}
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={this.props.onCancelClick}>
                        Cancel
                    </button>
                </div>
            </form>
            </div>
          
           
        )
    }
}
export default BookForm;