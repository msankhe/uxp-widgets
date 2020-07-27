interface IWidgetProps {
    uxpContext: IUXPContext;
}
interface IUXPContext {
    executeAction: (model: string, action: string, parameters: any) => Promise<any>;
    fireEvent: (eventID: string) => Promise<void>;
    hasAppRole: (roles: string | string[]) => Promise<boolean>;
    lucyUrl: string;
    apiKey: string;
    userKey: string;
}

declare module "uxp/components" {
    interface IUXPButtonProps {
        title: string;
        onClick: () => void;
    }
    export var Button: React.ComponentClass<IUXPButtonProps, {}>;

    // portal
    interface IPortalContainer { }
    export const PortalContainer: React.FC<IPortalContainer>;

    // tooltip
    type ITooltipPosition = "top" | "bottom" | "left" | "right";
    interface ITooltip {
        content: any,
        position?: ITooltipPosition
    }
    export const Tooltip: React.FC<ITooltip>;

    // popover
    interface IPopover {
        title: string | HTMLElement,
        content: string | HTMLElement,
        position?: ITooltipPosition
    }
    export const Popover: React.FC<IPopover>;

    // modal
    type IAnimation = 'm-slide-ftr' | 'm-slide-ftl' | 'm-slide-fbr' | 'm-slide-fbl' | 'm-zoom-fc';

    interface IModal {
        show: boolean,
        onOpen: any,
        onClose: any,
        title?: any,
        closeButton?: any,
        styles?: any,
        class?: string,
        headerContent?: any
        backgroundDismiss?: boolean,
        showCloseButton?: boolean,
        animation?: IAnimation
    }
    export const Modal: React.FC<IModal>;

    interface ICallback {
        (): void
    }

    interface IFilterPanel {
        onOpen?: ICallback,
        onClose?: ICallback,
        onClear?: ICallback,
        fillContainer?: React.RefObject<HTMLElement>,
        class?: string
    }

    export const FilterPanel: React.FC<IFilterPanel>

    interface IFullPageWidgetContainer {
        show: boolean,
        onOpen?: () => void,
        onClose?: () => void,
        title?: any,
        class?: string,
        headerContent?: any
        toolbarContent?: any
    }

    export const FUllPageWidgetContainer: React.FC<IFullPageWidgetContainer>

    interface IWidgetTitleBarProps {
        title: string;
        icon?: string;
    }

    export const TitleBar: React.FC<IWidgetTitleBarProps>

    interface ILinkWidgetProps {
        show: boolean,
        onOpen?: any,
        onClose?: any,
        title?: any,
        class?: string,
        toolbarContent?: any
    }

    export const LinkWidgetContainer: React.FC<ILinkWidgetProps>
}