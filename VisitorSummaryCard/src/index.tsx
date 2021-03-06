import * as React from "react";
import { registerWidget, IContextProvider, } from './uxp';
import { WidgetWrapper } from "uxp/components";
import './styles.scss';
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface IVisitorSummaryCardProps {
    uxpContext?: IContextProvider
}


interface IVisitor {
    name: string,
    time: string,
    index?: number
}
const VisitorSummaryCardWidget: React.FunctionComponent<IVisitorSummaryCardProps> = (props) => {

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

    return (<WidgetWrapper className="visitor-summary-card">
        <TransitionGroup className="visitor-summary-card-container">

            <div className="count">{dataSet.length}</div>

            <CSSTransition
                key={visitor.index}
                timeout={300}
                classNames={"fade"}
            >
                <div className="visitor-summary-card">


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
        </TransitionGroup>
    </WidgetWrapper>)
};

registerWidget({
    id: "VisitorSummaryCard",
    name: "VisitorSummaryCard",
    widget: VisitorSummaryCardWidget,
    configs: {
        layout: {
            w: 9,
            h: 7,
            minW: 9,
            minH: 7
        }
    }
});