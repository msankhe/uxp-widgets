import * as React from "react";
import { registerWidget, IContextProvider, } from './uxp';

import './styles.scss';
import { WidgetWrapper } from "uxp/components";

interface IMeetingInvitesProps {
    uxpContext?: IContextProvider
}

const MeetingInvitesWidget: React.FunctionComponent<IMeetingInvitesProps> = (props) => {

    let image= "data:image/png;base64,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";

    return (<WidgetWrapper className="meeting-invites">
        <div className={"meeting-invites-container"}>

            <div className="header uxp-drag-handler">
                <div className="icon"></div>
                <div className="text">  Meeting Invites </div>
            </div>

            <div className="body">

                <div className="meeting-invite-tile">
                    <img src={image} alt="invitee image" className="image" />

                    <div className="name">Jimmy Mathew</div>

                    <div className="action-buttons">
                        <div className="btn accept">accept</div>
                        <div className="btn close">
                            <div className="icon"></div>
                        </div>
                    </div>
                </div>

                <div className="meeting-invite-tile">
                    <img src={image} alt="invitee image" className="image" />

                    <div className="name">Jimmy Mathew</div>

                    <div className="action-buttons">
                        <div className="btn accept">accept</div>
                        <div className="btn close">
                            <div className="icon"></div>
                        </div>
                    </div>
                </div>

                <div className="meeting-invite-tile">
                    <img src={image} alt="invitee image" className="image" />

                    <div className="name">Jimmy Mathew</div>

                    <div className="action-buttons">
                        <div className="btn accept">accept</div>
                        <div className="btn close">
                            <div className="icon"></div>
                        </div>
                    </div>
                </div>

                <div className="meeting-invite-tile">
                    <img src={image} alt="invitee image" className="image" />

                    <div className="name">Jimmy Mathew</div>

                    <div className="action-buttons">
                        <div className="btn accept">accept</div>
                        <div className="btn close">
                            <div className="icon"></div>
                        </div>
                    </div>
                </div>

                <div className="meeting-invite-tile">
                    <img src={image} alt="invitee image" className="image" />

                    <div className="name">Jimmy Mathew</div>

                    <div className="action-buttons">
                        <div className="btn accept">accept</div>
                        <div className="btn close">
                            <div className="icon"></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </WidgetWrapper>)
};

registerWidget({
    id: "MeetingInvites",
    name: "MeetingInvites",
    widget: MeetingInvitesWidget,
    configs: {
        layout: {
            w: 15,
            h: 7,
            minW: 15,
            minH: 7
        }
    }
    
});