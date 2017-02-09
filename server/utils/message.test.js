var expect = require('expect');

var { generateMessage } = require('./message');
var { generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'me';
        var text = 'message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'me';
        var long = 1;
        var lat = 2;
        var message = generateLocationMessage(from, long, lat);

        expect(message).toInclude({
            from,
            url: `https://www.google.com/maps?q=1,2`
        });
    });
});