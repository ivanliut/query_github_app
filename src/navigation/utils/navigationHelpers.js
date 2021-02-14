class NavigationHelper {
  /**
   * Root-navigation-ref;
   * @private
   */
  _rootNavigationRef = null;

  /**
   * Validate if Root-navigation-ref exist;
   * @returns {null|*}
   * @private
   */
  _isRootNavigationRef = () => {
    const isRef = this._rootNavigationRef && this._rootNavigationRef.current;

    if (!isRef) {
      __DEV__ && console.warn('There is no root-navigation ref');
    }

    return isRef;
  };

  /**
   * Root-navigation-ref setter;
   */
  setRootNavigationRef = (ref) => (this._rootNavigationRef = ref);

  /**
   * Get current route object;
   * @returns {null|*}
   */
  getCurrentRoute = () => this._isRootNavigationRef() && this._rootNavigationRef.current.getCurrentRoute();

  /**
   * Navigate to new route;
   * @param name
   * @param params
   * @returns {null|*}
   */
  navigate = (name, params) => this._isRootNavigationRef() && this._rootNavigationRef.current.navigate(name, params);

  /**
   * Replace the navigator state with a new state;x
   * @param params
   * @returns {null|*}
   */
  reset = (params) => this._isRootNavigationRef() && this._rootNavigationRef.current.reset(params);

  /**
   * Go back to the previous screen in the navigator;
   * @returns {null|*}
   */
  goBack = () => this._isRootNavigationRef() && this._rootNavigationRef.current.goBack();

  /**
   * Set screen options;
   * @param options
   */
  setOptions = (options) => this._isRootNavigationRef() && this._rootNavigationRef.current.setOptions(options);

  /**
   * Set screen params;
   * @param params
   * @returns {null|*|void}
   */
  setParams = (params) => this._isRootNavigationRef() && this._rootNavigationRef.current.setParams(params);
}

export const navigationHelper = new NavigationHelper();
