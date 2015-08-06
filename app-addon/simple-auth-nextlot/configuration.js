import loadConfig from 'ember-simple-auth/utils/load-config';

var defaults = {
  base: {
    serverTokenEndpoint:         'https://api.nextlot.com/api/v3/tokens',
    tokenAttributeName:          'token',
    identificationAttributeName: 'email',
    siteIdAttributeName:         'site_id'
  }
};

/**
  Ember Simple Auth Device's configuration object.

  To change any of these values, set them on the application's environment
  object:

  ```js
  ENV['simple-auth-devise'] = {
    serverTokenEndpoint: '/some/other/endpoint'
  }
  ```

  @class Devise
  @namespace SimpleAuth.Configuration
  @module simple-auth/configuration
*/
export default {
  base: {
    /**
      The endpoint on the server the authenticator acquires the auth token
      and email from.

      @property serverTokenEndpoint
      @readOnly
      @static
      @type String
      @default '/users/sign_in'
    */
    serverTokenEndpoint: defaults.base.serverTokenEndpoint,

    /**
      The devise resource name.

      @property resourceName
      @readOnly
      @static
      @type String
      @default 'user'
    */
    resourceName: defaults.base.resourceName,

    /**
      The token attribute name.

      @property tokenAttributeName
      @readOnly
      @static
      @type String
      @default 'token'
    */
    tokenAttributeName: defaults.base.tokenAttributeName,

    /**
      The identification attribute name. This is the parameter that is sent to
      [serverTokenEndpoint](#SimpleAuth-Configuration-Devise-serverTokenEndpoint)
      during the authentication process, is expected in the response and is used
      by the
      [Devise authorizer](#SimpleAuth-Authorizers-Devise).

      @property identificationAttributeName
      @readOnly
      @static
      @type String
      @default 'email'
    */
    identificationAttributeName: defaults.base.identificationAttributeName,

    siteIdAttributeName: defaults.base.siteIdAttributeName,

    /**
      @method load
      @private
    */
    load: loadConfig(defaults)
  }
};
