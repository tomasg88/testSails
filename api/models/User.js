/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'User',
    attributes: {
      name: {
          type: 'string',
          required: true
          //maxLength: 45
      },
      title: {
          type: 'string',
          required: true
      },
      email: {
          type: 'string',
          required: true,
          email: true,
          unique: true
          //maxLength: 45
      },
      password: {
          type: 'string',
          required: true
          //maxLength: 45
      },
      lastLoggedIn: {
          type: 'date',
          required: true,
          defaultsTo: new Date(0)
      },
      gravatarUrl: {
          type: 'string'
          //maxLength: 100
      }
    }
};

