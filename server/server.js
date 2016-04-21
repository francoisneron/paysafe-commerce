Future = Npm.require('fibers/future');

var url = Meteor.settings.paysafe_service_url;
var key = Meteor.settings.paysafe_api_key;

Meteor.methods({
    getStatus: function(totalAmount, currencyCode) {
      	var myFuture = new Future();
      	var urlStatus = url + "monitor";
        // Do call here, return value with Future
        HTTP.get(urlStatus, {"auth": key, "content": "application/json"}, function( err, res ){
			if(err) {
    			myFuture.throw(err);
  			}

            myFuture.return(res);
        });

        // Force method to wait on Future return
        return myFuture.wait();
    },

    submitOrders: function(totalAmount, currencyCode) {
    	var myFuture = new Future();

    	var urlOrders = url + "v1/orders";

    	var json = {
		  "merchantRefNum" : "ABCDE123451221321323213213",
		  "currencyCode"   : "CAD",
		  "totalAmount"    : totalAmount*100
		};

    	// Do call here, return value with Future
        HTTP.post(urlOrders, {"auth": key, "content": "application/json", "data": json}, function( err, res ){
			if(err) {
    			myFuture.throw(err);
  			}

            myFuture.return(JSON.stringify(res));
        });

        // Force method to wait on Future return
        return myFuture.wait();
    }
});