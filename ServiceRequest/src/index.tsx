import * as React from 'react';
import ServiceRequestWidget from './ServiceRequestWidget';
import { registerWidget } from './uxp';

interface IProps {}

const ServiceRequestHighPriorityWidget = (props: React.PropsWithChildren<IProps>) => {
    return <ServiceRequestWidget priority="high" expandedFilterPanel={true} />
}

const ServiceRequestLowPriorityWidget = (props: React.PropsWithChildren<IProps>) => {
    return <ServiceRequestWidget priority="low" />
}

// register widget
registerWidget({
    "id": "64ee6224-07c3-40c3-9377-1194be887a7a",
    "name": "Service Request High Priority",
    "widget": ServiceRequestHighPriorityWidget,
    "configs": {
        "container": {
            "background": "transparent"
        },
        "layout": { w: 11, h: 12, minW: 11, minH: 9 }
    }
});

registerWidget({
    "id": "fb1071ac-eb41-4181-ede6-c3d705e5ac04",
    "name": "Service Request Low Priority",
    "widget": ServiceRequestLowPriorityWidget,
    "configs": {
        "container": {
            "background": "transparent"
        },
        "layout": { w: 11, h: 12, minW: 11, minH: 9 }
    }
});