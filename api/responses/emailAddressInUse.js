module.exports = function emailAddressInUse() {
    var res = this.res;
    return res.send(409, 'Email in use');
}