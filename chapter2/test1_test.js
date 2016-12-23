describe('createReservation(passenger, flight)', function() {

    beforeEach(function() {
        var testPassenger = {
            firstName : '동우', lastName:'서'
        }, testFlight = {
            number : '3443',
            carrier:'대한항공',
            destnation:'울산'
        }, reservation = createReservation(testPassenger, testFlight);
    });

    it('주어진 passenger를 passengerInfo 프로퍼티에 할당한다.', function() {
        expect(reservation.passengerInfo).toBe(testPassenger);
    });

    it('주어진 flight를 flightInfo 프로퍼티에 할당한다.', function() {
        expect(reservation.flightInfo).toBe(testFlight);
    });
});