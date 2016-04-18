Template.checkout.helpers({

  items: function() {
    return Cart.find();
  },

  cartTotal: function() {
    var total = 0;

    Cart.find().map(function(item) {
      total += item.price * item.counter;
    });

    return total;
  },

  cartCurrency: function() {
    return Session.get('currency');
  }

});

Template.checkout.events({

  'click #back-shopping': function(event, template) {
    history.back()
  }
});

