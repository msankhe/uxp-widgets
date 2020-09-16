import * as React from "react";
import { IContextProvider, } from './uxp';
import { DataList, FilterPanel, FormField, Label, SearchBox, Select, WidgetWrapper } from "uxp/components";

import './styles.scss';
import ServiceModal from "./ServiceModal";

type IPriority = 'high' | "low";
interface IProps {
    priority: IPriority
    expandedFilterPanel?: boolean,
    uxpContext?: IContextProvider,
    scrollStep?: number,
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

    // data set
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

    let [sortBy, setSortBy] = React.useState<string>("")
    let [search, setSearch] = React.useState<string>("")

    // refs
    const listContainerRef = React.useRef(null);
    const [showModal, setShowModal] = React.useState(false)

    // render
    return (<WidgetWrapper>
        <div className={`list-container`} ref={listContainerRef} >
            <div className="header uxp-drag-handler">

                <div className="title">
                    <div className="icon"></div>
                    <div className="text">Service Requests <span className={props.priority}> {props.priority} priority</span></div>
                </div>

                <div className="filter-container">
                    <FilterPanel
                        fillContainer={props.expandedFilterPanel ?listContainerRef : null}
                        enableClear={(sortBy && sortBy.length > 0) || (search && search.trim().length > 0)}
                        onClear={() => {
                            setSortBy("")
                            setSearch("")
                        }}
                    >
                        <FormField>
                            <SearchBox value={search} onChange={val => setSearch(val)} />
                        </FormField>
                        <FormField>
                            <Label>Sort By</Label>
                            <Select
                                selected={sortBy}
                                options={[
                                    { label: "Request Number", value: "req.no" },
                                    { label: "Zone", value: "zone" },
                                    { label: "Priority", value: "priority" }
                                ]}
                                placeholder="--Select an option"
                                onChange={val => { setSortBy(val) }}
                            />
                        </FormField>

                    </FilterPanel>
                </div>

            </div>

            <div className="body">

                <DataList
                    data={data}
                    pageSize={6}

                    renderItem={(item: IDataItem, key: number) => {
                        return (<div className={`list-thumbnail ${item.status.toLowerCase()}`}
                            key={key}
                            onClick={() => setShowModal(true)}
                        >
                            <div className="icon-placeholder">
                                <img src={item.icon} alt="" />
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
                    }}

                />

            </div>

        </div>
        <ServiceModal show={showModal} onClose={() => setShowModal(false)} data={data} />
    </WidgetWrapper>);
}

// default props
ServiceRequestWidget.defaultProps = {
    scrollStep: 5,
    expandedFilterPanel: false
}

export default ServiceRequestWidget;