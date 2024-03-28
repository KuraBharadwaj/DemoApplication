import { Card, CardHeader, FlexBox, Icon} from "@ui5/webcomponents-react";
import { spacing } from '@ui5/webcomponents-react-base';
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();
    //Implement Loading in the future
    //const [loading,setLoading] = useState(false);
    const handleHeaderClick = () =>{
        //setLoading(true);
        //setTimeout(()=>{
            navigate("/vendor");
        //},2000)
    }
    return (
        <>
            <FlexBox 
                wrap="Wrap"
                style={spacing.sapUiContentPadding}>
                <Card
                    style={{
                        width: "350px"
                    }}
                    id="home_card1"
                    header={
                        <CardHeader
                            interactive
                            onClick={handleHeaderClick}
                            titleText="Vendor Management"
                            subtitleText="Application to Manage Vendor Data"
                            avatar={
                                <Icon name="employee" style={{
                                    color: "#d02139"
                                }}>

                                </Icon>
                            }>
                        </CardHeader>}>
                </Card>
            </FlexBox>
        </>
    );
}