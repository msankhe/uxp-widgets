import * as React from 'react';
import { Modal } from 'uxp/components';

interface IDataItem {
    icon: string,
    request: string,
    description: string,
    sections: string[],
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
            <div className="text">Service Requests</div>
        </div>

        <div className="filters">
            <div className={`filter ${filter == "pending" && " active "} pending`} onClick={() => setFilter("pending")}>pending</div>
            <div className={`filter ${filter == "approved" && " active "}  approved`} onClick={() => setFilter("approved")}>Approved</div>
            <div className={`filter ${filter == "assigned" && " active "}  assigned`} onClick={() => setFilter("assigned")}>assigned</div>
            <div className={`filter ${filter == "overdue" && " active "}  overdue`} onClick={() => setFilter("overdue")}>Overdue</div>
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
                        <div className="description"> {item.description}
                            {
                                item.sections?.map((section: string) => {
                                    return <div className="section">{section}</div>
                                })
                            }
                        </div>

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

                            {
                                item.status.toLowerCase()  == "approved" &&
                                <div className="assign">
                                    <select name="" id="">
                                        <option value="">Select User</option>
                                    </select>
                                </div>
                            }

                            {
                                item.status.toLowerCase()  == "assigned" &&
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