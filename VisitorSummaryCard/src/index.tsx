import * as React from "react";
import { registerWidget, IContextProvider } from './uxp';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// styles
import "./styles.scss";

interface IVisitor {
    name: string,
    time: string,
    index?: number
}

interface IProps {
    uxpContext?: IContextProvider
}

const VisitorSummaryCardWidget = (props: IProps) => {

    // data set
    const dataSet: IVisitor[] = [
        {
            name: "Mark Anthony",
            time: "10.00 am",
        },
        {
            name: "Kamal Perere",
            time: "01.00 pm",
        },
        {
            name: "John Doe",
            time: "10.00 am",
        },
        {
            name: "Chethiya Perera",
            time: "10.00 am",
        }
    ]

    // state
    const [visitor, setVisitor] = React.useState<IVisitor | null>({ ...dataSet[0], ...{ index: 0 } })


    // toggle prev & next
    const toggleNext = (current: number) => {
        let next = (current === (dataSet.length - 1)) ? 0 : (current + 1);
        console.log(current, " ", next, " ", current === (dataSet.length - 1), " ", dataSet.length)
        setVisitor({ ...dataSet[next], ...{ index: next } });
    }

    const togglePrev = (current: number) => {
        let prev = current == 0 ? (dataSet.length - 1) : (current - 1);
        setVisitor({ ...dataSet[prev], ...{ index: prev } });
    }

    // on dismiss 
    const onDismiss = (current: number) => {
        toggleNext(current);
    }

    // on acknowledge
    const onAcknowledge = (current: number) => {
        toggleNext(current);
    }


    // return 
    return (<TransitionGroup className="visitor-summary-card-container">

        <div className="count">{dataSet.length}</div>

        <CSSTransition
            key={visitor.index}
            timeout={300}
            classNames={"fade"}
        >
            <div className="visitor-summary-card">


                <div className="header">
                    <div className="title">
                        Hello, <div className="large">Jane</div>
                    </div>
                    <div className="icon-placeholder">
                        <div className="icon"></div>
                    </div>
                </div>

                <div className="body">
                    <div className="sub">Your visitor is here</div>
                    <div className="main">{visitor.name}</div>
                    <div className="sub">for the {visitor.time} meeting</div>
                </div>

                <div className="footer">

                    <div className="controls">
                        <div className="control-placeholder" onClick={() => togglePrev(visitor.index)}>
                            <div className="control prev"></div>
                        </div>
                        <div className="control-placeholder" onClick={() => toggleNext(visitor.index)}>
                            <div className="control next active" ></div>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button className="btn dismiss" onClick={() => onDismiss(visitor.index)} >dismiss</button>
                        <button className="btn acknowledge" onClick={() => onAcknowledge(visitor.index)}>acknowledge</button>
                    </div>

                </div>

            </div>
        </CSSTransition>
        <div className="visitor-summary-card-placeholder"></div>
    </TransitionGroup>);
}


registerWidget({
    "id": "0356a2af-78da-4e99-c3e1-4cb822539cee",
    "name": "Visitor Summary Card",
    "widget": VisitorSummaryCardWidget,
    "configs": {
        "container": { "background": "transparent" },
        "layout": { w: 9, h: 7, minW: 9, minH: 7 }
    },
    "vendor": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAzLjQ3MiIgaGVpZ2h0PSIxNi42MTEiIHZpZXdCb3g9IjAgMCAxMDMuNDcyIDE2LjYxMSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzQyNDI0Mjt9LmJ7ZmlsbDp1cmwoI2EpO30uY3tmaWxsOnVybCgjYik7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB5MT0iMC41IiB4Mj0iMSIgeTI9IjAuNSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzI5YWJlMiIvPjxzdG9wIG9mZnNldD0iMC4zODkiIHN0b3AtY29sb3I9IiMyYWJjYmIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyY2RiNzciLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjAiIHkxPSIwLjUiIHgyPSIxIiB5Mj0iMC41IiB4bGluazpocmVmPSIjYSIvPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjcyIC01MTYpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTIuMTY3IDUyMC41MTUpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTQ2LDIxLjA4MWE1LjQsNS40LDAsMCwxLTEuOC0uMzA3LDMuNDQ2LDMuNDQ2LDAsMCwxLTEuNDQ1LS45MjIuNDc5LjQ3OSwwLDAsMS0uMTM4LS40MTUuNjUyLjY1MiwwLDAsMSwuMjMxLS40LjYxMy42MTMsMCwwLDEsLjQ0Ni0uMTIzLjYwNi42MDYsMCwwLDEsLjM4NC4yLDIuMzY1LDIuMzY1LDAsMCwwLC45NzYuNjYxQTMuNzcxLDMuNzcxLDAsMCwwLDQ2LDIwYTIuNzA5LDIuNzA5LDAsMCwwLDEuNjQ1LS4zOTIsMS4yLDEuMiwwLDAsMCwuNTIzLS45NDUsMS4wOCwxLjA4LDAsMCwwLS41MjMtLjkxNCw0LjQyNiw0LjQyNiwwLDAsMC0xLjcyMS0uNTYxLDQuNiw0LjYsMCwwLDEtMi4yNzUtLjg2MSwxLjg1NCwxLjg1NCwwLDAsMS0uNzIyLTEuNDYsMi4wMywyLjAzLDAsMCwxLC40MTUtMS4zMDYsMi41NSwyLjU1LDAsMCwxLDEuMTA3LS43ODQsNC4yMTgsNC4yMTgsMCwwLDEsMS41MjItLjI2MSw0LjA2NSw0LjA2NSwwLDAsMSwxLjc3NS4zNTQsMy4yNTEsMy4yNTEsMCwwLDEsMS4yMDcuOTUzLjUzMy41MzMsMCwwLDEsLjEyMy40MTUuNDkzLjQ5MywwLDAsMS0uMjQ2LjM1My42NDYuNjQ2LDAsMCwxLS40MjMuMDY5QS42NzUuNjc1LDAsMCwxLDQ4LDE0LjQ0MWEyLjI5MywyLjI5MywwLDAsMC0uODkxLS42NTMsMy4wNzUsMy4wNzUsMCwwLDAtMS4xNjgtLjIwNywyLjM2OCwyLjM2OCwwLDAsMC0xLjM1My4zNDYsMS4wMjYsMS4wMjYsMCwwLDAtLjUwNy44NjguOTkzLjk5MywwLDAsMCwuMTkyLjYxNSwxLjUxNywxLjUxNywwLDAsMCwuNjYxLjQ2MSw2LjE1MSw2LjE1MSwwLDAsMCwxLjMxNC4zMzgsNS45LDUuOSwwLDAsMSwxLjgyMS41NDYsMi4zNjYsMi4zNjYsMCwwLDEsLjk1My44NDUsMi4wMjUsMi4wMjUsMCwwLDEsLjI4NCwxLjA1MywxLjk4NywxLjk4NywwLDAsMS0uNDIzLDEuMjY4LDIuODIsMi44MiwwLDAsMS0xLjE2OC44NTNBNC40LDQuNCwwLDAsMSw0NiwyMS4wODFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDIuNjEzIC0xMi41MDUpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik01NC41ODksMjQuNmEuNTU3LjU1NywwLDAsMS0uNi0uNlYxNi43NDdhNC4yNTcsNC4yNTcsMCwwLDEsLjU3Ni0yLjE1OSw0LjE2Niw0LjE2NiwwLDAsMSwxLjUyMi0xLjUxNCw0LjUzOCw0LjUzOCwwLDAsMSw0LjM1Ny4wMDgsNC4xMTMsNC4xMTMsMCwwLDEsMS41MjksMS41MjksNC4yNzIsNC4yNzIsMCwwLDEsLjU2MSwyLjIsNC40LDQuNCwwLDAsMS0uNTQ2LDIuMTgyLDQuMTA2LDQuMTA2LDAsMCwxLTEuNDgzLDEuNTI5LDQuMDMzLDQuMDMzLDAsMCwxLTIuMTIxLjU2MSwzLjk2MSwzLjk2MSwwLDAsMS0xLjg2Ny0uNDM4LDMuNjY3LDMuNjY3LDAsMCwxLTEuMzQ1LTEuMTZWMjRhLjU5Mi41OTIsMCwwLDEtLjE2MS40MzhBLjU2OC41NjgsMCwwLDEsNTQuNTg5LDI0LjZaTTU4LjI1NSwyMGEzLjEsMy4xLDAsMCwwLDEuNi0uNDE1LDMuMDEsMy4wMSwwLDAsMCwxLjExNC0xLjE0NSwzLjUwOCwzLjUwOCwwLDAsMCwwLTMuMjgxLDMuMDY1LDMuMDY1LDAsMCwwLTEuMTE0LTEuMTQ1LDMuMDMxLDMuMDMxLDAsMCwwLTEuNi0uNDIzLDMsMywwLDAsMC0xLjU4My40MjMsMy4wNDUsMy4wNDUsMCwwLDAtMS4xMDcsMS4xNDUsMy41NjgsMy41NjgsMCwwLDAsMCwzLjI4MSwyLjk5LDIuOTksMCwwLDAsMS4xMDcsMS4xNDVBMy4wNjIsMy4wNjIsMCwwLDAsNTguMjU1LDIwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1LjI0NyAtMTIuNTA1KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNNzEuNzIsMjEuMDgxQTQuMDE0LDQuMDE0LDAsMCwxLDY5LjYsMjAuNTJhNC4xMDYsNC4xMDYsMCwwLDEtMS40ODMtMS41MjksNC40LDQuNCwwLDAsMS0uNTQ2LTIuMTgyLDQuMjcyLDQuMjcyLDAsMCwxLC41NjEtMi4yLDQuMTcsNC4xNywwLDAsMSwxLjUyOS0xLjUyOSw0LjI1NSw0LjI1NSwwLDAsMSwyLjE4Mi0uNTYxLDQuMjA3LDQuMjA3LDAsMCwxLDIuMTc1LjU2MSw0LjE1LDQuMTUsMCwwLDEsMS41MjIsMS41MjksNC4zNTcsNC4zNTcsMCwwLDEsLjU3NiwyLjJsLS40NzYuMzY5YTMuODYyLDMuODYyLDAsMCwxLS41MTUsMS45OSwzLjgxNSwzLjgxNSwwLDAsMS0xLjQsMS40QTMuODU5LDMuODU5LDAsMCwxLDcxLjcyLDIxLjA4MVpNNzEuODQzLDIwYTMuMDcsMy4wNywwLDAsMCwxLjU5MS0uNDE1LDIuOTksMi45OSwwLDAsMCwxLjEwNy0xLjE0NSwzLjUwOCwzLjUwOCwwLDAsMCwwLTMuMjgxLDMuMDQ1LDMuMDQ1LDAsMCwwLTEuMTA3LTEuMTQ1LDMuMTksMy4xOSwwLDAsMC0zLjE3NCwwLDMuMTQ0LDMuMTQ0LDAsMCwwLTEuMTIyLDEuMTQ1LDMuNDUxLDMuNDUxLDAsMCwwLDAsMy4yODFBMy4wNDEsMy4wNDEsMCwwLDAsNzEuODQzLDIwWm0zLjY4MSwxYS42LjYsMCwwLDEtLjQzLS4xNjEuNTQ1LjU0NSwwLDAsMS0uMTY5LS40MjNWMTcuNzkybC4yOTItMS4yMTQuOTA3LjIzMVYyMC40MmEuNTQ1LjU0NSwwLDAsMS0uMTY5LjQyM0EuNi42LDAsMCwxLDc1LjUyNCwyMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OC4zOTEgLTEyLjUwNSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTg1LjMyNiwyMS4wODFhNC4xMzIsNC4xMzIsMCwwLDEtMi4xNTktLjU2MSw0LjA2OSw0LjA2OSwwLDAsMS0xLjQ5MS0xLjUyOSw0LjQsNC40LDAsMCwxLS41NDYtMi4xODIsNC41NzUsNC41NzUsMCwwLDEsLjUyMy0yLjIsMy45NywzLjk3LDAsMCwxLDEuNDI5LTEuNTI5LDMuODg3LDMuODg3LDAsMCwxLDIuMDktLjU2MSw0LjAzNCw0LjAzNCwwLDAsMSwxLjcyOS4zNjlBMy45LDMuOSwwLDAsMSw4OC4yOTIsMTRhLjQxNy40MTcsMCwwLDEsLjEyMy4zOTIuNTkxLjU5MSwwLDAsMS0uMjYxLjM2MS40NzIuNDcyLDAsMCwxLS4zNzcuMDg1LjU5LjU5LDAsMCwxLS4zNjEtLjIyM0EyLjg2LDIuODYsMCwwLDAsODUuMTcyLDEzLjZhMi43MjgsMi43MjgsMCwwLDAtMi41MjgsMS41NTIsMy43MTMsMy43MTMsMCwwLDAtLjM2MSwxLjY2LDMuNDg1LDMuNDg1LDAsMCwwLC4zODQsMS42NDUsMi44NCwyLjg0LDAsMCwwLDEuMDc2LDEuMTM3QTMuMDIzLDMuMDIzLDAsMCwwLDg1LjMyNiwyMGEzLjU0NywzLjU0NywwLDAsMCwxLjEtLjE2MSwyLjUxMiwyLjUxMiwwLDAsMCwuODg0LS41LjY4Ni42ODYsMCwwLDEsLjM4NC0uMTY5LjUyNC41MjQsMCwwLDEsLjM2OS4xMjMuNi42LDAsMCwxLC4yMDcuMzg0LjQuNCwwLDAsMS0uMTQ2LjM2OUEzLjk3OCwzLjk3OCwwLDAsMSw4NS4zMjYsMjEuMDgxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUxLjUzIC0xMi41MDUpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik05Ny4zMjcsMjEuMDgxYTQuNDA3LDQuNDA3LDAsMCwxLTIuMjA2LS41NDYsMy45MDcsMy45MDcsMCwwLDEtMS41MDYtMS41MTQsNC40NTcsNC40NTcsMCwwLDEtLjU0Ni0yLjIxMyw0LjYsNC42LDAsMCwxLC41MTUtMi4yMjEsMy45MDgsMy45MDgsMCwwLDEsMS40MjItMS41MTQsMy45NTEsMy45NTEsMCwwLDEsMi4wOS0uNTUzLDMuODMsMy44MywwLDAsMSwyLjAzNi41MywzLjYsMy42LDAsMCwxLDEuMzQ1LDEuNDY4LDQuNjc1LDQuNjc1LDAsMCwxLC40NzYsMi4xMzYuNTMzLjUzMywwLDAsMS0uMTU0LjM5Mi41NDYuNTQ2LDAsMCwxLS40LjE0NmgtNi41NHYtLjk4NGg2LjY2M2wtLjY2MS40NzZhMy41ODMsMy41ODMsMCwwLDAtLjMyMy0xLjZBMi41NjksMi41NjksMCwwLDAsOTcuMSwxMy41ODEsMi44MjMsMi44MjMsMCwwLDAsOTUuNTYsMTRhMi43ODgsMi43ODgsMCwwLDAtMS4wMjIsMS4xNDUsMy43NDcsMy43NDcsMCwwLDAtLjM2MSwxLjY2OCwzLjM2MiwzLjM2MiwwLDAsMCwuNDA3LDEuNjZBMi45ODksMi45ODksMCwwLDAsOTUuNywxOS42MDVhMy4xNTIsMy4xNTIsMCwwLDAsMS42MjkuNDE1LDMuMzY3LDMuMzY3LDAsMCwwLDEuMTE0LS4xOTIsMi43NDUsMi43NDUsMCwwLDAsLjktLjQ4NC42NDMuNjQzLDAsMCwxLC4zODQtLjE0Ni41MDguNTA4LDAsMCwxLC4zNjkuMTE1LjU4NS41ODUsMCwwLDEsLjIwNy40LjQzLjQzLDAsMCwxLS4xNzcuMzY5LDQuMjg3LDQuMjg3LDAsMCwxLTEuMjkxLjcxNUE0LjM3Miw0LjM3MiwwLDAsMSw5Ny4zMjcsMjEuMDgxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0LjI5NSAtMTIuNTA1KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTA3LjExNCwyMS4wMjdhLjYyLjYyLDAsMCwxLS4zNTMtLjEwOC41NDcuNTQ3LDAsMCwxLS4yMTUtLjI3N2wtMi40LTcuMTkzYS45MzMuOTMzLDAsMCwxLC4wMTUtLjYwNy40MzIuNDMyLDAsMCwxLC40My0uMjIzLjYyLjYyLDAsMCwxLC4zNTQuMTA4LjY2NC42NjQsMCwwLDEsLjIzMS4zMzhsMi4xMzYsNi41MzJoLS4zMzhsMS45ODMtNi41MTdhLjY3Ny42NzcsMCwwLDEsLjIwNy0uMzMuNjIzLjYyMywwLDAsMSwuNzUzLS4wMDguNjM1LjYzNSwwLDAsMSwuMjA3LjMzOGwxLjg5LDYuMzYzaC0uMjYxbDIuMDktNi4zNzhhLjU2OC41NjgsMCwwLDEsLjU2OS0uNDQ2LjQ2OS40NjksMCwwLDEsLjQ2MS4yNTQuNjg1LjY4NSwwLDAsMSwwLC41NzZsLTIuNCw3LjE5M2EuNTMzLjUzMywwLDAsMS0uMjA3LjI3Ny42LjYsMCwwLDEtLjM0Ni4xMDguNjYzLjY2MywwLDAsMS0uMzYxLS4xMDguNDY0LjQ2NCwwLDAsMS0uMjA3LS4yNzdsLTEuOTM3LTYuNDI0aC4xODRsLTEuOTM3LDYuNDI0YS41MzUuNTM1LDAsMCwxLS4yMTUuMjg0QS41ODIuNTgyLDAsMCwxLDEwNy4xMTQsMjEuMDI3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU2Ljg1IC0xMi41MjgpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMjMuNjUzLDIxLjA4MWE0LjM0NCw0LjM0NCwwLDAsMS0yLjItLjU1Myw0LjAxOCw0LjAxOCwwLDAsMS0xLjUyMi0xLjUyMiw0LjY3Miw0LjY3MiwwLDAsMSwwLTQuNDExLDQuMDE4LDQuMDE4LDAsMCwxLDEuNTIyLTEuNTIyLDQuMzY0LDQuMzY0LDAsMCwxLDIuMi0uNTUzLDQuMyw0LjMsMCwwLDEsMi4xOS41NTMsNC4wNTMsNC4wNTMsMCwwLDEsMS41MTQsMS41MjIsNC40NjksNC40NjksMCwwLDEsLjU2OSwyLjIxMyw0LjI3Miw0LjI3MiwwLDAsMS0uNTYxLDIuMiw0LjEyOSw0LjEyOSwwLDAsMS0xLjUyMiwxLjUyMkE0LjMsNC4zLDAsMCwxLDEyMy42NTMsMjEuMDgxWm0wLTEuMDc2YTMuMSwzLjEsMCwwLDAsMS42LS40MTUsMi45NjksMi45NjksMCwwLDAsMS4xMDctMS4xMzcsMy42LDMuNiwwLDAsMCwwLTMuMywyLjk5LDIuOTksMCwwLDAtMS4xMDctMS4xNDUsMy4yODYsMy4yODYsMCwwLDAtMy4yLDAsMy4wMDksMy4wMDksMCwwLDAtMS4xMTQsMS4xNDUsMy41MzksMy41MzksMCwwLDAsMCwzLjMsMi45ODksMi45ODksMCwwLDAsMS4xMTQsMS4xMzdBMy4xLDMuMSwwLDAsMCwxMjMuNjUzLDIwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLjM4NiAtMTIuNTA1KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTM0LjA5NCwyMWEuNTM0LjUzNCwwLDAsMS0uNTg0LS41ODRWMTMuMTc2YS41ODUuNTg1LDAsMSwxLDEuMTY4LDB2Ny4yMzlhLjUzNC41MzQsMCwwLDEtLjU4NC41ODRaTTEzNCwxNS44MmEzLjYsMy42LDAsMCwxLC41LTEuNzA2LDMuMzU3LDMuMzU3LDAsMCwxLDEuMTgzLTEuMTgzLDMuMTU4LDMuMTU4LDAsMCwxLDEuNjIxLS40MywyLjQ0NSwyLjQ0NSwwLDAsMSwxLjA5MS4yLjQ4NS40ODUsMCwwLDEsLjI5Mi41ODQuNDQ1LjQ0NSwwLDAsMS0uMjA3LjMwNy42NS42NSwwLDAsMS0uMzU0LjA2MWMtLjEzOC0uMDA4LS4yOTItLjAyMy0uNDY5LS4wMzFhMy4zNzgsMy4zNzgsMCwwLDAtMS41MjkuMTc3LDIuMzM0LDIuMzM0LDAsMCwwLTEuMDYuNzc2LDIuMDA2LDIuMDA2LDAsMCwwLS4zOTIsMS4yNDVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjMuNjU4IC0xMi41KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTQyLjIzNSwyMS4wMjdhLjUyNS41MjUsMCwwLDEtLjU0Ni0uNTIzLjU3MS41NzEsMCwwLDEsLjE2MS0uNDE1bDIuODI4LTMuNTM1LjY2MS44NzYtMi42OSwzLjQxMkEuNDg2LjQ4NiwwLDAsMSwxNDIuMjM1LDIxLjAyN1ptNi4wOTQsMGEuNjY4LjY2OCwwLDAsMS0uMy0uMDYxLjg0Ni44NDYsMCwwLDEtLjIzOC0uMjE1bC0yLjY1OS0zLjM4MS0uNDYxLS40TDE0MiwxMy41NzNhLjU3MS41NzEsMCwwLDEtLjE2MS0uNDE1LjYuNiwwLDAsMSwuMTQ2LS4zNzcuNDk0LjQ5NCwwLDAsMSwuNC0uMTYxLjYuNiwwLDAsMSwuNDQ2LjE4NGwyLjU4MiwzLjMuNDE1LjMzOCwyLjg1OSwzLjY1OGEuNi42LDAsMCwxLC4xNjkuNDYxLjUuNSwwLDAsMS0uMTkyLjMzOEEuNTIuNTIsMCwwLDEsMTQ4LjMyOSwyMS4wMjdabS0yLjQ5LTQtLjc1My0uNzY4LDIuNjU5LTMuMzY2YS42MjIuNjIyLDAsMCwxLC4yMzgtLjIxNS42NTUuNjU1LDAsMCwxLC4yNjktLjA2MS40OTQuNDk0LDAsMCwxLC40LjE2MS41MzMuNTMzLDAsMCwxLC4xMzEuMzg0Ljc2MS43NjEsMCwwLDEtLjE2MS40MjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjUuNTUxIC0xMi41MjgpIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3MiA1MTYpIj48cGF0aCBjbGFzcz0iYiIgZD0iTTE3LjEzOSwxNy43NDZsLjM0MS0uMjc0YTYuNzc0LDYuNzc0LDAsMCwwLDIuNTkzLTYuMTg1aDBhNS45NjcsNS45NjcsMCwwLDAtMi44NDktNC4yNzNMMTUuODUyLDYuMThhNi4wMTgsNi4wMTgsMCwwLDAtMi45NTgtLjg2MSw1Ljc1OCw1Ljc1OCwwLDAsMC0uODA5LjAzOGMtMi4wMjEuMjc0LTIuNywxLjUxOS0yLjYyMiwyLjQ3LjEwOSwxLjMwNiwxLjA2LDEuODIyLDMuMTY2LDIuMjkxLDIuNTc5LjU2OCwzLjk0NywxLjUzMyw0LjExNywzLjU4Mi4xNzUsMi4xNTMtMS4zNjMsNC4yNDUtNC44Niw0LjcyM2E3Ljg3Niw3Ljg3NiwwLDAsMS0zLjg1Mi0uMzc0TDguMDIsMTguMDNsMS4zNTMuNjc3QTcuMzM5LDcuMzM5LDAsMCwwLDE3LjEzOSwxNy43NDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC4yMjQgLTIuODAxKSIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMywxLjY2NWwtLjM0MS4yNzRBNi43NzQsNi43NzQsMCwwLDAsLjA2MSw4LjEyNWgwQTUuOTY4LDUuOTY4LDAsMCwwLDIuOTEsMTIuNGwxLjM3Mi44MzNhNi4wMTcsNi4wMTcsMCwwLDAsMi45NTguODYxLDUuNzU4LDUuNzU4LDAsMCwwLC44MDktLjAzOGMyLjAyMS0uMjc0LDIuNy0xLjUxOSwyLjYyMi0yLjQ3LS4xMDktMS4zMDYtMS4wNi0xLjgyMi0zLjE2Ni0yLjI5MUM0LjkyNiw4LjcyNiwzLjU1OSw3Ljc2MSwzLjM4OCw1LjcxMiwzLjIxMywzLjU1OCw0Ljc1MSwxLjQ2Niw4LjI0OC45ODlhNy44NzYsNy44NzYsMCwwLDEsMy44NTIuMzc0bC4wMTQuMDE5TDEwLjc2MS43QTcuMzMxLDcuMzMxLDAsMCwwLDMsMS42NjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDAxKSIvPjwvZz48L2c+PC9zdmc+",
    "tags": ["IBMS", "spaceworks", "Lucy"]
});
