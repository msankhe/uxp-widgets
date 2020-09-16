import * as React from "react";
import { IContextProvider, } from './uxp';
import { DataList, FilterPanel, FormField, Label, SearchBox, Select, WidgetWrapper } from "uxp/components";

import './styles.scss';
import ServiceModal from "./ServiceModal";

interface IProps {
    uxpContext?: IContextProvider,
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
                    <div className="text">After hours a/c requests</div>
                </div>

                <div className="filter-container">
                    <FilterPanel
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
                            onClick={() => setShowModal(true)}
                            key={key}
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
                        </div>)
                    }}

                />

            </div>

        </div>
        <ServiceModal show={showModal} onClose={() => setShowModal(false)} data={data} />
    </WidgetWrapper>);
}

// default props
AfterHoursAcRequestWidget.defaultProps = {
}

export default AfterHoursAcRequestWidget;