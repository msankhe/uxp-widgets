import * as React from "react";
import { registerWidget, IContextProvider } from './uxp';
import './styles.scss';
import FilterPanel from "./filter-panel/FilterPanel";

interface IProps {
    uxpContext?: IContextProvider
}

interface IState {}

class AfterHoursACRequestWidget extends React.Component<IProps, IState> {
    render() {
        return (<>
            <div className="ac-request-container">
                <div className="header">

                    <div className="title">
                        <div className="icon"></div>
                        <div className="text">After Hours A/C Requests</div>
                    </div>

                    <div className="filter-container">
                        <FilterPanel onOpen={() => { }} onClose={() => { }} >
                            
                            <div className="filter-item">
                                <label htmlFor="">Filter By</label>
                                <select name="" id="">
                                    <option value=""> Select a Filter</option>
                                </select>
                            </div>

                            <div className="filter-item">
                                <label htmlFor="">Sort By</label>
                                <select name="" id="">
                                    <option value=""> Select a Option</option>
                                </select>
                            </div>


                        </FilterPanel>
                    </div>

                </div>

                <div className="body">
                  
                    <div className="ac-request-thumbnail pending">
                        <div className="status-indicator"></div>
                        <div className="request-details">
                            <div className="request">A/C Extension Request #81</div>
                            <div className="user">Carrie Mathew</div>
                            <div className="section">Design Team</div>
                        </div>
                        <div className="status">
                            <div className="label">Pending</div>
                            <div className="date">23/07/2020</div>
                        </div>
                    </div>

                    <div className="ac-request-thumbnail approved">
                        <div className="status-indicator"></div>
                        <div className="request-details">
                            <div className="request">A/C Extension Request #81</div>
                            <div className="user">Carrie Mathew</div>
                            <div className="section">Design Team</div>
                        </div>
                        <div className="status">
                            <div className="label">approved</div>
                            <div className="date">23/07/2020</div>
                        </div>
                    </div>

                    <div className="ac-request-thumbnail rejected">
                        <div className="status-indicator"></div>
                        <div className="request-details">
                            <div className="request">A/C Extension Request #81</div>
                            <div className="user">Carrie Mathew</div>
                            <div className="section">Design Team</div>
                        </div>
                        <div className="status">
                            <div className="label">rejected</div>
                            <div className="date">23/07/2020</div>
                        </div>
                    </div>

                    <div className="ac-request-thumbnail rejected">
                        <div className="status-indicator"></div>
                        <div className="request-details">
                            <div className="request">A/C Extension Request #81</div>
                            <div className="user">Carrie Mathew</div>
                            <div className="section">Design Team</div>
                        </div>
                        <div className="status">
                            <div className="label">rejected</div>
                            <div className="date">23/07/2020</div>
                        </div>
                    </div>

                    <div className="ac-request-thumbnail pending">
                        <div className="status-indicator"></div>
                        <div className="request-details">
                            <div className="request">A/C Extension Request #81</div>
                            <div className="user">Carrie Mathew</div>
                            <div className="section">Design Team</div>
                        </div>
                        <div className="status">
                            <div className="label">Pending</div>
                            <div className="date">23/07/2020</div>
                        </div>
                    </div>

                    <div className="ac-request-thumbnail approved">
                        <div className="status-indicator"></div>
                        <div className="request-details">
                            <div className="request">A/C Extension Request #81</div>
                            <div className="user">Carrie Mathew</div>
                            <div className="section">Design Team</div>
                        </div>
                        <div className="status">
                            <div className="label">approved</div>
                            <div className="date">23/07/2020</div>
                        </div>
                    </div>

                </div>

            </div>
        </>);
    }
}

registerWidget({
    "guid": "df558fd3-3963-4f5a-cf06-4defe2e3e7f9",
    "name": "After Hours AC Request",
    "widget": AfterHoursACRequestWidget,
    "configs": {
        "container": {
            "background": "transparent"
        },
        "layout": {w: 5, h: 12, minW: 5, minH:12}
    }
});
