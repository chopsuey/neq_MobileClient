Ext.define('NeqMobile.model.Patient', {
			extend : 'Ext.data.Model',
			fields : ['id', 'name'],

			proxy : {
				type : 'ajax',
				url : 'data/Patients.json',
				reader : {
					type : 'json',
					root : 'results'
				}
			}
		});