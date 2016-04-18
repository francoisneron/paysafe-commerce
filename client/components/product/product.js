Template.product.events({

  'click .add-to-cart': function(event, template) {

    var id = template.data._id;

    if(Products.findOne(id).inCart) {
      // remove
      Products.update(id, {
        $set: {inCart: false}
      });

      Cart.remove(id);
    }
    else {
      // add
      Products.update(id, {
        $set: {inCart: true}
      });

      template.data.counter = 1;
      
      Cart.insert(template.data);
    }

  }

});


Template.product.helpers({

  data: function() {
    return this;
  }

});