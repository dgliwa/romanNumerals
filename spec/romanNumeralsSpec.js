describe("Prime Factor Analyzer", function () {
    beforeEach(function () {

    });

    it("returns I when given 1", function() {
        var expected = "I";

        expect(romanNumeral(1)).toEqual(expected);
    });

    it("returns II when given 2", function() {
        var expected = "II";

        expect(romanNumeral(2)).toEqual(expected);
    });

    it("returns III when given 3", function() {
        var expected = "III";

        expect(romanNumeral(3)).toEqual(expected);
    });

    it("returns IV when given 4", function() {
        var expected = "IV";

        expect(romanNumeral(4)).toEqual(expected);
    });

    it("returns V when given 5", function() {
        var expected = "V";

        expect(romanNumeral(5)).toEqual(expected);
    });

    it("returns VI when given 6", function() {
        var expected = "VI";

        expect(romanNumeral(6)).toEqual(expected);
    });

    it("returns IX when given 9", function() {
        var expected = "IX";

        expect(romanNumeral(9)).toEqual(expected);
    });
});
