
/**
 * Navigation and Resource Timing results.
 *
 * @see http://www.w3.org/TR/navigation-timing
 * @see http://www.w3.org/TR/resource-timing
 * @see http://caniuse.com/nav-timing
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=822480
 */
var Chatanyara = (function () {
  'use strict';

  var Kushanku = {

    performance: typeof window.performance !== 'object' || window.performance,

    /**
     * Navigation Timing API.
     *
     * @see http://www.w3.org/TR/navigation-timing/
     * @see http://caniuse.com/nav-timing
     */
    getNavigationTimings: function () {
      if (!this.performance || typeof this.performance.timing !== 'object') {
        return false;
      }
      var data = {};
      var timing = this.performance.timing;
      // navigationStart is the first event taking place in the PerformanceTiming sequence
      var navigationStart = timing.navigationStart;
      // All the keys will be set to the relative time as it gives more value than the time.
      for (var key in timing) {
        // Only numbers are interesting
        if (typeof timing[key] === 'number') {
          // Value should be the time when the given event took place,
          // but might be 0 if the event was not fired or was not completed.
          data[key] = timing[key] === 0 ? 0 : timing[key] - navigationStart;
        }
      }

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
      if (typeof this.performance.navigation === 'object') {
        var nav = this.performance.navigation;
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
      if (!this.performance || typeof this.performance.getEntriesByType !== 'function') {
        return false;
      }
      // Convert to plain Objects
      var entries = JSON.parse(JSON.stringify(this.performance.getEntriesByType('resource')));

      return entries;
    },

    /**
     * Chome only
     */
    getMemoryInfo: function () {
      if (!this.performance || typeof this.performance.memory !== 'object') {
        return false;
      }
      // Convert to plain Objects
      var memory = JSON.parse(JSON.stringify(this.performance.memory));

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
