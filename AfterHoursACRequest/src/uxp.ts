
// window interface
interface ILayout {
    w?: number,
    h?: number,
    isDraggable?: boolean,
    isResizable?: boolean,
    maxH?: number,
    maxW?: number,
    minH?: number,
    minW?: number,
    static?: boolean
}

interface IContainer {
    background?: string
}

interface IWidgetPropConfig {
    name: string,
    type: string,
    label: string
    attr?: {[key:string]: any}
}

interface IWidgetConfig {
    layout?: ILayout
    container?: IContainer,
    props?: IWidgetPropConfig[]
}

interface IWidgetObject {
    name: string,
    widget: any,
    configs?: IWidgetConfig
}
declare global {
    interface Window {
        registerWidget(config: IWidgetObject): void
    }
}

export function registerWidget(widget:IWidgetObject) {
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
    }
    window.registerWidget(widget);
}