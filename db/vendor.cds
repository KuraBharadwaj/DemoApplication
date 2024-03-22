using {managed} from '@sap/cds/common';

entity SupplierMaster : managed {
    AccountNumber : String(10);
    Country       : String(3);
    Name1         : String(35);
    City          : String(35);
    District      : String(35);
    PostalCode    : String(10);
    State         : String(3);
    Address1      : String(35);
    Address2      : String(35);
}
