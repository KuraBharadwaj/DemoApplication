import { AnalyticalTable } from "@ui5/webcomponents-react";
import { useEffect, useState } from "react";
import { Vendors } from '../../models/Vendors';
import { fetchVendors } from '../../services/vendorpageservices'

export function Vendor() {
    const [vendors, setVendors] = useState<Vendors[]>(
        []
    );
    useEffect(() => {
        const loadData = async () => {
            const data = await fetchVendors();
            setVendors(data);
        };
        loadData();
    }, []);
    // Declare the columns of Vendor API. 
    const vdcolumns = [
        { Header: "Account Number", accessor: "AccountNumber" },
        { Header: "Country", accessor: "Country" },
        { Header: "Name", accessor: "Name1" },
        { Header: "City", accessor: "City" },
        { Header: "District", accessor: "District" },
        { Header: "PostalCode", accessor: "PostalCode" },
        { Header: "State", accessor: "State" },
        { Header: "Address1", accessor: "Address1" },
        { Header: "Address2", accessor: "Address2" }
    ]
    return (
        <>
            <AnalyticalTable data={vendors}
                columns={vdcolumns}>
            </AnalyticalTable>
        </>
    );
}