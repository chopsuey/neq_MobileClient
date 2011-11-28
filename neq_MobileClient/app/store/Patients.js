Ext.define('NeqMobile.store.Patients', {
    extend: 'Ext.data.Store',
    requires: 'NeqMobile.model.Patient',
    model: 'NeqMobile.model.Patient',
    autoLoad: true
});