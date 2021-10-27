import React, { Component } from "react";


//Defining a component to access the API and change the is_archived property for archiving calls
class Archive extends Component {


    //Making an API POST request in componentDidMount 
    componentDidMount() {
        try {
            const postURL = 'https://aircall-job.herokuapp.com/activities/:id';
            const postBody = { is_archived: true };
            const requestOptions = {
                method: 'POST',
                hearders: { 'Content-type': 'application/json' },
                body: JSON.stringify(postBody)
            };
            fetch(postURL, requestOptions)
                .then(response => response.json())
                .then((data => this.setState({ data })));
        }

        //Catching an error for scenarios where API fetch does not resolve
        catch (e) {
            alert('Error processing your request')
        }
    }

    //Rendering the component when the 'div' has been clicked on
    render() {
        return (
            <div className="archive" onClick={this.Archive}>
                <div>
                    <img className="Icon" src="/trash.png"></img>
                </div>
                <span> Archive All calls </span>
            </div >

        )
    }
}

export default Archive;



