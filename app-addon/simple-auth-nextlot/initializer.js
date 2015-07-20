import Configuration from './configuration';
import getGlobalConfig from 'simple-auth/utils/get-global-config';
import Authenticator from 'simple-auth-nextlot/authenticators/nextlot';
import Authorizer from 'simple-auth-nextlot/authorizers/nextlot';

export default {
  name:       'simple-auth-nextlot',
  before:     'simple-auth',
  initialize: function(container, application) {
    var config = getGlobalConfig('simple-auth-nextlot');
    Configuration.load(container, config);
    application.register('simple-auth-authorizer:nextlot', Authorizer);
    application.register('simple-auth-authenticator:nextlot', Authenticator);
  }
};
