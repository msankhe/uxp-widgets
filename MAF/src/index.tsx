import * as React from "react";
import {registerWidget,registerLink, IContextProvider, } from './uxp';
import { TitleBar ,FilterPanel} from "uxp/components";
import './styles.scss';

interface IMAFProps {
    uxpContext?: IContextProvider
}

interface IState {}

/**
add sidebar links as well
 */
/*
registerLink({
    "id":"my-link",
    "label":"Click Me",
    "click":() => alert("Hello"),
});
*/

const MAFWidget:React.FunctionComponent<IMAFProps>  = (props) => {
    return (
        <>
            <TitleBar title='MAF'>
                <FilterPanel>
                </FilterPanel>
            </TitleBar>
        </>
    )
};

registerWidget({
    "id": "MAF",
    "name": "MAF",
    "widget": MAFWidget,
    "configs": {
        /*"props": [
            { "name": "link", "label": "Link", "type": "string", "attr": {"required": true} },
            { "name": "imageSrc", "type": "string",  "label": "Image Src", "attr": {"required": true }},
            { "name": "linkTitle", "type": "string", "label": "Title", "attr": {"required": true }},
            { "name": "background", "type": "string", "label": "Background Color", "attr": {"required": false }}
            
        ],*/
        "container": {
            "background": "white"
        }
    }
});