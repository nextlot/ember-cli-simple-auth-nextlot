import Ember from 'ember';
import DS from 'ember-data';

const { computed, on }  = Ember;
const { alias, oneWay } = computed;

export default Ember.Service.extend(Ember.Evented, {
  isAuthenticated: oneWay('session.isAuthenticated'),
  content:         alias('session.content'),
  store:           Ember.inject.service(),

  _forwardSessionEvents: on('init', function() {
    const session = this.get('session');
    let _this = this;
    Ember.A([
      'sessionAuthenticationSucceeded',
      'sessionAuthenticationFailed',
      'sessionInvalidationSucceeded',
      'sessionInvalidationFailed',
      'authorizationFailed'
    ]).forEach((event) => {
      session.on(event, () => {
        _this.trigger(event, ...arguments);
      });
    });
  }),
  
  currentUser: Ember.computed('content.secure.user_id', function() {
    let self = this;
    let userId = this.get('content.secure.user_id');
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
  }
});
