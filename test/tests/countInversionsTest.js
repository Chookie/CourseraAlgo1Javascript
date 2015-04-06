describe('countInversions', function () {
    var countInversions = require('../../public/app/countInversions');
    var expect = require('chai').expect;

    describe('count', function () {
        it('should return 3 inversions', function () {
            var a = [1,3,5,2,4,6];
            expect(countInversions.count(a)).to.be.equal(3);
            expect(a).to.eql([1,2,3,4,5,6]);
        });
        it('should return 0 inversions', function () {
            var a = [1,2,3,4,5,6];
            expect(countInversions.count(a)).to.be.equal(0);
            expect(a).to.eql([1,2,3,4,5,6]);
        });
        it('should return 15 inversions', function () {
            var a = [6,5,4,3,2,1];
            expect(countInversions.count(a)).to.be.equal(15);
            expect(a).to.eql([1,2,3,4,5,6]);
        });
    });
});