import regeneratorRuntime from "regenerator-runtime";
import React from "react";
import Archive from './Archived.js';
import './css/app.css';


//Defining a component for activity feed which will have information about all the unarchived calls
class ActivityFeed extends React.Component {


    //The default key-value pair of null will later be filled with requested API information
    constructor(props) {
        super(props);
        this.state = { callLog: null }
    }

    //Making an API request in componentDidMount and strutrucing the data
    async componentDidMount() {
        const url = "https://aircall-job.herokuapp.com/activities";
        try {
            const response = await fetch(url);
            const data = await response.json();
            const isarchived = data.filter(d => d.is_archived == false);

            //This variable will take in the unarchived calls and map through it to process data in a structured manner
            var calllog = isarchived.map(d =>
                <div id="section">
                    <span className="date"> ........................................{d.created_at.slice(0, 10)}......................................... </span>

                    <div id="calls" className="callLog" >
                        {d.direction == 'outbound' && <img className="Icon" src={"/pic.png"} />}
                        {d.direction == 'inbound' && <img className="Icon" src={"/pic1.png"} />}

                        <div className="Names">

                            <div className="caller">
                                {d.to != null && d.call_type == "missed" && <div className="missedCall"> {d.to} </div>}
                                {d.to != null && d.call_type == "answered" && <div className="answeredCall"> {d.to} </div>}
                                {d.to == null && <div>Unknown</div>}
                            </div>

                            <div className="call">
                                tried to call on {d.from}
                            </div>

                        </div>

                        <span className="time">{d.created_at.slice(11, 16)} </span>
                    </div>
                </div>);

            //Assigning the above structured data to the state object's 'callLog' key
            this.setState({ callLog: calllog })
        }

        //Catching an error for scenarios where API fetch does not resolve
        catch (e) {
            alert('Error while processing data, please try again later or assess your request')
        }
    }


    //Rendering the 'Archive' component that has been imported and also rendering callLog from the state object
    render() {
        return (
            <div >
                <Archive />
                <div className="callSection">{this.state.callLog}</div>

            </div>
        );
    }
}

export default ActivityFeed;