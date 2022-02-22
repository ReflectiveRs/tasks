Array.prototype.sameStructureAs = function (other) {
    if (this.length !== other.length ) {
        return false;
    }
    for (let i = 0 ; i<other.length; i++) {
        if (Array.isArray(other[i]) !== Array.isArray(this[i])) {
            return false;
        }
        if (Array.isArray(other[i])) {
            if (this[i].length !== other[i].length)
                return false;
            if (!this[i].sameStructureAs(other[i]))
                return false;
        }
    }
    return true;
};
  
  
console.log([[[],[]]].sameStructureAs( [[1,1]] ));                                  // false
console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));                            // true
console.log([ 1, [ 1, 1, [1,2,3] ] ].sameStructureAs( [ 2, [ 2, 2, [2,3,3] ] ] ));  // true