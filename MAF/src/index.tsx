import * as React from "react";
import { registerWidget } from './uxp';

import './styles.scss';

import TaskList from "./components/TaskList";


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