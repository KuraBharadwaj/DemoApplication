import { DynamicPage, DynamicPageHeader, FlexBox, Card, CardHeader, Icon } from "@ui5/webcomponents-react";

export function MyApp() {
    return (
        <DynamicPage
            headerContent={<DynamicPageHeader>
                <FlexBox wrap="Wrap" direction="Column" >
                    <FlexBox>
                        <img width="75px" height="60px" src="../media/UC_Logo.jpg"></img>
                    </FlexBox>
                </FlexBox>
            </DynamicPageHeader>}
            children={<Card id="myapp_card1"
                style={{
                    width: "300px"
                }}
                header={<CardHeader avatar={<Icon style={{
                    color: "blue"
                }} name="employee"></Icon>} titleText="Vendor Management"></CardHeader>}

            >
            </Card>}
        >
        </DynamicPage>
    )
};