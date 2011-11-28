Ext.require(['NeqMobile.view.patient.List']);

Ext.define('NeqMobile.view.Viewport', {
        extend:'Ext.Panel',
        requires:['NeqMobile.view.patient.List'],

        config:{

            fullscreen:true,
            layout:'fit',
            items:[
                {
                    xtype:'patientlist',
                    title:'Patients',
                    iconCls:'star'
                }
            ]

        }
    }

);

// Ext.define('MH.view.Viewport', {
// extend: 'Ext.Panel'
// ,config: {
// fullscreen: true
// ,html: 'Hello!'
// }
// });
//		
//		

// [
// {
// xtype : 'panel',
// layout : {
// type : 'hbox',
// align : 'stretch'
// },
// items : [{
// xtype : 'patientlist',
// flex: 5
// }]
// },
// {
//					
// xtype: 'panel',
// title: 'Users',
// html : 'List of users will go here'}]
