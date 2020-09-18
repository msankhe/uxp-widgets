import * as React from 'react';
import { Button, DataGrid, WidgetWrapper } from 'uxp/components';

interface IStatProps {

}

const Stats: React.FunctionComponent<IStatProps> = (props) => {

    let Data = [
        {
            title: "cases",
            count: 1642,
            percentage: 23.1,
            increased: true
        },
        {
            title: "memo",
            count: 1642,
            percentage: 23.1,
            increased: true
        },
        {
            title: "permits",
            count: 16430,
            percentage: 23.1,
            increased: true
        },
        {
            title: "announcements",
            count: 13,
            percentage: 23.1,
            increased: false
        }
    ]

    return (<WidgetWrapper className="uxp-drag-handler" >
        <DataGrid
            data={Data}
            columns={2}
            renderItem={(item: any, key: number) => {
                return (<div className="stat-tile" key={key}>
                    <div className="top">
                        <div className="title">{item.title}</div>
                        <div className="count">{item.count}</div>
                    </div>
                    <div className="bottom">
                        <div className="percentage">{item.percentage}%
                            <div className={`icon-bg ${item.increased ? "up": "down"}`}>
                                <div className="icon-placeholder">
                                    <div className="icon"></div>
                                </div>
                            </div>
                        </div>

                        <Button className="stat-btn" title="View" onClick={() => { }} />
                    </div>
                </div>)
            }}
        />
    </WidgetWrapper>)

}

export default Stats;