Ext.Loader.setConfig({
    enabled:true
});
// Ext.application({
// name: 'Sencha',
//
// launch: function() {
// alert('launched');
// }
// });

Ext.require(['Ext.XTemplate', 'Ext.Panel', 'Ext.Button', 'Ext.List']);


Ext.application({
    name:'NeqMobile',
    appFolder:'app',
    controllers:['Home'],
    // autoCreateViewport : true,
    launch:function () {
        Ext.create('NeqMobile.view.Viewport')
        {
        }
        ;
    },

    initialize:function () {
        console.log('app initialize');
        this.callParent();
    }

    // var mybutton = Ext.create('Ext.Button', {
    // text: 'Button'
    // });

    // Ext.Viewport.add(mybutton);

    // This is fired as soon as the page is ready

});
    
