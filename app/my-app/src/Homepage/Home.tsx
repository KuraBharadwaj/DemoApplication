import { Card, CardHeader, FlexBox, Icon, Text } from "@ui5/webcomponents-react";
import { spacing } from '@ui5/webcomponents-react-base';

export function Home() {
    return (
        <>
            <FlexBox

                wrap="Wrap"
                style={spacing.sapUiContentPadding}
            >
                <Card
                    style={{
                        width: "350px"
                    }}
                    id="home_card1"
                    header={
                        <CardHeader
                            titleText="Vendor Management"
                            subtitleText="Application to Manage Vendor Data"
                            avatar={
                                <Icon name="employee" style={{
                                    color: "#d02139"
                                }}>

                                </Icon>
                            }>

                        </CardHeader>
                    }
                >
                </Card>

            </FlexBox>
        </>
    );
}