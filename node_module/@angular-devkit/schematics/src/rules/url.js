"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const url_1 = require("url");
function url(urlString) {
    const url = url_1.parse(urlString);
    return (context) => context.engine.createSourceFromUrl(url, context)(context);
}
exports.url = url;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9zY2hlbWF0aWNzL3NyYy9ydWxlcy91cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCw2QkFBNEI7QUFJNUIsU0FBZ0IsR0FBRyxDQUFDLFNBQWlCO0lBQ25DLE1BQU0sR0FBRyxHQUFHLFdBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU3QixPQUFPLENBQUMsT0FBeUIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEcsQ0FBQztBQUpELGtCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICd1cmwnO1xuaW1wb3J0IHsgU2NoZW1hdGljQ29udGV4dCwgU291cmNlIH0gZnJvbSAnLi4vZW5naW5lL2ludGVyZmFjZSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVybCh1cmxTdHJpbmc6IHN0cmluZyk6IFNvdXJjZSB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKHVybFN0cmluZyk7XG5cbiAgcmV0dXJuIChjb250ZXh0OiBTY2hlbWF0aWNDb250ZXh0KSA9PiBjb250ZXh0LmVuZ2luZS5jcmVhdGVTb3VyY2VGcm9tVXJsKHVybCwgY29udGV4dCkoY29udGV4dCk7XG59XG4iXX0=