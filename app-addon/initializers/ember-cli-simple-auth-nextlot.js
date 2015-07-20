import Configuration from '../simple-auth-nextlot/configuration';
import Authenticator from '../simple-auth-nextlot/authenticators/nextlot';
import Authorizer from '../simple-auth-nextlot/authorizers/nextlot';
import ENV from '../config/environment';

export default {
  name:       'simple-auth-nextlot',
  before:     'simple-auth',
  initialize: function(container, application) {
    Configuration.load(container, ENV['simple-auth-nextlot'] || {});
    container.register('simple-auth-authorizer:nextlot', Authorizer);
    container.register('simple-auth-authenticator:nextlot', Authenticator);
  }
};