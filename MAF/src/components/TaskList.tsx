import * as React from 'react';
import { DataList, FilterPanel, ItemCard, PortalContainer, ProfileImage, TitleBar, WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp';

interface ITaskListProps {
    uxpContext?: IContextProvider,
}

const TaskList: React.FunctionComponent<ITaskListProps> = (props) => {

    // get props 
    let { uxpContext } = props;

    // function to get data from lucy modal
    async function getTasks(max: number, lastPageToken: string) {
        let data = await uxpContext.executeAction("MAF", "get_tasks", { max: max, lastPageToken: lastPageToken }, { json: true })

        console.log("data", data.items)
        let p = new Promise<{ items: Array<any>, pageToken: string }>((resolve, reject) => {
            let response = { items: data.items, pageToken: data.pageToken }
            resolve(response);
        })
        return p
    }


    let data: any[] = [];

    return <WidgetWrapper>
        <div className={`list-container`}  >
            <div className="header uxp-drag-handler">

                <div className="title">
                    <div className="icon"></div>
                    <div className="text">  Pending Tasks </div>
                </div>

                <div className="filter-container">
                    <FilterPanel
                        onClear={() => {
                        }}
                    >


                    </FilterPanel>
                </div>

            </div>

            <div className="body">

                <DataList
                    data={getTasks}
                    pageSize={6}

                    renderItem={(item: any, key: number) => {
                        return (<div className={`list-thumbnail`}
                            key={key}
                        >

                            <div className="left">
                                <ProfileImage image={item.userImage} name={item.userName} />
                                <div className="details">
                                    <div className="ref">{item.ref}</div>
                                    <div className="user-name">{item.userName}</div>
                                    <div className="type">{item.type}</div>
                                </div>
                            </div>

                            <div className="right">
                                <div className={`status ${item.status.toLowerCase()}`}>{item.status.toUpperCase()}</div>
                                <div className="date">{item.date}</div>
                            </div>

                        </div>);
                    }}

                />

            </div>

        </div>

    </WidgetWrapper>
}

export default TaskList;