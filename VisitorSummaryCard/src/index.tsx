import * as React from "react";
import { registerWidget, IContextProvider } from './uxp';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// styles
import "./styles.scss";

interface IVisitor {
    name: string,
    time: string,
    index?: number
}

interface IProps {
    uxpContext?: IContextProvider
}

const VisitorSummaryCardWidget = (props: IProps) => {

    // data set
    const dataSet: IVisitor[] = [
        {
            name: "Mark Anthony",
            time: "10.00 am",
        },
        {
            name: "Kamal Perere",
            time: "01.00 pm",
        },
        {
            name: "John Doe",
            time: "10.00 am",
        },
        {
            name: "Chethiya Perera",
            time: "10.00 am",
        }
    ]

    // state
    const [visitor, setVisitor] = React.useState<IVisitor | null>({ ...dataSet[0], ...{ index: 0 } })


    // toggle prev & next
    const toggleNext = (current: number) => {
        let next = (current === (dataSet.length - 1)) ? 0 : (current + 1);
        console.log(current, " ", next, " ", current === (dataSet.length - 1), " ", dataSet.length)
        setVisitor({ ...dataSet[next], ...{ index: next } });
    }

    const togglePrev = (current: number) => {
        let prev = current == 0 ? (dataSet.length - 1) : (current - 1);
        setVisitor({ ...dataSet[prev], ...{ index: prev } });
    }

    // on dismiss 
    const onDismiss = (current: number) => {
        toggleNext(current);
    }

    // on acknowledge
    const onAcknowledge = (current: number) => {
        toggleNext(current);
    }


    // return 
    return (<TransitionGroup className="visitor-summary-card-container">

        <CSSTransition
            key={visitor.index}
            timeout={300}
            classNames={"fade"}
        >
            <div className="visitor-summary-card">

                <div className="count">{dataSet.length}</div>

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
                    <div className="main">{visitor.name}</div>
                    <div className="sub">for the {visitor.time} meeting</div>
                </div>

                <div className="footer">

                    <div className="controls">
                        <div className="control-placeholder" onClick={() => togglePrev(visitor.index)}>
                            <div className="control prev"></div>
                        </div>
                        <div className="control-placeholder" onClick={() => toggleNext(visitor.index)}>
                            <div className="control next active" ></div>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button className="btn dismiss" onClick={() => onDismiss(visitor.index)} >dismiss</button>
                        <button className="btn acknowledge" onClick={() => onAcknowledge(visitor.index)}>acknowledge</button>
                    </div>

                </div>

            </div>
        </CSSTransition>
        <div className="visitor-summary-card-placeholder"></div>
    </TransitionGroup>);
}


registerWidget({
    "name": "Visitor Summary Card",
    "widget": VisitorSummaryCardWidget,
    "configs": {
        "container": { "background": "transparent" },
        "layout": { w: 5, h: 9, minW: 5, minH: 9 }
    }
});
