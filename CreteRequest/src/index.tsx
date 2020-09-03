import * as React from "react";
import { registerLink, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, PortalContainer, Modal, SearchBox, IconButton, Wizard, IWizardStep, FormField, Label, Select, Input } from "uxp/components";
import './styles.scss';

interface ICreteRequestProps {
    uxpContext?: IContextProvider,
    onClose: () => void
}

const CreteRequestWidget: React.FunctionComponent<ICreteRequestProps> = (props) => {
    // props
    let { onClose, uxpContext } = props;

    // get root element
    let docRoot = document.getElementById("root");

    // states
    let [show, setShow] = React.useState(true);
    let [searchText, setSearchText] = React.useState("");

    let [title, setTitle] = React.useState("")
    let [requestType, setRequestType] = React.useState("")
    let [requestLabel, setRequestLabel] = React.useState("")
    let [location, setLocation] = React.useState("")
    let [level, setLevel] = React.useState("")
    let [priority, setPriority] = React.useState("")
    let [resolveBy, setResolveBy] = React.useState("")
    let [businessUnit, setBusinessUnit] = React.useState("")
    let [property, setProperty] = React.useState("")

    const onOpenModal = () => {
        docRoot.classList.add("blurred");
    }

    const onCloseModal = () => {
        docRoot.classList.remove("blurred");
        setShow(false)
        onClose()
    }

    // render additional content
    let additionalContent = <div className="modal-container-top-bar" >
        <IconButton type="arrow-left" onClick={onCloseModal} />
        <SearchBox value={searchText} onChange={val => setSearchText(val)} />
    </div>

    // wizard 
    let steps: IWizardStep[] = [
        {
            onNext: () => requestType,
            id: "select-service",
            title: "Create a Request",
            render: (props) => <FormField >
                <Label >Select a Service</Label>
                <Select
                    selected={requestType}
                    options={[
                        { label: "Maintenance Request", value: "maintenance request" },
                        { label: "Handyman Service", value: "handyman service" },
                        { label: "In-building Filming", value: "in-build filming" }
                    ]}
                    onChange={val => setRequestType(val)}
                    placeholder="-- Select Request Type --"
                />
            </FormField>
        },
        {
            onNext: () => "",
            id: "maintenance request",
            title: "Maintenance Request",
            render: (props) => <>
                <FormField>
                    <Input
                        value={requestLabel}
                        onChange={val => setRequestLabel(val)}
                        placeholder="Label your work request"
                    />
                </FormField>

                <FormField className="no-padding no-margin">
                    <FormField inline>
                        <Select
                            selected={location}
                            options={[
                                { label: "East Wing", value: "East Wing" },
                                { label: "West Wing", value: "West Wing" },
                                { label: "Lobby", value: "Lobby" }
                            ]}
                            onChange={val => setLocation(val)}
                            placeholder="Location"
                        />
                    </FormField>
                    <FormField inline >
                        <Select
                            selected={level}
                            options={[
                                { label: "Level 01", value: "Level 01" },
                                { label: "Level 02", value: "Level 02" },
                                { label: "Level 03", value: "Level 03" },
                                { label: "Level 04", value: "Level 04" }
                            ]}
                            onChange={val => setLevel(val)}
                            placeholder="Level"
                        />
                    </FormField>
                </FormField>

                <FormField className="no-padding no-margin">
                    <FormField inline >
                        <Select
                            selected={priority}
                            options={[
                                { label: "Low", value: "Low" },
                                { label: "Medium", value: "Medium" },
                                { label: "Critical", value: "Critical" }
                            ]}
                            onChange={val => setPriority(val)}
                            placeholder="Priority"
                        />
                    </FormField>

                    <FormField inline >
                        <Select
                            selected={resolveBy}
                            options={[
                                { label: "in 30 minutes", value: "in 30 minutes" },
                                { label: "in 1 hour", value: "in 1 hour" }
                            ]}
                            onChange={val => setResolveBy(val)}
                            placeholder="Resolution By"
                        />
                    </FormField>
                </FormField>

                <FormField className="no-padding no-margin">
                    <FormField inline >
                        <Select
                            selected={businessUnit}
                            options={[
                                { label: "Marketing", value: "Marketing" },
                                { label: "Production", value: "Production" }
                            ]}
                            onChange={val => setBusinessUnit(val)}
                            placeholder="Business Unit"
                        />
                    </FormField>

                    <FormField inline >
                        <Select
                            selected={property}
                            options={[
                                { label: "Business Park 01", value: "Business Park 01" },
                                { label: "Business Park 02", value: "Business Park 02" },
                                { label: "Business Park 03", value: "Business Park 03" },
                                { label: "Business Park 04", value: "Business Park 04" }
                            ]}
                            onChange={val => setProperty(val)}
                            placeholder="Property"
                        />
                    </FormField>
                </FormField>

                <FormField inline >
                    upload image
                </FormField>

            </>
        },
    ]

    return (<Modal
        show={show}
        onOpen={onOpenModal}
        onClose={onCloseModal}
        backgroundDismiss={false}
        className="create-request-modal"
        renderAdditionalContent={() => additionalContent}
        showCloseButton={false}
    >

        <div className="container">
            <Wizard
                steps={steps}
                onComplete={() => { }}
            />
        </div>

    </Modal>)
};


registerLink({
    id: "CreteRequest",
    label: "Crete Request",
    component: CreteRequestWidget
});