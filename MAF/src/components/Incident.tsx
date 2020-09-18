import * as React from 'react';
import { DatePicker, FormField, Label, TitleBar, WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp';

interface IIncidentProps {
    uxpContext?: IContextProvider

}

const IncidentWidget: React.FunctionComponent<IIncidentProps> = (props) => {
    // props
    let { uxpContext } = props;

    // states
    let [date, setDate] = React.useState(new Date())
    let [data, setData] = React.useState<any[]>([])

    React.useEffect(() => {
        getData(date)
    }, [date])

    async function getData(_date: Date) {
        let data = await uxpContext.executeAction("MAF", "get_incidents", { date: _date }, {json: true})
        setData(data)
    }

    return (<WidgetWrapper className="incident-widget">
        <TitleBar title="INCIDENT" icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0My43MjgiIGhlaWdodD0iNDguNzYzIiB2aWV3Qm94PSIwIDAgNDMuNzI4IDQ4Ljc2MyI+CiAgPGcgaWQ9Ikdyb3VwXzU0OCIgZGF0YS1uYW1lPSJHcm91cCA1NDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzg3LjI3MiAtMTk1LjQ5MSkiPgogICAgPGcgaWQ9Ikdyb3VwXzU0NyIgZGF0YS1uYW1lPSJHcm91cCA1NDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2ODUuNjY3IC0zMTM1LjkxNykiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNjMiIGRhdGEtbmFtZT0iUGF0aCAzNjMiIGQ9Ik0xNDMuMDU0LDMzODAuMzU3di0xLjAzOEgxMTIuNzI1di0xOS44NzRhMTQuNjQ2LDE0LjY0NiwwLDEsMSwyOS4yOTEsMHYyMC45MTFoMS4wMzh2MGgxLjAzN3YtMjAuOTExYTE2LjcyMSwxNi43MjEsMCwxLDAtMzMuNDQyLDB2MjAuOTExYTEuMDM4LDEuMDM4LDAsMCwwLDEuMDM4LDEuMDM4aDMxLjM2N2ExLjAzNywxLjAzNywwLDAsMCwxLjAzNy0xLjAzOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjIzNyAtNS4zMDEpIiBmaWxsPSIjMDAwIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2NCIgZGF0YS1uYW1lPSJQYXRoIDM2NCIgZD0iTTE0Mi4zMSwzNDE2Ljc4N3YtMS4wMzdIMTA0LjYyOGEuOTQ3Ljk0NywwLDAsMSwwLTEuODk0SDE0Mi4zMWEuOTQ3Ljk0NywwLDEsMSwwLDEuODk0djIuMDc2YTMuMDIyLDMuMDIyLDAsMSwwLDAtNi4wNDVIMTA0LjYyOGEzLjAyMiwzLjAyMiwwLDEsMCwwLDYuMDQ1SDE0Mi4zMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTM3LjY1NCkiIGZpbGw9IiMwMDAiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzY1IiBkYXRhLW5hbWU9IlBhdGggMzY1IiBkPSJNMTYwLjY3MywzMzc3LjY2NnYtLjQyNWEuNDA4LjQwOCwwLDAsMS0uNDA3LS40MDd2LTYuNTYzYS40MDcuNDA3LDAsMCwxLC44MTQsMHY2LjU2M2EuNDA4LjQwOCwwLDAsMS0uNDA3LjQwN3YuODVhMS4yNTcsMS4yNTcsMCwwLDAsMS4yNTctMS4yNTd2LTYuNTYzYTEuMjU3LDEuMjU3LDAsMCwwLTIuNTE0LDB2Ni41NjNhMS4yNTcsMS4yNTcsMCwwLDAsMS4yNTcsMS4yNTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjcuMDg0IC0xNy42MTgpIiBmaWxsPSIjMDAwIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2NiIgZGF0YS1uYW1lPSJQYXRoIDM2NiIgZD0iTTEyMC41NDUsMzM4Ny4yNTd2LS40MjVhLjQ3MS40NzEsMCwwLDEtLjQ3MS0uNDd2LTcuMDMxYS40NzEuNDcxLDAsMSwxLC45NDEsMHY3LjAzMWEuNDcxLjQ3MSwwLDAsMS0uNDcuNDd2Ljg1YTEuMzIsMS4zMiwwLDAsMCwxLjMyLTEuMzJ2LTcuMDMxYTEuMzIxLDEuMzIxLDAsMCwwLTIuNjQxLDB2Ny4wMzFhMS4zMjEsMS4zMjEsMCwwLDAsMS4zMjEsMS4zMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjI1NCAtMjEuODMzKSIgZmlsbD0iIzAwMCIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNjciIGRhdGEtbmFtZT0iUGF0aCAzNjciIGQ9Ik0xMzguNCwzMzMyLjQ0NnYyLjg4NWExLjAzOCwxLjAzOCwwLDAsMCwyLjA3Niwwdi0yLjg4NWExLjAzOCwxLjAzOCwwLDEsMC0yLjA3NiwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcuMjM2IDApIiBmaWxsPSIjMDAwIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2OCIgZGF0YS1uYW1lPSJQYXRoIDM2OCIgZD0iTTE2Mi40NTIsMzMzNy45bC0yLjA0LDIuMDM5YTEuMDM4LDEuMDM4LDAsMSwwLDEuNDY3LDEuNDY4bDIuMDQtMi4wMzlhMS4wMzgsMS4wMzgsMCwwLDAtMS40NjctMS40NjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNy40MDkgLTIuODk4KSIgZmlsbD0iIzAwMCIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNjkiIGRhdGEtbmFtZT0iUGF0aCAzNjkiIGQ9Ik0xMTguNDc5LDMzNDEuNzU5bC0yLjAzOS0yLjA0YTEuMDM4LDEuMDM4LDAsMCwwLTEuNDY3LDEuNDY4bDIuMDM5LDIuMDRhMS4wMzgsMS4wMzgsMCwwLDAsMS40NjctMS40NjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjEyIC0zLjc1MSkiIGZpbGw9IiMwMDAiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=" >
            <div className="incident-tool-bar">
                <Label className="incident-tb-label" >
                    <div className="icon"></div>
                    <div className="text">Past 24 hours</div>
                </Label>

                <DatePicker title="Visit Date" date={date} onChange={setDate} closeOnSelect disableInput />
            </div>
        </TitleBar>

        <div className="body">

            {
                data.map((item: any, key: number) => {
                    return (<div className="incident-tile">
                        <div className="top">
                            <div className="count">{item.count} <span> ({item.limit})</span></div>
                            <div className="percentage"> {item.percentage}%
                                <div className={`icon-bg ${item.increased ? "up" : "down"}`}>
                                    <div className="icon-placeholder">
                                        <div className="icon"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bottom">

                            <div className="layers-container">
                                <div className="layers"></div>
                            </div>

                            <div className="label">{item.label}</div>

                        </div>
                    </div>)
                })
            }


        </div>

    </WidgetWrapper>)
}

export default IncidentWidget