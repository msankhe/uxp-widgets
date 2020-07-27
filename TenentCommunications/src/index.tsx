import * as React from "react";
import { IContextProvider, registerLink, registerWidget, } from './uxp';
import { LinkWidgetContainer, FilterPanel } from "uxp/components";
import './styles.scss';

interface IProps {
    uxpContext?: IContextProvider,
    onClose?: () => void,
    show?: boolean
}

interface ICommunicationItem {
    notification: string,
    tenant: string,
    section: string,
    location: string,
    startDate: string,
    endDate: string,
    status: string,
    type: string,
    notificationStatus: string
}


/**
 * render modal on click
 */
const TenantCommunication = (props: React.PropsWithChildren<IProps>) => {
    // state
    let [show, setShow] = React.useState(props.show);
    let [searchText, setSearchText] = React.useState("");

    let Items: ICommunicationItem[] = [
        {
            notification: "Notification # 21 Ceiling work conducted until 10.00 AM access ill be limited",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'popup',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 19 COVID-19 precautions training at lobby, east wing ",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 20 Rent due by 03/08/2020 ",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'banner',
            notificationStatus: "un-published"
        },
        {
            notification: "Notification # 18 Free coffee samples",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 21 Ceiling work conducted until 10.00 AM access ill be limited",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'popup',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 19 COVID-19 precautions training at lobby, east wing ",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 20 Rent due by 03/08/2020 ",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'banner',
            notificationStatus: "un-published"
        },
        {
            notification: "Notification # 18 Free coffee samples",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 21 Ceiling work conducted until 10.00 AM access ill be limited",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'popup',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 19 COVID-19 precautions training at lobby, east wing ",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 20 Rent due by 03/08/2020 ",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'banner',
            notificationStatus: "un-published"
        },
        {
            notification: "Notification # 18 Free coffee samples",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 21 Ceiling work conducted until 10.00 AM access ill be limited",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'popup',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 19 COVID-19 precautions training at lobby, east wing ",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 20 Rent due by 03/08/2020 ",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'banner',
            notificationStatus: "un-published"
        },
        {
            notification: "Notification # 18 Free coffee samples",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 21 Ceiling work conducted until 10.00 AM access ill be limited",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'popup',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 19 COVID-19 precautions training at lobby, east wing ",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 20 Rent due by 03/08/2020 ",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'banner',
            notificationStatus: "un-published"
        },
        {
            notification: "Notification # 18 Free coffee samples",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
    ]

    // update state
    React.useEffect(() => {
        setShow(props.show)
    }, [props])


    // on open callback
    const onOpen = () => { }

    // on close callback
    const onClose = () => {
        setShow(false);

        if (typeof props.onClose == "function") {
            props.onClose();
        }
    }

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    // title
    let title = <div className="tenant-header">
        <div className="icon"></div>
        <div className="text">Tenant Communication</div>
    </div>;

    // toolbar content
    let toolbarContent = <div className="tenant-toolbar">
        <div className="action-buttons">
            <div className="action-button create-notification">
                <div className="icon"></div>
                <div className="text">Create Notification</div>
            </div>

            <div className="action-button create-circular">
                <div className="icon"></div>
                <div className="text">Create Circular</div>
            </div>

            <div className="action-button your-mix">
                <div className="icon"></div>
            </div>

            <div className="action-button your-capital-letter">
                <div className="icon"></div>
            </div>
        </div>


        <div className="filters">
            <div className="filter showing">
                showing
                <div className="toggle">
                    <div className="icon"></div> Latest
                </div>
            </div>

            <div className={`filter search ${searchText.length > 0 ? "active" : ""}`}>
                <input type="text" placeholder="SEARCH" className="" value={searchText}
                    onChange={(e) => handleSearchInputChange(e)}
                />

                <div className="search-icon" onClick={() => setSearchText("")}></div>
            </div>

            <FilterPanel>

            </FilterPanel>
        </div>


    </div>;


    const renderItem = (item: ICommunicationItem, key: number) => {
        return <div className={`notification-item ${item.type}`}>
            <div className={`icon-container`}>
                <div className="container-bg">
                <div className="icon-bg">
                    <div className="icon"></div>
                </div>
                </div>
            </div>
            <div className="notification-container">
                <div className="notification">{item.notification}</div> </div>
            <div className="tenant">
                <div className="name">{item.tenant}</div>
                <div className="section">{item.section}</div>
            </div>
            <div className="location">
                <div className="label">Location</div>
                <div className="value">{item.location}</div>
            </div>
            <div className="sd">
                <div className="label"> {typeof item.endDate != "undefined" && item.endDate.trim().length > 0 && "Start "}  Date</div>
                <div className="value">{item.startDate}</div>
            </div>

            <div className="ed">
                {typeof item.endDate != "undefined" && item.endDate.trim().length > 0 &&
                    <>
                        <div className="label"> End  Date</div>
                        <div className="value">{item.endDate}</div>
                    </>
                }

            </div>

            <div className={`status-container ${item.status.toLowerCase()}`}>
            <div className="status">{item.status}</div>
            </div>

            <div className="type-container">
                <div className="type">{item.type}</div>
            </div>

            <div className={`toggle-container ${item.notificationStatus.toLowerCase()}`}>
                <div className="toggle"></div>
            </div>

            <div className="notification-status">
                {item.notificationStatus}
            </div>

        </div>
    }

    // render
    return (<LinkWidgetContainer
        show={show}
        onOpen={onOpen}
        onClose={onClose}
        toolbarContent={toolbarContent}
        title={title}
    >

        {
            Items.map((item: ICommunicationItem, key: number) => renderItem(item, key))
        }

    </LinkWidgetContainer>)
}

TenantCommunication.defaultProps = {
    show: true
}

/**
 * add sidebar links as well
 */
registerLink({
    "id": "TenantCommunications",
    "label": "Communication",
    "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNy42MjYiIGhlaWdodD0iMjcuMTU3IiB2aWV3Qm94PSIwIDAgMjcuNjI2IDI3LjE1NyI+CiAgPGcgaWQ9Ikdyb3VwXzIyNzAiIGRhdGEtbmFtZT0iR3JvdXAgMjI3MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYzNi45MSAtMzgpIj4KICAgIDxnIGlkPSJJY29uX2lvbmljLW1kLW1lZ2FwaG9uZSIgZGF0YS1uYW1lPSJJY29uIGlvbmljLW1kLW1lZ2FwaG9uZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjM2LjkxIDM4KSIgb3BhY2l0eT0iMC41MzgiPgogICAgICA8cGF0aCBpZD0iUGF0aF80NTAiIGRhdGEtbmFtZT0iUGF0aCA0NTAiIGQ9Ik0xLjM0MSwwLDAsMS4zMzVBNC43Myw0LjczLDAsMCwxLDEuMzg3LDQuNjc3LDQuNzMsNC43MywwLDAsMSwwLDguMDJMMS4zNCw5LjM2QTYuNjA2LDYuNjA2LDAsMCwwLDMuMjc5LDQuNjgzLDYuNjIsNi42MiwwLDAsMCwxLjM0MSwwWiIgdHJhbnNmb3JtPSJtYXRyaXgoMC42OTUsIC0wLjcxOSwgMC43MTksIDAuNjk1LCAxNC4xNjYsIDYuODQxKSIgZmlsbD0iIzQyNDI0MiIvPgogICAgICA8cGF0aCBpZD0iUGF0aF80NTEiIGRhdGEtbmFtZT0iUGF0aCA0NTEiIGQ9Ik0xLjMxNywwLC41OTIuNzI2LDAsMS4zMTdBOC4zODIsOC4zODIsMCwwLDEsMi40NTUsNy4yNTQsOC4zNzgsOC4zNzgsMCwwLDEsMCwxMy4xOWwxLjMxNywxLjMxN0ExMC4yNzIsMTAuMjcyLDAsMCwwLDQuMzIzLDcuMjU0LDEwLjI0OCwxMC4yNDgsMCwwLDAsMS4zMTcsMFoiIHRyYW5zZm9ybT0ibWF0cml4KDAuNjk1LCAtMC43MTksIDAuNzE5LCAwLjY5NSwgMTQuMTg3LCAzLjExKSIgZmlsbD0iIzQyNDI0MiIvPgogICAgICA8cGF0aCBpZD0iSWNvbl9mZWF0aGVyLW1lc3NhZ2Utc3F1YXJlIiBkYXRhLW5hbWU9Ikljb24gZmVhdGhlci1tZXNzYWdlLXNxdWFyZSIgZD0iTTIxLjI1NSwxNS42N2ExLjg2MiwxLjg2MiwwLDAsMS0xLjg2MiwxLjg2Mkg4LjIyM0w0LjUsMjEuMjU1VjYuMzYyQTEuODYyLDEuODYyLDAsMCwxLDYuMzYyLDQuNUgxOS4zOTRhMS44NjIsMS44NjIsMCwwLDEsMS44NjIsMS44NjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC41IDUuOTAyKSIgZmlsbD0iIzQyNDI0MiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==",
    "component": TenantCommunication
});
