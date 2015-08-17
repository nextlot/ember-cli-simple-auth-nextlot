import Ember from 'ember';
import DS from 'ember-data';

const { computed, on }  = Ember;
const { alias, oneWay } = computed;

export default Ember.Service.extend(Ember.Evented, {
  isAuthenticated: oneWay('session.isAuthenticated'),
  data:            alias('session.content'),
  store:           Ember.inject.service(),

  _forwardSessionEvents: on('init', function() {
    Ember.A([
      'authenticationSucceeded',
      'invalidationSucceeded'
    ]).forEach((event) => {
      this.get('session').on(event, () => {
        this.trigger(event, ...arguments);
      });
    });
  }),

  currentUser: Ember.computed('data.secure.user_id', function() {
    let self = this;
    let userId = this.get('data.secure.user_id');
    if (Ember.isEmpty(userId)) return;
    return DS.PromiseObject.create({
      promise: self.get('store').find('user', userId)
    });
  }),

  authenticate() {
    const session = this.get('session');
    return session.authenticate.apply(session, arguments);
  },

  invalidate() {
    const session = this.get('session');
    return session.invalidate.apply(session, arguments);
  },

  authorize(authorizerFactory, block) {
    const authorizer = this.container.lookup(authorizerFactory);
    authorizer.authorize(block);
  }
});
