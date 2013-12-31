
/**
 * Navigation and Resource Timing results.
 *
 * @see http://www.w3.org/TR/navigation-timing
 * @see http://www.w3.org/TR/resource-timing
 * @see http://caniuse.com/nav-timing
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=822480
 */
var Chatanyara = (function () {

  var Kushanku = {
  
    performance: typeof window.performance !== 'object' || window.performance,
  
    /**
     * Navigation Timing API.
     *
     * @see http://www.w3.org/TR/navigation-timing/
     * @see http://caniuse.com/nav-timing
     */
    getNavigationTimings: function () {
      if (!this.performance ||
          typeof window.performance.timing !== 'object') {
        return;
      }
      var data = {};
      // Only numbers are interesting
      // navigationStart is the first event taking place in the PerformanceTiming sequence
      var navigationStart = window.performance.timing.navigationStart;
      // All the keys will be set to the relative time as it gives more value than the time.
      $.each(window.performance.timing, function (key, value) {
        if (typeof value === 'number') {
          // Value should be the time when the given event took place, 
          // but might be 0 if the event was not fired or was not completed.
          data[key] = value === 0 ? 0 : value - navigationStart;
        }
      });

    
      /*
      interface PerformanceNavigation {
        const unsigned short TYPE_NAVIGATE = 0;
        const unsigned short TYPE_RELOAD = 1;
        const unsigned short TYPE_BACK_FORWARD = 2;
        const unsigned short TYPE_RESERVED = 255;
        readonly attribute unsigned short type;
        readonly attribute unsigned short redirectCount;
      };
      */
      if (typeof window.performance.navigation === 'object') {
        var nav = window.performance.navigation;
        data.redirectCount = nav.redirectCount;
        data.navigationType = nav.type < 3 ? ['NAVIGATE', 'RELOAD', 'BACK_FORWARD'][nav.type] : nav.type;
      }
      return data;
    },

    /**
     * Resource Timing API.
     *
     * @see http://www.w3.org/TR/resource-timing
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=822480
     */
    getResourceTimings: function () {
      if (!this.performance ||
          typeof window.performance.getEntriesByType !== 'function') {
        return;
      }
      // Convert to plain Objects
      var entries = JSON.parse(JSON.stringify(window.performance.getEntriesByType('resource')));

      return entries;
    },

    /**
     * Chome only
     */
    getMemoryInfo: function () {
      if (!this.performance ||
          typeof window.performance.memory !== 'object') {
        return false;
      }
      // Convert to plain Objects
      var memory = JSON.parse(JSON.stringify(window.performance.memory));

      return memory;
    }
  };
  
  var Sai = {
    parse: function () {
      return {
        url: window.location.pathname,
        userAgent: window.navigator.userAgent,
        navigation: Kushanku.getNavigationTimings(),
        resource: Kushanku.getResourceTimings(),
        memory: Kushanku.getMemoryInfo()
      };
    }
  };
  
  return Sai;
}());