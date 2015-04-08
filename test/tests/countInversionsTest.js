describe('count inversions', function () {
    var countInversions = require('../../public/app/countInversions');
    var expect = require('chai').expect;

    describe('from array', function () {
        it('should return 3 inversions', function () {
            var a = [2, 4, 1, 3, 5];
            expect(countInversions.count(a)).to.be.equal(3);
            expect(a).to.eql([1,2,3,4,5]);
        });
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
        it('15 numbers should return 56 inversions', function () {
            var a = [9, 12, 3, 1, 6, 8, 2, 5, 14, 13, 11, 7, 10, 4, 0];
            expect(countInversions.count(a)).to.be.equal(56);
            expect(a).to.eql([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        });
        it('50 numbers should return 590 inversions', function () {
            var a = [37, 7, 2, 14, 35, 47, 10, 24, 44, 17, 34, 11, 16, 48, 1, 39, 6, 33, 43, 26, 40, 4, 28, 5, 38, 41, 42, 12, 13, 21, 29, 18, 3, 19, 0, 32, 46, 27, 31, 25, 15, 36, 20, 8, 9, 49, 22, 23, 30, 45];
            expect(countInversions.count(a)).to.be.equal(590);
        });
        it('100 numbers should return 2372 inversions', function () {
            var a = [4, 80, 70, 23, 9, 60, 68, 27, 66, 78, 12, 40, 52, 53, 44, 8, 49, 28, 18, 46, 21, 39, 51, 7, 87, 99, 69, 62, 84, 6, 79, 67, 14, 98, 83, 0, 96, 5, 82, 10, 26, 48, 3, 2, 15, 92, 11, 55, 63, 97, 43, 45, 81, 42, 95, 20, 25, 74, 24, 72, 91, 35, 86, 19, 75, 58, 71, 47, 76, 59, 64, 93, 17, 50, 56, 94, 90, 89, 32, 37, 34, 65, 1, 73, 41, 36, 57, 77, 30, 22, 13, 29, 38, 16, 88, 61, 31, 85, 33, 54];
            expect(countInversions.count(a)).to.be.equal(2372 );
        });
        it('duplicate values 8 inversions', function () {
            var a = [1, 3, 5, 2, 4, 6, 1];
            expect(countInversions.count(a)).to.be.equal(8);
        });
    });

    describe('15 number file', function () {
        it('should return number', function () {
            // cwd will change depending on where launch from
            var file = process.cwd() + '/test/resources/15numbers.txt';
            var a = countInversions.readArrayFromFile(file);
            var number = countInversions.count(a);
            expect(number).to.equal(56);
        });
    });

    describe('small file', function () {
        it('should return number', function () {
            // cwd will change depending on where launch from
            var file = process.cwd() + '/test/resources/SmallArray.txt';
            var a = countInversions.readArrayFromFile(file);
            var number = countInversions.count(a);
            expect(number).to.equal(28);
            console.log(number);
        });
    });

    describe('large file sorted asc', function () {
        it('should return number', function () {
            // cwd will change depending on where launch from
            var file = process.cwd() + '/test/resources/1kSortedAsc.txt';
            var a = countInversions.readArrayFromFile(file);
            var number = countInversions.count(a);
            expect(number).to.equal(0);
        });
    });

    describe('large file sorted desc', function () {
        it('should return number', function () {
            // cwd will change depending on where launch from
            var file = process.cwd() + '/test/resources/1kSortedDesc.txt';
            var a = countInversions.readArrayFromFile(file);
            var number = countInversions.count(a);
            expect(number).to.equal(4999950000);
        });
    });

    describe('large file', function () {
        it('should return number', function () {
            // cwd will change depending on where launch from
            var file = process.cwd() + '/test/resources/IntegerArray.txt';
            var a = countInversions.readArrayFromFile(file);
            var number = countInversions.count(a);
            expect(number).to.equal(2407905288);
            //2407905288 is right answer
            console.log(number);
        });
    });
});