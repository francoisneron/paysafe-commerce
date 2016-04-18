Router.configure({
  layoutTemplate: "layout",
  notFoundTemplate: "not-found"
});

Router.route('/', {
	name: 'shop',
    template: 'shop'
});

Router.route('/checkout', {
	name: 'checkout',
    template: 'checkout'
});