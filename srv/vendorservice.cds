using vendormanagement as vm from '../db/schema';


service vendorservice @(path:'service/vendor' ){
    entity vendors as projection on vm.SupplierMaster;
}