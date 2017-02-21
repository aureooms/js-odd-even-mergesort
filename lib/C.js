"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.C = C;

/**
 * Number of modules required to merge two sorted lists of size m and n.
 * See TAOC Vol 3 (Networks for Sorting).
 */
function C(m, n) {

	if (m * n <= 1) return m * n;

	var _m = m / 2 | 0;
	var _n = n / 2 | 0;

	return C(m - _m, n - _n) + C(_m, _n) + ((m + n - 1) / 2 | 0);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DLmpzIl0sIm5hbWVzIjpbIkMiLCJtIiwibiIsIl9tIiwiX24iXSwibWFwcGluZ3MiOiI7Ozs7O1FBS2dCQSxDLEdBQUFBLEM7O0FBSmhCOzs7O0FBSU8sU0FBU0EsQ0FBVCxDQUFhQyxDQUFiLEVBQWlCQyxDQUFqQixFQUFxQjs7QUFFM0IsS0FBS0QsSUFBSUMsQ0FBSixJQUFTLENBQWQsRUFBa0IsT0FBT0QsSUFBSUMsQ0FBWDs7QUFFbEIsS0FBTUMsS0FBS0YsSUFBSSxDQUFKLEdBQVEsQ0FBbkI7QUFDQSxLQUFNRyxLQUFLRixJQUFJLENBQUosR0FBUSxDQUFuQjs7QUFFQSxRQUFPRixFQUFHQyxJQUFJRSxFQUFQLEVBQVlELElBQUlFLEVBQWhCLElBQXVCSixFQUFHRyxFQUFILEVBQVFDLEVBQVIsQ0FBdkIsSUFBd0MsQ0FBRUgsSUFBSUMsQ0FBSixHQUFRLENBQVYsSUFBZ0IsQ0FBaEIsR0FBb0IsQ0FBNUQsQ0FBUDtBQUVBIiwiZmlsZSI6IkMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogTnVtYmVyIG9mIG1vZHVsZXMgcmVxdWlyZWQgdG8gbWVyZ2UgdHdvIHNvcnRlZCBsaXN0cyBvZiBzaXplIG0gYW5kIG4uXG4gKiBTZWUgVEFPQyBWb2wgMyAoTmV0d29ya3MgZm9yIFNvcnRpbmcpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQyAoIG0gLCBuICkge1xuXG5cdGlmICggbSAqIG4gPD0gMSApIHJldHVybiBtICogbiA7XG5cblx0Y29uc3QgX20gPSBtIC8gMiB8IDAgO1xuXHRjb25zdCBfbiA9IG4gLyAyIHwgMCA7XG5cblx0cmV0dXJuIEMoIG0gLSBfbSAsIG4gLSBfbiApICsgQyggX20gLCBfbiApICsgKCAoIG0gKyBuIC0gMSApIC8gMiB8IDAgKSA7XG5cbn1cblxuIl19