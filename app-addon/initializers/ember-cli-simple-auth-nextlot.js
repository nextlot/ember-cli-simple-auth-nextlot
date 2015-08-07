import Configuration from '../simple-auth-nextlot/configuration';
import Authenticator from '../simple-auth-nextlot/authenticators/nextlot';
import Authorizer from '../simple-auth-nextlot/authorizers/nextlot';
import SessionService from '../simple-auth-nextlot/services/nextlot-session';
import ENV from '../config/environment';

export default {
  name:       'simple-auth-nextlot',
  before:     'simple-auth',
  initialize: function(registry, application) {
    Configuration.load(ENV['simple-auth'].nextlot || {});
    registry.register('simple-auth-authenticator:nextlot', Authenticator);
    registry.register('simple-auth-authorizer:nextlot', Authorizer);
    registry.register('service:nextlot-session', SessionService);
  }
};
