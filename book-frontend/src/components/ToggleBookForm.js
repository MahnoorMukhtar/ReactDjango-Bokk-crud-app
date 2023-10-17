import React from "react";
import BookForm from "./BookForm";
import { FaPlus } from "react-icons/fa";
import "./Toggle.css"

class ToggleBookForm extends React.Component
{
    state={
        inCreateMode: false
    }

    handleCreateClick=()=>
    {
        this.setState({inCreateMode: true})
    }

    leaveCreateMode=()=>
    {
        this.setState({inCreateMode: false})
    }
    handleSubmit=(book)=>
    {
        console.log("toggleform")
        this.leaveCreateMode()
        this.props.onBookCreate(book)
    }
    render()
    {
        if(this.state.inCreateMode)
        {
            return(
                <BookForm 
                onCancelClick={this.leaveCreateMode}
                onFormSubmit={this.handleSubmit}
                />
            )
        }

        return(
            <button type="button" onClick={this.handleCreateClick}>
                <FaPlus/>
            </button>
        )
    }
}
export default ToggleBookForm;