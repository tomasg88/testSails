/**
*
* Default models file from Sails
*
*/
module.exports.models = {
	
/**
*
* Your app's default connection to your DataBase.
* 
* See config/connections.js
*
*/
connection: 'localDiskDb',

	
/**
* 
* How and whether the application will attempt to automatically
* rebuild the tables/collections/etc. in your schema
* 
* See sails.org/.../model-settings.html
*/
migrate: 'alter'
	
}