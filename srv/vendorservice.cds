using vendormanagement as vm from '../db/schema';


service vendorservice @(path:'service/vendor' ){
    entity suppliers as projection on vm.SupplierMaster;
}