import React from "react";
import "./Book.css";
class Book extends React.Component{
    render()
    {
        return(
            <div className="card">
                <div className="card-header d-flex">
                    
                    <span><strong>Title: </strong>{this.props.title}</span>
                    <button className="btn btn-info p-2" onClick={this.props.onEditClick}>
                        Edit

                    </button>
                    <button className="btn btn-danger p-2" onClick={this.props.onDeleteClick}>
                        Delete
                    </button>
                </div>
                <div className="card-body">
                    {this.props.description}
                </div>
                <div className="card-footer">
                    <p><strong>Author: </strong>  {this.props.author}</p>
                </div>
                </div>
        )
    }
}

export default Book;