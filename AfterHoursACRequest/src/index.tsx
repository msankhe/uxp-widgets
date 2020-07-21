import * as React from "react";
import {registerWidget, IContextProvider, } from './uxp';
import AfterHoursAcRequestWidget from "./AfterHoursAcRequestWidget";

registerWidget({
    "id": "08b88339-d2eb-4e72-a7ff-e457e8f3228a",
    "name": "After Hours Ac Request",
    "widget": AfterHoursAcRequestWidget,
    "configs": {
        "layout": { w: 11, h: 12, minW: 11, minH: 9 },
        "container": {
            "background": "transparent"
        }
    }
});