import * as React from "react";
import * as ReactDOM from "react-dom";
import {registerWidget} from './uxp';

import "./styles.scss";


class MeetingInvitesWidget extends React.Component<{},{}> {


    render() {
        return (<>
    
            <div className="meeting-invites-container">
                <div className="header">
                    <div className="icon"></div>
                    <div className="title"></div>
                </div>

                <div className="body">
                    <div className="meeting-invite-thumbnail">
                        <div className="image-container">
                            <img src="" alt=""/>
                        </div>

                        <div className="name"></div>

                        <div className="action-buttons">
                            <div className="btn accept">accept</div>
                            <div className="btn close"></div>
                        </div>
                    </div>
                </div>
            </div>

        </>);
    }

}

registerWidget({
    "name": "Meeting Invites",
    "widget": MeetingInvitesWidget,
    "configs": {
        "container": {
            "background": "transparent"
        }
    }
});