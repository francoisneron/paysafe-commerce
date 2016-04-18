Template.cart.helpers({

  items: function() {
    return Cart.find();
  },

  cartTotal: function() {
    var total = 0;

    Cart.find().map(function(item) {
      total += item.price;
    });

    return total;
  },

  cartCurrency: function() {
    return Session.get('currency');
  }

});

Template.cart.events({

  'click .cart-checkout': function(event, template) {
    Router.go('/checkout');
  }
  ,
  'click .cart-quick-checkout': function(event, template) {
    Router.go('/checkout');
  }

});