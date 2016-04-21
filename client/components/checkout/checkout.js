

Template.checkout.helpers({

  items: function() {
    return Cart.find();
  },

  cartTotal: function() {
    var total = 0;

    Cart.find().map(function(item) {
      total += item.price * item.counter;
    });

    Session.set('totalAmount', total);

    return total;
  },

  cartCurrency: function() {
    return Session.get('currency');
  }

});

Template.checkout.events({

  'click #back-shopping': function(event, template) {
    history.back()
  },

  'click #buy-checkout': function(event, template) {
    
    var total = Session.get('totalAmount');
    var currency = Session.get('currency');

    console.log(total);

    $("body").addClass("loading");

    Meteor.call('submitOrders', total, currency, function(err,res){ 
      if ( err ) {
      // If our API returned an error, we'd see it in the console.
        console.log( err );
      } else {
        console.log( res );
      }
      $("body").removeClass("loading");
    });
  }
});

