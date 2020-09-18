import * as React from "react";
import { registerWidget } from './uxp';

import './styles.scss';

import TaskList from "./components/TaskList";
import Stats from "./components/Stats";
import IncidentWidget from "./components/Incident";


registerWidget({
    id: "TaskList",
    name: "TaskList",
    widget: TaskList,
    configs: {
        layout: {
            w: 9,
            h: 11,
            minW: 9,
            minH: 11
        }
    }
});

registerWidget({
    id: "Stats",
    name: "Stats",
    widget: Stats,
    configs: {
        layout: {
            w: 9,
            h: 11,
            minW: 9,
            minH: 11
        }
    }
});

registerWidget({
    id: "Incident",
    name: "Incident",
    widget: IncidentWidget,
    configs: {
        layout: {
            w: 25,
            h: 9,
            minW: 25,
            minH: 9
        }
    }
});