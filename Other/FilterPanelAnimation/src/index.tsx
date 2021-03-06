import * as React from "react";
import { registerWidget, registerLink, IContextProvider, } from './uxp';
import { FormField, Input, Label, TitleBar, Tooltip, useToast, WidgetWrapper } from "uxp/components";
import './styles.scss';
import FilterPanel from "./FilterPanel";

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

interface IFilter_sampleProps {
    uxpContext?: IContextProvider
}

const Filter_sampleWidget: React.FunctionComponent<IFilter_sampleProps> = (props) => {

    let [ot, setOt] = React.useState<string>("811.365")
    let [od, setOd] = React.useState<string>("1.37738")
    let [x1, setX1] = React.useState<any>(0.02)
    let [x2, setX2] = React.useState<any>(1.72)
    let [x3, setX3] = React.useState<any>(0.5)
    let [x4, setX4] = React.useState<any>(1.24)

    let styles = {
        "--ot": ot + "ms",
        "--od": od + "ms",
        "--x1": x1,
        "--x2": x2,
        "--x3": x3,
        "--x4": x4
    }

    let Toast = useToast();

    const copyCode = () => {
        let val = `transition: transform ${ot}ms cubic-bezier(${x1}, ${x2}, ${x3}, ${x4}) ${od}ms`;

        let el = document.createElement("textarea");
        el.value = val
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        Toast.success("Copied successfully")
    }

    return (
        <WidgetWrapper>
            <TitleBar title='Configuring filter animation'></TitleBar>

            <div className="config-container">
                <div className="form">

                    <FormField >

                        <div className="row">
                            <FormField >
                                <Label>animation time</Label>
                                <Input value={ot} onChange={val => setOt(val)} />
                            </FormField>

                            <FormField >
                                <Label>animation delay</Label>
                                <Input value={od} onChange={val => setOd(val)} />
                            </FormField>
                        </div>

                    </FormField>


                    <FormField >
                        <Label>cubic-bezier</Label>
                        <div className="">
                            <div className="row">
                                <FormField className="long" >

                                    <InputRange
                                        maxValue={1}
                                        minValue={0}
                                        value={x1}
                                        onChange={value => setX1(value)}
                                        step={0.01}
                                    />
                                </FormField>

                                <FormField className="short"  >
                                    <Input value={x1} onChange={val => setX1(val)} />
                                </FormField>
                            </div>
                            <div className="row">

                                <FormField className="long">
                                    <InputRange
                                        maxValue={10}
                                        minValue={-10}
                                        value={x2}
                                        onChange={value => setX2(value)}
                                        step={0.01}
                                    />
                                </FormField>

                                <FormField className="short"  >
                                    <Input value={x2} onChange={val => setX2(val)} />
                                </FormField>
                            </div>

                            <div className="row">

                                <FormField className="long">
                                    <InputRange
                                        maxValue={1}
                                        minValue={0}
                                        value={x3}
                                        onChange={value => setX3(value)}
                                        step={0.01}
                                    />
                                </FormField>

                                <FormField className="short"  >
                                    <Input value={x3} onChange={val => setX3(val)} />
                                </FormField>
                            </div>
                            <div className="row">

                                <FormField className="long">
                                    <InputRange
                                        maxValue={10}
                                        minValue={-10}
                                        value={x4}
                                        onChange={value => setX4(value)}
                                        step={0.01}
                                    />
                                </FormField>

                                <FormField className="short"  >
                                    <Input value={x4} onChange={val => setX4(val)} />
                                </FormField>
                            </div>
                        </div>
                    </FormField>
                </div>

                <div className="example">
                    <div className="ex">
                        <FilterPanel styles={styles} timeout={parseInt(ot) + parseInt(od)} >
                            <FormField>
                                <Input value="" onChange={() => { }} />
                            </FormField>
                        </FilterPanel>
                    </div>


                </div>

                <div className="code">
                    <FormField>
                        <Tooltip content="Click to Copy">
                            <code onClick={copyCode}>
                                transition: transform <span>{ot}ms</span> cubic-bezier(<span>{x1}</span>, <span>{x2}</span>, <span>{x3}</span>, <span>{x4}</span>) <span>{od}ms</span>;
                            </code>
                        </Tooltip>
                    </FormField>
                </div>
            </div>



        </WidgetWrapper>


    )
};

registerWidget({
    "id": "filter_sample",
    "name": "Filter_sample",
    "widget": Filter_sampleWidget,
    "configs": {
        "layout": {
            h: 16,
            w: 19
        }
    }
});