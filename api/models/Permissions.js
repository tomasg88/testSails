/**
 * Permissions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:"Permissions",
  attributes: {
      id:{
          type:"string",
          required:true,
          unique:true
      },
      namePermission:{
          type:"string",
          required:true
      },
      descPermission:{
          type:"string",
          required:false,
      }
  }
};
