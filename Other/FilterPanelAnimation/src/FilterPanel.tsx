import * as React from 'react';
import PortalContainer from './PortalContainer';
import { CSSTransition } from 'react-transition-group';
import classNames = require('classnames');

/**
 * A simple callback function
 * @export
 */
type ICallback = ()=>void;
interface IFilterPanelProps {
    /**
     * Called whenever the panel is opened
     */
    onOpen?: ICallback,

    /**
     * Called whenever the panel gets dismissed
     */
    onClose?: ICallback,

    /**
     * Called whenever the clear button on the panel is pressed. This button is available only when `enableClear` is set to `true1`
     */
    onClear?: ICallback,
    fillContainer?: React.RefObject<HTMLElement>,

    /**
     * Any extra css classes to add to the filter panel
     */
    className?: string,

    /**
     * Enabled the clear button on the panel
     */
    enableClear?: boolean,
    styles?:any,
    timeout?: number
}

interface ICoords {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
    width?: number,
    height?: number
}
/**
 * Displays a filter button which, when clicked, opens a popup panel.
 * Suitable for hiding filters for widgets or searches
 * @export
 * 
 * @example
 * ```
 * <FilterPanel
 *                                enableClear={inputValue?.length > 0 || selected != null}
 *                                onClear={() => { setInputValue(""); setSelected(null) }} >
 *                                <FormField className="no-padding mb-only">
 *                                    <Label>Sort By</Label>
 *                                    <Select
 *                                        selected={selected}
 *                                        options={[
 *                                            { label: "Name", value: "op-1" },
 *                                            { label: "Date", value: "op-2" },
 *                                        ]}
 *                                        onChange={(value) => { setSelected(value) }}
 *                                        placeholder=" -- select --"
 *                                        isValid={selected ? selected?.length > 0 : null}
 *                                    />
 *                                </FormField>
 * </FilterPanel>
 * ```
 * 
 */
const FilterPanel: React.FunctionComponent<IFilterPanelProps> = (props) => {

    // states
    let [showPanel, setShowPanel] = React.useState(false);
    let [coords, setCoords] = React.useState({});

    let filterPanelRef = React.useRef(null);
    let filterButtonRef = React.useRef(null);
    let filterPanelContainer = React.useRef(null);

    // props
    let { onOpen, onClose, onClear, fillContainer, className, enableClear, children, styles, timeout } = props;


    // update coordinates of filter panel
    const updateTooltipCoords = (button: HTMLButtonElement) => {
        const buttonDetails = button.getBoundingClientRect();

        let _coords: ICoords = {
            top: buttonDetails.y + window.scrollY - 10,
            right: window.innerWidth - buttonDetails.right - 10,
        }

        if (fillContainer !== null) {
            const container = fillContainer.current;
            const containerDetails = container.getBoundingClientRect();
            _coords = {
                top: containerDetails.top + window.scrollY,
                left: containerDetails.left,
                width: containerDetails.width,
                height: containerDetails.height
            }
        }

        setCoords(_coords);

    };

    // callbacks
    const onOpenPanel = () => {
        setShowPanel(true);

        if (typeof onOpen == "function") {
            onOpen();
        }
    }

    const onClosePanel = () => {
        setShowPanel(false);

        if (typeof onClose == "function") {
            onClose();
        }
    }

    const onClearFilters = () => {
        if (typeof onClear == "function") {
            onClear();
        }
    }


    // on click modal or backdrop 
    const handleClick = (e: MouseEvent) => {
        if (e.target == filterPanelContainer.current) {
            setShowPanel(false)
        }
    }

    document.addEventListener("click", (e) => handleClick(e))

    // render
    return (<>
        <div className="filter-panel-btn"
            onClick={(e) => {
                updateTooltipCoords(e.target as HTMLButtonElement);
                onOpenPanel()
            }}
            ref={filterButtonRef}
        >
            <div className="icon-container">
                <div className="icon"></div>
            </div>
        </div>

        <CSSTransition
            in={showPanel}
            timeout={timeout}
            classNames={"ff-fade"}
            unmountOnExit={true}
        >
            <PortalContainer>
                <div className="uxp-filter-panel-container" ref={filterPanelContainer}>
                    <div className={classNames("uxp-filter-panel", className)}
                        style={{...coords, ...styles}}
                        ref={filterPanelRef}
                    >
                        <div className="uxp-filter-header">

                            <div className="title">
                                <div className="icon"></div>
                                <div className="text">Filters</div>
                            </div>

                            <div className="icon-container" onClick={onClosePanel}>
                                <div className="icon"></div>
                            </div>

                        </div>

                        <div className="uxp-filter-body">

                            {children}
                        </div>

                        <div className={"uxp-filter-footer"}>
                            <button className={classNames("clear-filter", {"active": enableClear})} onClick={onClearFilters}>
                                <div className="icon-container">
                                    <div className="icon"></div>
                                </div>
                                <div className="text">Clear</div>
                            </button>
                        </div>

                    </div>
                </div>
            </PortalContainer>
        </CSSTransition>
    </>)
}

FilterPanel.defaultProps = {
    fillContainer: null,
}

export default FilterPanel;