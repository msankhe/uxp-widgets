import * as React from "react";
import { registerWidget, IContextProvider } from './uxp';
import { NotificationBlock, useToast, WidgetWrapper } from "uxp/components";
import './styles.scss';
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface IVisitorArrivalsProps {
    uxpContext?: IContextProvider,
}


interface IVisitor {
    _id: string,
    name: string,
    time: string,
    location: string,
    status: string,
    index?: number
}
const VisitorArrivalsWidget: React.FunctionComponent<IVisitorArrivalsProps> = (props) => {

    // props
    let { uxpContext } = props

    // state
    // const [visitor, setVisitor] = React.useState<IVisitor | null>({ ...dataSet[0], ...{ index: 0 } })
    const [visitor, setVisitor] = React.useState<IVisitor | null>(null)
    const [visitors, setVisitors] = React.useState<IVisitor[] | []>([])

    let [userName, setUserName] = React.useState<string>("user");

    let currentIndex = React.useRef<number>(0)

    // toast
    let Toast = useToast();

    // get visitor on load
    React.useEffect(() => {
        getVisitorArrivals();

        if (uxpContext.getUserDetails) {
            uxpContext.getUserDetails().then(details => {
                setUserName(details.name)
            });
        }
    }, [])

    // update visitor
    React.useEffect(() => {
        if (visitors.length > 0) {
            let _index = currentIndex.current;
            
            if(_index >= visitors.length) {
                _index = visitors.length -1
            }
            setVisitor({ ...visitors[_index], index: _index })
        }
        else {
            setVisitor(null)
        }
    }, [visitors])

    // get visitors
    const getVisitorArrivals = async () => {
        uxpContext.executeAction("VisitorArrival", "list_arrivals", {}, { json: true })
            .then(res => {
                console.log("response ", res)
                if (res.status && res.status == "success") {
                    setVisitors(res.data)
                }
            })
            .catch(e => {
                console.log("Exception ", e)

                Toast.error("Something went wrong!")
            })
    }

    // toggle prev & next
    const toggleNext = (current: number) => {
        let next = (current === (visitors.length - 1)) ? 0 : (current + 1);
        currentIndex.current = next
        setVisitor({ ...visitors[next], ...{ index: next } });
    }

    const togglePrev = (current: number) => {
        let prev = current == 0 ? (visitors.length - 1) : (current - 1);
        currentIndex.current = prev
        setVisitor({ ...visitors[prev], ...{ index: prev } });
    }

    // on dismiss 
    const onDismiss = (current: number) => {
        updateStatus("read", current)
    }

    // on acknowledge
    const onAcknowledge = (current: number) => {
        updateStatus("acknowledged", current)
    }

    const updateStatus = async (status: string, index: number) => {
        uxpContext.executeAction("VisitorArrival", "update_status", {
            _id: visitor._id,
            status: status
        }, { json: true })
            .then(res => {
                if (res.status && res.status == "success") {

                    let _visitors = visitors.filter((v: IVisitor) => v._id !== visitor._id)
                    setVisitors(_visitors)

                    if (status == "acknowledged") {
                        Toast.success("Acknowledged")
                    }
                    else {
                        Toast.success("Dismissed")
                    }
                }
            })
            .catch(e => {
                Toast.error("Something went wrong!")
            })
    }

    return (<WidgetWrapper className="visitor-summary-card">
        <TransitionGroup className="visitor-summary-card-container">

            <div className="count">{visitors.length}</div>

            <CSSTransition
                key={visitor?.index}
                timeout={300}
                classNames={"fade"}
            >
                <div className="visitor-summary-card">


                    <div className="header">
                        <div className="title">
                            Hello, <div className="large">{userName}</div>
                        </div>
                        <div className="icon-placeholder">
                            <div className="icon"></div>
                        </div>
                    </div>

                    <div className="body">
                        {
                            visitor ?
                                <>
                                    <div className="sub">Your visitor is here</div>
                                    <div className="main">{visitor?.name}</div>
                                    <div className="sub">for the {visitor?.time} meeting</div>
                                </>
                                :
                                <NotificationBlock message="No visitors today" />
                        }

                    </div>

                    <div className="footer">
                        {
                            visitor &&
                            <>
                                <div className="controls">
                                    <div className="control-placeholder" onClick={() => togglePrev(visitor?.index)}>
                                        <div className="control prev"></div>
                                    </div>
                                    <div className="control-placeholder" onClick={() => toggleNext(visitor?.index)}>
                                        <div className="control next active" ></div>
                                    </div>
                                </div>

                                <div className="action-buttons">
                                    <button className="btn dismiss" onClick={() => onDismiss(visitor?.index)} >dismiss</button>
                                    <button className="btn acknowledge" onClick={() => onAcknowledge(visitor?.index)}>acknowledge</button>
                                </div>
                            </>
                        }


                    </div>

                </div>
            </CSSTransition>
            <div className="visitor-summary-card-placeholder"></div>
        </TransitionGroup>
    </WidgetWrapper>)
};

registerWidget({
    id: "VisitorArrivals",
    name: "VisitorArrivals",
    description: "",
    widget: VisitorArrivalsWidget,
    configs: {
        layout: {
            w: 10,
            h: 7,
            minW: 10,
            minH: 7
        }
    }
});