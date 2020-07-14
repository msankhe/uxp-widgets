
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
    guid:  string,
    name: string,
    widget: any,
    configs?: IWidgetConfig
}
declare global {
    interface Window {
        registerWidget(config: IWidgetObject): void
    }
}


interface ISidebarLink {
    link: string,
    target?: string,
    icon?: string,
    label: string
}
interface IWidgetManager {
    loadFromMarketPlace: boolean;
    url: string;
}

interface IPartialContextProvider {
    root: string,
    sidebarContent: ISidebarLink[],
    scriptFiles: string[],
    widgetManager: IWidgetManager;
    lucyUrl: string;
    apiKey: string;
    userKey: string;
}

export interface IContextProvider extends IPartialContextProvider {   
    executeAction:(model:string, action:string, parameters:any) => Promise<any>;
    fireEvent:(eventID: string) => Promise<void>;
    hasAppRole:(roles:string|string[]) => Promise<boolean>;
}

export function registerWidget(widget:IWidgetObject) {
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
    }
    window.registerWidget(widget);
}