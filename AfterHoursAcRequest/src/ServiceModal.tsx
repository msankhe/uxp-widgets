import * as React from 'react';
import { Modal } from 'uxp/components';

interface IDataItem {
    request: string,
    user: string,
    section: string,
    status: string,
    date: string,
}

interface IProps {
    show: boolean,
    onClose: () => void,
    data: IDataItem[]
}

const ServiceModal = (props: React.PropsWithChildren<IProps>) => {

    let [show, setShow] = React.useState(props.show);
    let [dataSet, setDataSet] = React.useState<IDataItem[]>([])
    let [filter, setFilter] = React.useState("pending");


    React.useEffect(() => {
        setShow(props.show)
    }, [props.show])

    React.useEffect(() => {
        if (!show) props.onClose();
    }, [show])

    React.useEffect(() => {
        let d = props.data.filter((item: IDataItem) => {
            return (item.status.toLowerCase() == filter.toLowerCase())
        });
        setDataSet(d);
    }, [filter])


    const headerContent = <div className="srm-header">
        <div className="title">
            <div className="icon"></div>
            <div className="text">A/C Extension Requests</div>
        </div>

        <div className="filters">
            <div className={`filter ${filter == "pending" && " active "} pending`} onClick={() => setFilter("pending")}>pending</div>
            <div className={`filter ${filter == "approved" && " active "}  approved`} onClick={() => setFilter("approved")}>Approved</div>
            <div className={`filter ${filter == "rejected" && " active "}  rejected`} onClick={() => setFilter("rejected")}>Rejected</div>
        </div>

        <div></div>
    </div>;

    return (<Modal
        show={show}
        onOpen={() => { }}
        onClose={() => setShow(false)}
        headerContent={headerContent}
        class="sr-modal"
    >

        <div className="data-list">

            {
                dataSet.map((item: IDataItem, key: number) => {
                    return (<div className={`data-item ${filter.toLowerCase()} `}>
                        <div className="indicator">
                            <div></div>
                        </div>

                        <div className="request">{item.request}</div>
                        <div className="description"> {item.user} </div>
                        <div className="section"> {item.section} </div>

                        <div className="date"> {item.date} </div>

                        <div className="action">
                            {
                                item.status.toLowerCase() == "pending" &&
                                <div className="approve">
                                    <div className="icon-container">
                                        <div className="icon"></div>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>)
                })
            }
        </div>

    </Modal>)
}

export default ServiceModal;