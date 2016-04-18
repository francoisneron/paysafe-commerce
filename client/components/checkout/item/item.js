Template.item.events({

  	'click .remove-item': function(event, template) {

	    console.log("delete");

	    Products.update(this, {
	        $set: {inCart: false}
	    });

	    Cart.remove(this);

    },

	'input .counter': function(event, template) {
		var currentCount = $(event.currentTarget).val();

		console.log(currentCount);

    	Cart.update({ _id: this._id }, { $set: { 'counter': currentCount } });
    }
});