import * as React from "react";
import { registerWidget, IContextProvider, } from './uxp';
import { FilterPanel } from "uxp/components";

import './styles.scss';

interface IProps {
    uxpContext?: IContextProvider
}

interface IDataItem {
    icon: string,
    request: string,
    description: string,
    sections: string[],
    status: string,
    date: string,
}

const ServiceRequestWidget = (props: React.PropsWithChildren<IProps>) => {

    let icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS41NzciIGhlaWdodD0iMTUuNTc3IiB2aWV3Qm94PSIwIDAgMTUuNTc3IDE1LjU3NyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzcwNzA3MDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNy4wMTksM0g0LjU1OGExLjU1NiwxLjU1NiwwLDAsMC0xLjU1LDEuNTU4TDMsMTguNTc3bDMuMTE1LTMuMTE1aDEwLjlBMS41NjIsMS41NjIsMCwwLDAsMTguNTc3LDEzLjlWNC41NThBMS41NjIsMS41NjIsMCwwLDAsMTcuMDE5LDNabS01LjQ1Miw5LjM0NkgxMC4wMDlWMTAuNzg4aDEuNTU4Wm0wLTMuMTE1SDEwLjAwOVY2LjExNWgxLjU1OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSIvPjwvc3ZnPg==";
    const data: IDataItem[] = [
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "water Leak in ",
            sections: ["Zone 3"],
            status: "pending",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #80",
            description: "Parkin damage ",
            sections: ["Parking 1", "A1"],
            status: "approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #79",
            description: "Lights not working at ",
            sections: ["Facility one"],
            status: "overdue",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "AC not working at ",
            sections: ["Zone 3"],
            status: "Approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "Smoke in AC Vent ",
            sections: ["Facility 12"],
            status: "assigned",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "water Leak in ",
            sections: ["Zone 3"],
            status: "pending",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #80",
            description: "Parkin damage ",
            sections: ["Parking 1", "A1"],
            status: "approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #79",
            description: "Lights not working at ",
            sections: ["Facility one"],
            status: "overdue",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "AC not working at ",
            sections: ["Zone 3"],
            status: "Approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "Smoke in AC Vent ",
            sections: ["Facility 12"],
            status: "assigned",
            date: "23/0702020"
        },
    ]

    const listRef = React.useRef(null);

    return (<>
        <div className="list-container has-footer full" ref={listRef}>
            <div className="header">

                <div className="title">
                    <div className="icon"></div>
                    <div className="text">Service Requests <span>high priority</span></div>
                </div>

                <div className="filter-container">
                    <FilterPanel onOpen={() => { }} onClose={() => { }} >

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

            <div className="body">

                {
                    data.map((item: IDataItem) => {
                        return (<div className={`list-thumbnail ${item.status.toLowerCase()}`}>
                            <div className="icon-placeholder">
                                <img src={item.icon} alt=""/>
                            </div>
                            <div className="request-details">
                                <div className="request"> {item.request} </div>
                                <div className="description"> {item.description} </div>
                                <div className="sections">
                                    {
                                        item.sections?.map((section: string) => {
                                        return (<div className="section">{section}</div>)
                                        })
                                    }
                                </div>
                            </div>
                            <div className="status">
                                <div className="label">{item.status}</div>
                                <div className="date">{item.date}</div>
                            </div>
                        </div>);
                    })
                }
                

            </div>

            <div className="footer">
                <div className="scroll-btn scroll-up">
                    <div className="icon-container">
                        <div className="icon"></div>
                    </div>
                </div>
                <div className="scroll-btn scroll-down">
                    <div className="icon-container">
                        <div className="icon"></div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

registerWidget({
    "guid": "64ee6224-07c3-40c3-9377-1194be887a7a",
    "name": "Service Request",
    "widget": ServiceRequestWidget,
    "configs": {
        "container": {
            "background": "transparent"
        },
        "layout": { w: 9, h: 12, minW: 9, minH: 9 }
    }
});