/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵstringify as stringify } from '@angular/core';
var _nextReferenceId = 0;
var MetadataOverrider = /** @class */ (function () {
    function MetadataOverrider() {
        this._references = new Map();
    }
    /**
     * Creates a new instance for the given metadata class
     * based on an old instance and overrides.
     */
    MetadataOverrider.prototype.overrideMetadata = function (metadataClass, oldMetadata, override) {
        var props = {};
        if (oldMetadata) {
            _valueProps(oldMetadata).forEach(function (prop) { return props[prop] = oldMetadata[prop]; });
        }
        if (override.set) {
            if (override.remove || override.add) {
                throw new Error("Cannot set and add/remove " + stringify(metadataClass) + " at the same time!");
            }
            setMetadata(props, override.set);
        }
        if (override.remove) {
            removeMetadata(props, override.remove, this._references);
        }
        if (override.add) {
            addMetadata(props, override.add);
        }
        return new metadataClass(props);
    };
    return MetadataOverrider;
}());
export { MetadataOverrider };
function removeMetadata(metadata, remove, references) {
    var removeObjects = new Set();
    var _loop_1 = function (prop) {
        var removeValue = remove[prop];
        if (removeValue instanceof Array) {
            removeValue.forEach(function (value) { removeObjects.add(_propHashKey(prop, value, references)); });
        }
        else {
            removeObjects.add(_propHashKey(prop, removeValue, references));
        }
    };
    for (var prop in remove) {
        _loop_1(prop);
    }
    var _loop_2 = function (prop) {
        var propValue = metadata[prop];
        if (propValue instanceof Array) {
            metadata[prop] = propValue.filter(function (value) { return !removeObjects.has(_propHashKey(prop, value, references)); });
        }
        else {
            if (removeObjects.has(_propHashKey(prop, propValue, references))) {
                metadata[prop] = undefined;
            }
        }
    };
    for (var prop in metadata) {
        _loop_2(prop);
    }
}
function addMetadata(metadata, add) {
    for (var prop in add) {
        var addValue = add[prop];
        var propValue = metadata[prop];
        if (propValue != null && propValue instanceof Array) {
            metadata[prop] = propValue.concat(addValue);
        }
        else {
            metadata[prop] = addValue;
        }
    }
}
function setMetadata(metadata, set) {
    for (var prop in set) {
        metadata[prop] = set[prop];
    }
}
function _propHashKey(propName, propValue, references) {
    var replacer = function (key, value) {
        if (typeof value === 'function') {
            value = _serializeReference(value, references);
        }
        return value;
    };
    return propName + ":" + JSON.stringify(propValue, replacer);
}
function _serializeReference(ref, references) {
    var id = references.get(ref);
    if (!id) {
        id = "" + stringify(ref) + _nextReferenceId++;
        references.set(ref, id);
    }
    return id;
}
function _valueProps(obj) {
    var props = [];
    // regular public props
    Object.keys(obj).forEach(function (prop) {
        if (!prop.startsWith('_')) {
            props.push(prop);
        }
    });
    // getters
    var proto = obj;
    while (proto = Object.getPrototypeOf(proto)) {
        Object.keys(proto).forEach(function (protoProp) {
            var desc = Object.getOwnPropertyDescriptor(proto, protoProp);
            if (!protoProp.startsWith('_') && desc && 'get' in desc) {
                props.push(protoProp);
            }
        });
    }
    return props;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGFfb3ZlcnJpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS90ZXN0aW5nL3NyYy9tZXRhZGF0YV9vdmVycmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPdEQsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFFekI7SUFBQTtRQUNVLGdCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztJQTBCL0MsQ0FBQztJQXpCQzs7O09BR0c7SUFDSCw0Q0FBZ0IsR0FBaEIsVUFDSSxhQUFxQyxFQUFFLFdBQWMsRUFBRSxRQUE2QjtRQUN0RixJQUFNLEtBQUssR0FBYyxFQUFFLENBQUM7UUFDNUIsSUFBSSxXQUFXLEVBQUU7WUFDZixXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFTLFdBQVksQ0FBQyxJQUFJLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO1NBQ3BGO1FBRUQsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ2hCLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFO2dCQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUE2QixTQUFTLENBQUMsYUFBYSxDQUFDLHVCQUFvQixDQUFDLENBQUM7YUFDNUY7WUFDRCxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQixjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NB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LEVBQUU7Z0JBQ3ZELEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge8m1c3RyaW5naWZ5IGFzIHN0cmluZ2lmeX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01ldGFkYXRhT3ZlcnJpZGV9IGZyb20gJy4vbWV0YWRhdGFfb3ZlcnJpZGUnO1xuXG50eXBlIFN0cmluZ01hcCA9IHtcbiAgW2tleTogc3RyaW5nXTogYW55XG59O1xuXG5sZXQgX25leHRSZWZlcmVuY2VJZCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YU92ZXJyaWRlciB7XG4gIHByaXZhdGUgX3JlZmVyZW5jZXMgPSBuZXcgTWFwPGFueSwgc3RyaW5nPigpO1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIG1ldGFkYXRhIGNsYXNzXG4gICAqIGJhc2VkIG9uIGFuIG9sZCBpbnN0YW5jZSBhbmQgb3ZlcnJpZGVzLlxuICAgKi9cbiAgb3ZlcnJpZGVNZXRhZGF0YTxDIGV4dGVuZHMgVCwgVD4oXG4gICAgICBtZXRhZGF0YUNsYXNzOiB7bmV3IChvcHRpb25zOiBUKTogQzt9LCBvbGRNZXRhZGF0YTogQywgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8VD4pOiBDIHtcbiAgICBjb25zdCBwcm9wczogU3RyaW5nTWFwID0ge307XG4gICAgaWYgKG9sZE1ldGFkYXRhKSB7XG4gICAgICBfdmFsdWVQcm9wcyhvbGRNZXRhZGF0YSkuZm9yRWFjaCgocHJvcCkgPT4gcHJvcHNbcHJvcF0gPSAoPGFueT5vbGRNZXRhZGF0YSlbcHJvcF0pO1xuICAgIH1cblxuICAgIGlmIChvdmVycmlkZS5zZXQpIHtcbiAgICAgIGlmIChvdmVycmlkZS5yZW1vdmUgfHwgb3ZlcnJpZGUuYWRkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNldCBhbmQgYWRkL3JlbW92ZSAke3N0cmluZ2lmeShtZXRhZGF0YUNsYXNzKX0gYXQgdGhlIHNhbWUgdGltZSFgKTtcbiAgICAgIH1cbiAgICAgIHNldE1ldGFkYXRhKHByb3BzLCBvdmVycmlkZS5zZXQpO1xuICAgIH1cbiAgICBpZiAob3ZlcnJpZGUucmVtb3ZlKSB7XG4gICAgICByZW1vdmVNZXRhZGF0YShwcm9wcywgb3ZlcnJpZGUucmVtb3ZlLCB0aGlzLl9yZWZlcmVuY2VzKTtcbiAgICB9XG4gICAgaWYgKG92ZXJyaWRlLmFkZCkge1xuICAgICAgYWRkTWV0YWRhdGEocHJvcHMsIG92ZXJyaWRlLmFkZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgbWV0YWRhdGFDbGFzcyg8YW55PnByb3BzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVNZXRhZGF0YShtZXRhZGF0YTogU3RyaW5nTWFwLCByZW1vdmU6IGFueSwgcmVmZXJlbmNlczogTWFwPGFueSwgc3RyaW5nPikge1xuICBjb25zdCByZW1vdmVPYmplY3RzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGZvciAoY29uc3QgcHJvcCBpbiByZW1vdmUpIHtcbiAgICBjb25zdCByZW1vdmVWYWx1ZSA9IHJlbW92ZVtwcm9wXTtcbiAgICBpZiAocmVtb3ZlVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmVtb3ZlVmFsdWUuZm9yRWFjaChcbiAgICAgICAgICAodmFsdWU6IGFueSkgPT4geyByZW1vdmVPYmplY3RzLmFkZChfcHJvcEhhc2hLZXkocHJvcCwgdmFsdWUsIHJlZmVyZW5jZXMpKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZU9iamVjdHMuYWRkKF9wcm9wSGFzaEtleShwcm9wLCByZW1vdmVWYWx1ZSwgcmVmZXJlbmNlcykpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3QgcHJvcCBpbiBtZXRhZGF0YSkge1xuICAgIGNvbnN0IHByb3BWYWx1ZSA9IG1ldGFkYXRhW3Byb3BdO1xuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbWV0YWRhdGFbcHJvcF0gPSBwcm9wVmFsdWUuZmlsdGVyKFxuICAgICAgICAgICh2YWx1ZTogYW55KSA9PiAhcmVtb3ZlT2JqZWN0cy5oYXMoX3Byb3BIYXNoS2V5KHByb3AsIHZhbHVlLCByZWZlcmVuY2VzKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVtb3ZlT2JqZWN0cy5oYXMoX3Byb3BIYXNoS2V5KHByb3AsIHByb3BWYWx1ZSwgcmVmZXJlbmNlcykpKSB7XG4gICAgICAgIG1ldGFkYXRhW3Byb3BdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRNZXRhZGF0YShtZXRhZGF0YTogU3RyaW5nTWFwLCBhZGQ6IGFueSkge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gYWRkKSB7XG4gICAgY29uc3QgYWRkVmFsdWUgPSBhZGRbcHJvcF07XG4gICAgY29uc3QgcHJvcFZhbHVlID0gbWV0YWRhdGFbcHJvcF07XG4gICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBtZXRhZGF0YVtwcm9wXSA9IHByb3BWYWx1ZS5jb25jYXQoYWRkVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXRhZGF0YVtwcm9wXSA9IGFkZFZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRNZXRhZGF0YShtZXRhZGF0YTogU3RyaW5nTWFwLCBzZXQ6IGFueSkge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gc2V0KSB7XG4gICAgbWV0YWRhdGFbcHJvcF0gPSBzZXRbcHJvcF07XG4gIH1cbn1cblxuZnVuY3Rpb24gX3Byb3BIYXNoS2V5KHByb3BOYW1lOiBhbnksIHByb3BWYWx1ZTogYW55LCByZWZlcmVuY2VzOiBNYXA8YW55LCBzdHJpbmc+KTogc3RyaW5nIHtcbiAgY29uc3QgcmVwbGFjZXIgPSAoa2V5OiBhbnksIHZhbHVlOiBhbnkpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWx1ZSA9IF9zZXJpYWxpemVSZWZlcmVuY2UodmFsdWUsIHJlZmVyZW5jZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIGAke3Byb3BOYW1lfToke0pTT04uc3RyaW5naWZ5KHByb3BWYWx1ZSwgcmVwbGFjZXIpfWA7XG59XG5cbmZ1bmN0aW9uIF9zZXJpYWxpemVSZWZlcmVuY2UocmVmOiBhbnksIHJlZmVyZW5jZXM6IE1hcDxhbnksIHN0cmluZz4pOiBzdHJpbmcge1xuICBsZXQgaWQgPSByZWZlcmVuY2VzLmdldChyZWYpO1xuICBpZiAoIWlkKSB7XG4gICAgaWQgPSBgJHtzdHJpbmdpZnkocmVmKX0ke19uZXh0UmVmZXJlbmNlSWQrK31gO1xuICAgIHJlZmVyZW5jZXMuc2V0KHJlZiwgaWQpO1xuICB9XG4gIHJldHVybiBpZDtcbn1cblxuXG5mdW5jdGlvbiBfdmFsdWVQcm9wcyhvYmo6IGFueSk6IHN0cmluZ1tdIHtcbiAgY29uc3QgcHJvcHM6IHN0cmluZ1tdID0gW107XG4gIC8vIHJlZ3VsYXIgcHVibGljIHByb3BzXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgIGlmICghcHJvcC5zdGFydHNXaXRoKCdfJykpIHtcbiAgICAgIHByb3BzLnB1c2gocHJvcCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBnZXR0ZXJzXG4gIGxldCBwcm90byA9IG9iajtcbiAgd2hpbGUgKHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSkge1xuICAgIE9iamVjdC5rZXlzKHByb3RvKS5mb3JFYWNoKChwcm90b1Byb3ApID0+IHtcbiAgICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBwcm90b1Byb3ApO1xuICAgICAgaWYgKCFwcm90b1Byb3Auc3RhcnRzV2l0aCgnXycpICYmIGRlc2MgJiYgJ2dldCcgaW4gZGVzYykge1xuICAgICAgICBwcm9wcy5wdXNoKHByb3RvUHJvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHByb3BzO1xufVxuIl19