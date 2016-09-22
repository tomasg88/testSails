/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    /**
     * Signup on server side
     * 1. Encrypts password
     * 2. Generates gravatarUrl for each user, depending on the email
     * 3. Saves the user in the DB with User.Create passing along all info
     */
    signup: function(req, res){
        
        var Passwords = require('machinepack-passwords');
        
        Passwords.encryptPassword({
            password: req.param('password')
        }).exec({
            // An unexpected error occurred.
            error: function (err){
                res.negotiate(err);
            },
            // OK.
            success: function (encryptedPassword){
                var Gravatar = require('machinepack-gravatar');
                Gravatar.getImageUrl({
                    emailAddress: req.param('email'),
                    useHttps: true
                }).exec({
                    error: function (err){
                        res.negotiate(err);
                    },
                    success: function(gravatarUrl){
                        // User.create(objJson, callbaks)
                        User.create({
                            name: req.param('name'),
                            title: req.param('title'),
                            email: req.param('email'),
                            password: encryptedPassword,
                            gravatarUrl: gravatarUrl,
                            lastLoggedIn: new Date()
                        }, function userCreated(err, newUser){
                            if (err){
                                if (err.invalidAttributes && err.invalidAttributes.email && err.invalidAttributes.email[0]
                                   && err.invalidAttributes.email[0].rule === 'unique'){
                                    return res.emailAddressInUse();
                                }
                            } else {
                                return res.json({
                                    id: newUser.id
                                });
                            }
                        })
                    }
                }); 
            }
        });     
    },
    
    getByCredentials: function(req, res){
        var Mysql = require('sails-mysql'),
            Passwords = require('machinepack-passwords'),
            pEmail = req.param('email'),
            pPassword = req.param('password');
        User.find().exec(function(err, users){
            if(err){
                return res.json(err);
            }
            return res.json(users);
        });
    }
};

