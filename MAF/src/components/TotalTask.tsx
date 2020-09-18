import * as React from 'react';
import { TitleBar, WidgetWrapper } from 'uxp/components';
import { ResponsiveBar } from '@nivo/bar'

interface ITotalTaskProps {

}

const TotalTasks: React.FunctionComponent<ITotalTaskProps> = (props) => {

    let data = [
        {
            "month": "Jan",
            "case" : 123,
            "memo": 23,
            "permit": 100
        },
        {
            "month": "Feb",
            "case" : 60,
            "memo": 50,
            "permit": 50
        },
        {
            "month": "Mar",
            "case" : 100,
            "memo": 60,
            "permit": 12
        },
        {
            "month": "Apr",
            "case" : 150,
            "memo": 50,
            "permit": 100
        },
        {
            "month": "May",
            "case" : 200,
            "memo": 123,
            "permit": 100
        },
        {
            "month": "Jun",
            "case" : 123,
            "memo": 23,
            "permit": 10
        },
        {
            "month": "Jul",
            "case" : 50,
            "memo": 13,
            "permit": 40
        },
        {
            "month": "Aug",
            "case" : 260,
            "memo": 49,
            "permit": 23
        },
        {
            "month": "Sep",
            "case" : 123,
            "memo": 23,
            "permit": 100
        },
        {
            "month": "Oct",
            "case" : 23,
            "memo": 23,
            "permit": 12
        },
        {
            "month": "Nov",
            "case" : 100,
            "memo": 50,
            "permit": 39
        },
        {
            "month": "Dec",
            "case" : 34,
            "memo": 23,
            "permit": 100
        },
      ]

    return (<WidgetWrapper className="total-tasks">
        <TitleBar title="TOTAL TASKS" icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmlvbmljb25zLXY1LXE8L3RpdGxlPjxyZWN0IHg9IjY0IiB5PSIzMjAiIHdpZHRoPSI0OCIgaGVpZ2h0PSIxNjAiIHJ4PSI4IiByeT0iOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgiLz48cmVjdCB4PSIyODgiIHk9IjIyNCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjI1NiIgcng9IjgiIHJ5PSI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweCIvPjxyZWN0IHg9IjQwMCIgeT0iMTEyIiB3aWR0aD0iNDgiIGhlaWdodD0iMzY4IiByeD0iOCIgcnk9IjgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4Ii8+PHJlY3QgeD0iMTc2IiB5PSIzMiIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ0OCIgcng9IjgiIHJ5PSI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweCIvPjwvc3ZnPg==">
            <div className="toolbar">
                <div className="legend">
                    <div className="legend-item">Case</div>
                    <div className="legend-item">Memo</div>
                    <div className="legend-item">Permit</div>
                </div>

                <div className="navigation">
                    <div className="button prev"></div>
                    <div className="button next"></div>
                </div>
            </div>
        </TitleBar>

        <div className="body">
            <ResponsiveBar
                data={data}
                keys={['case', 'memo', 'permit']}
                indexBy="month"
                margin={{ top: 50, bottom: 50 }}
                padding={0.3}
                colors={["#ffce65", "#20ebcc", "#d090ff"]}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisLeft={null}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>

    </WidgetWrapper>)
}

export default TotalTasks