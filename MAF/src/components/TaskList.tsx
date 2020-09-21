import * as React from 'react';
import { DataList, DynamicSelect, FilterPanel, FormField, ItemCard, Label, PortalContainer, ProfileImage, SearchBox, Select, TitleBar, WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp';

interface ITaskListProps {
    uxpContext?: IContextProvider,
}

const TaskList: React.FunctionComponent<ITaskListProps> = (props) => {

    // get props 
    let { uxpContext } = props;

    // states
    let [sort, setSort] = React.useState<string>('');
    let [query, setQuery] = React.useState<string>("");
    let [selected, setSelected] = React.useState<any>({});
    let [args, setArgs] = React.useState<any>({})

    // function to get data from lucy modal
    async function getTasks(max: number, lastPageToken: string, args: any) {
        let params = {
            max: max,
            lastPageToken: lastPageToken,
            sortBy: args?.sortBy,
            query: args?.query
        }
        let data = await uxpContext.executeAction("MAF", "get_tasks", params, { json: true })

        console.log("data", data.items)
        let p = new Promise<{ items: Array<any>, pageToken: string }>((resolve, reject) => {
            let response = { items: data.items, pageToken: data.pageToken }
            resolve(response);
        })
        return p
    }

    React.useEffect(() => {
        setArgs({ ...args, ...{ sortBy: sort, query: query } })
    }, [sort,query])


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
                            setSort("");
                            setQuery("");
                        }}
                        enableClear={(sort.length > 0) || (query.length > 0)}
                    >
                        <FormField>
                            <Label>Search By</Label>
                            <SearchBox value={query} onChange={setQuery} />
                        </FormField>
                        {/* <FormField>
                            <Label>Sort By</Label>
                            <Select
                                selected={sort}
                                onChange={setSort}
                                options={[
                                    { label: "User Name", value: "userName" },
                                    { label: "Ref. No", value: "ref" },
                                    { label: "Type", value: "type" },
                                    { label: "Status", value: "status" },
                                ]}
                                placeholder="sort by"
                            />
                        </FormField> */}

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
                    args={args}
                />

            </div>

        </div>

    </WidgetWrapper>
}

export default TaskList;