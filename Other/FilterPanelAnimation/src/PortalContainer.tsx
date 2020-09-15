import * as React from 'react';
import * as ReactDom from 'react-dom';
// import { UXPDashboardContext } from '../../UXPDashboard/UXPDashboardContext';

/**
 * @export
 * Options that can be passed to a portal container component
 */
interface IPortalContainerProps {
    /**
     * create a backdrop if true
     */
    hasBackdrop?: boolean,

    /**
     * callback function to click on backdrop
     */
    onClickBackdrop?: () => void,

    /**
     * additional styles to backdrop
     */
    backdropStyles?: any
    /**
     * disabled the scrolling of main content block if true
     * default value is true
     */
    disableScroll?: boolean
}

/**
 * 
 * @export
 * 
 * This component is used to create a react portal.
 * 
 * 
 * @example
 * ```
 *  <PortalContainer > 
 *      {your content} 
 *  </PortalContainer>
 * ```
 * 
 * @example
 *  <PortalContainer 
 *      hasBackdrop 
 *      onClickBackdrop={() => {setShow(false)}} 
 *      backdropStyles={{backgroundColor: "white"}}  
 *  > 
 *      {your content} 
 *  </PortalContainer>
 */

const PortalContainer: React.FunctionComponent<IPortalContainerProps> = (props) => {

    // root
    // create if not
    let rootElement = document.getElementById('portal-root');
    if (!rootElement) {
        rootElement = document.createElement('div');
        rootElement.setAttribute("id", 'portal-root');
        document.body.appendChild(rootElement);
    }

    // ref
    let backdropRef = React.useRef(null);

    // handle backdrop click
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target == backdropRef.current) {
            props.onClickBackdrop();
        }
    }


    let mainContentBlocks = document.getElementsByClassName("main-content-block") as HTMLCollectionOf<HTMLElement>;

    React.useEffect(() => {
        return () => {
            if (mainContentBlocks && mainContentBlocks[0]) mainContentBlocks[0].style.overflow = 'auto';
        }
    }, [])

    // styles
    let styles: any = {};
    if (props.backdropStyles) styles = { ...props.backdropStyles }

    // render content
    const renderPortal = () => {
        if (props.disableScroll && mainContentBlocks && mainContentBlocks[0]) mainContentBlocks[0].style.overflow = 'hidden';

        if (props.hasBackdrop) {

            return (<div className="uxp-portal-backdrop"
                onClick={handleBackdropClick}
                ref={backdropRef}
                style={styles}
            >
                {props.children}
            </div>)
        }

        return (<>
            {props.children}
        </>)
    }

    // return
    return ReactDom.createPortal(renderPortal(), rootElement);
}


PortalContainer.defaultProps ={
    disableScroll: true
}
export default PortalContainer;