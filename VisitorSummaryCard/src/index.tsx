import * as React from "react";
import { registerWidget } from './uxp';

// styles
import "./styles.scss";

const VisitorSummaryCardWidget = () => {


    // return 
    return (<>
        <div className="visitor-summary-cards ">

            <div className="count">12</div>

            <div className="visitor-summary-card-content">


                <div className="header">
                    <div className="title">
                        Hello, <div className="large">Jane</div>
                    </div>
                    <div className="icon-placeholder">
                        <div className="icon"></div>
                    </div>
                </div>

                <div className="body">
                    <div className="sub">Your visitor is here</div>
                    <div className="main">Mark Anthony</div>
                    <div className="sub">for the 10.00 am meeting</div>
                </div>

                <div className="footer">

                    <div className="controls">
                        <div className="control-placeholder">
                            <div className="control prev"></div>
                        </div>
                        <div className="control-placeholder">
                            <div className="control next active" ></div>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button className="btn dismiss">dismiss</button>
                        <button className="btn acknowledge">acknowledge</button>
                    </div>

                </div>

            </div>

        </div>
    </>);
}


registerWidget({
    "name": "Visitor Summary Card",
    "widget": VisitorSummaryCardWidget,
    "configs": {
        "container": { "background": "transparent" },
        "layout": { w: 5, h: 9, minW: 5, minH: 9}
    }
});
