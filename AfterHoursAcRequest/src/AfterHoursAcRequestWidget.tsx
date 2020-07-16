import * as React from "react";
import { IContextProvider, } from './uxp';
import { FilterPanel } from "uxp/components";

import './styles.scss';
import ServiceModal from "./ServiceModal";

interface IProps {
    expandedFilterPanel?: boolean,
    uxpContext?: IContextProvider,
    scrollStep?: number,
}

interface IDataItem {
    request: string,
    user: string,
    section: string
    status: string,
    date: string,
}

const AfterHoursAcRequestWidget = (props: React.PropsWithChildren<IProps>) => {

    // data set

    const data: IDataItem[] = [
        {

            request: "AC Extension request #81",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #80",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #80",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #79",
            user: "Johnson & Johnson",
            section: "Facility one",
            status: "rejected",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #81",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #81",
            user: "Johnson & Johnson",
            section: "Facility 12",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #81",
            user: "Johnson & Johnson ",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #80",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #79",
            user: "Johnson & Johnson",
            section: "Facility one",
            status: "rejected",
            date: "23/0702020"
        },
        {
            request: "AC Extension request#81",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #81",
            user: "Johnson & Johnson ",
            section: "Facility 12",
            status: "rejected",
            date: "23/0702020"
        },
    ]

    // refs
    const listContainerRef = React.useRef(null);
    const listRef = React.useRef(null);
    const listItemsRef = React.useRef([]);

    // state
    const [currentKey, setCurrentKey] = React.useState<number | 0>(0);
    const [showFooter, setShowFooter] = React.useState(false);
    const [showScrollUp, setShowScrollUp] = React.useState(false);
    const [showScrollDown, setShowScrollDown] = React.useState(false);

    const [showModal, setShowModal] = React.useState(false)

    // toggle scroll buttons
    React.useEffect(() => {
        toggleFooter();
    }, [currentKey])

    React.useEffect(() => {
        console.log("show modal")
        console.log(showModal)
    }, [showModal])

    // get invisible list item count & is last item is visible
    const checkVisibility = (): [number, boolean] => {
        let listDetails = listRef.current.getBoundingClientRect();
        let items = document.querySelectorAll(".list-thumbnail");
        let itemsArr = [].slice.call(items);

        let count = 0;
        let lastVisible = false;

        itemsArr.map((item: HTMLElement, key: number) => {
            let iDet = item.getBoundingClientRect();
            if ((iDet.top >= listDetails.top + listDetails.height) || (iDet.top < listDetails.top)) {
                count++;
            }
            else {
                if (key == (itemsArr.length - 1)) {
                    lastVisible = true;
                }
            }
        })

        return [count, lastVisible];
    }

    // toggle scroll buttons
    const toggleFooter = () => {
        // 
        let showFooter = false;
        let showUp = false;
        let showDown = false;

        let total = data.length;
        let [invisible, isLastVisible] = checkVisibility();

        if (invisible > 0) {
            showFooter = true;
            showDown = true;
        }

        if (isLastVisible) showDown = false;

        if (currentKey > 0) {
            showUp = true;
        }

        setShowFooter(showFooter);
        setShowScrollUp(showUp);
        setShowScrollDown(showDown)
    }

    // scroll to list item
    const scrollItemToView = (key: number) => {
        let nextItemDetails = listItemsRef.current[key].getBoundingClientRect();
        let scrollTop = nextItemDetails.height * key; 

        listRef.current.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
    }

    // handle click on scroll button
    const onClickScrollHandler = (direction: string) => {
        // get key
        let curKey = currentKey;

        if (direction == "up") {
            curKey = curKey - props.scrollStep;
            if (curKey < 0) curKey = 0;
        }
        else {
            curKey = curKey + props.scrollStep;
            if (curKey > data.length) curKey = (data.length - 1);
        }

        setCurrentKey(curKey);
        scrollItemToView(curKey)
    }

    // on scroll list container
    const onScrollList = (e: React.UIEvent<HTMLElement | Event>) => {
        let listContainerDetails = listContainerRef.current.getBoundingClientRect();

        data.map((item: IDataItem, key: number) => {
            let element = listItemsRef.current[key];
            let boundDetails = element.getBoundingClientRect();

            if (boundDetails.top >= listContainerDetails.top + 60 && boundDetails.top <= listContainerDetails.top + 120) {
                setCurrentKey(key)
            }
        })
    }


    let filterPanelProps: any = {
        onOpen: () => { },
        onClose: () => { }
    }

    if (props.expandedFilterPanel) {
        filterPanelProps.fillContainer = listContainerRef
    }

    // render
    return (<>
        <div className={`list-container ${showFooter && " has-footer"} ${(showScrollDown && showScrollUp) ? " full" : " half"}`}
            ref={listContainerRef}
            onScroll={onScrollList}
        >
            <div className="header">

                <div className="title">
                    <div className="icon"></div>
                    <div className="text">After hours a/c requests</div>
                </div>

                <div className="filter-container">
                    <FilterPanel {...filterPanelProps} >

                        <div className="filter-item">
                            <label htmlFor="">Filter By</label>
                            <select name="" id="">
                                <option value=""> Select a Filter</option>
                            </select>
                        </div>

                        <div className="filter-item">
                            <label htmlFor="">Sort By</label>
                            <select name="" id="">
                                <option value=""> Select a Option</option>
                            </select>
                        </div>

                    </FilterPanel>
                </div>

            </div>

            <div className="body"
                ref={listRef}
            >

                {
                    data.map((item: IDataItem, key: number) => {
                        return (<div className={`list-thumbnail ${item.status.toLowerCase()}`}
                            ref={(el: any) => (listItemsRef.current[key] = el)}
                            onClick={() => setShowModal(true)}
                        >
                            <div className="status-indicator">
                                <div></div>
                            </div>
                            <div className="request-details">
                                <div className="request"> {item.request} </div>
                                <div className="description">{item.user} </div>
                                <div className="section"> {item.section} </div>
                            </div>
                            <div className="status">
                                <div className="label">{item.status}</div>
                                <div className="date">{item.date}</div>
                            </div>
                        </div>);
                    })
                }


            </div>

            {
                showFooter &&
                <div className="footer">
                    {
                        showScrollUp &&
                        <div className="scroll-btn scroll-up" onClick={() => onClickScrollHandler("up")}>
                            <div className="icon-container">
                                <div className="icon"></div>
                            </div>
                        </div>
                    }

                    {
                        showScrollDown &&
                        <div className="scroll-btn scroll-down" onClick={() => onClickScrollHandler("down")}>
                            <div className="icon-container">
                                <div className="icon"></div>
                            </div>
                        </div>
                    }

                </div>
            }

        </div>

        <ServiceModal show={showModal} onClose={() => setShowModal(false)} data={data} />
    </>);
}

// default props
AfterHoursAcRequestWidget.defaultProps = {
    scrollStep: 5,
    expandedFilterPanel: false
}

export default AfterHoursAcRequestWidget;