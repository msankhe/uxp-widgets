import * as React from 'react';
import { DataList, FormField, ItemCard, SearchBox, Select, TitleBar, WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp';

interface IDiscomfortZonesProps {
    uxpContext?: IContextProvider,

}

const DiscomfortZones: React.FunctionComponent<IDiscomfortZonesProps> = (props) => {

    // get props 
    let { uxpContext } = props;

    // states
    let [zone, setZone] = React.useState("");
    let [searchText, setSearchText] = React.useState("")

    let DataSet: any[] = [
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        }
        ,{
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        },
        {
            section: "West Court Space 5",
            h: 6,
            t: 6,
            co2: 6
        }
    ]

    return (<WidgetWrapper className="discomfort-zones">
        <TitleBar title="Discomfort Zones" icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZnJvd24iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNMTYgMTZzLTEuNS0yLTQtMi00IDItNCAyIj48L3BhdGg+PGxpbmUgeDE9IjkiIHkxPSI5IiB4Mj0iOS4wMSIgeTI9IjkiPjwvbGluZT48bGluZSB4MT0iMTUiIHkxPSI5IiB4Mj0iMTUuMDEiIHkyPSI5Ij48L2xpbmU+PC9zdmc+"  >
            <div className="tool-bar">

                <FormField>
                    <Select
                        selected={zone}
                        onChange={setZone}
                        options={[
                            { label: "Ground Floor", value: "ground-floor" },
                            { label: "First Floor", value: "first-floor" },
                            { label: "Second Floor", value: "second-floor" },
                            { label: "Third Floor", value: "third-floor" },
                        ]}
                        placeholder="select a zone"
                    />
                </FormField>

                <FormField>
                    <SearchBox value={searchText} onChange={setSearchText} collapsed position="left" />
                </FormField>

            </div>
        </TitleBar>

        <div className="body">
            <div className="list">
                <div className="title-block">
                    <div className="title-row">
                        <div className="cell large">Location</div>
                        <div className="cell small">  Humidity </div>
                        <div className="cell small">  Temperature </div>
                        <div className="cell small">  CO<sub>2</sub> </div>
                    </div>
                </div>

                <div className="content-block">
                <DataList
                        data={DataSet}
                        pageSize={6}
                        renderItem={(item: any, key: number) => {
                            return <div className="title-row">
                                <div className="cell large"><span>{item.section}</span></div>
                                <div className="cell small"><span>{item.h}</span></div>
                                <div className="cell small"><span>{item.t}</span></div>
                                <div className="cell small"><span>{item.co2}</span></div>
                            </div>
                        }}
                    // showFooter={false}
                    />
                </div>
            </div>
        </div>

    </WidgetWrapper>)

}

export default DiscomfortZones;