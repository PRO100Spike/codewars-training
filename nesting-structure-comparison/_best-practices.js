Array.prototype.sameStructureAs = function (other) {
    return (this.length === other.length) ? this.every(function(el, i){
        return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
    }) : false;
};