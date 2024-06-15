// import config from '../lib/config.js';
import assert from 'assert';
import {
    _testing,
    validateContainer,
} from '../lib/validation.js';
const { validateDirection, validateSizeRatio, validateTextDecoration, validateFontSize } = _testing;

describe('validation.js helper functions, clean tests', () => {
    it('direction clean', () => {
        assert.strictEqual(validateDirection('horizontal'), true, 'horizontal');
        assert.strictEqual(validateDirection('vertical'), true, 'vertical');
        assert.strictEqual(validateDirection(''), false, "''");
        assert.strictEqual(validateDirection('lfldf kjasd'), false, 'lfldf kjasd');
    });

    it('sizeRatio clean', () => {
        assert.strictEqual(validateSizeRatio(5), true, "5");
        assert.strictEqual(validateSizeRatio(28), true, "28");
        assert.strictEqual(validateSizeRatio(123921038), false, "123921038");
        assert.strictEqual(validateSizeRatio(-3), false, "-3");
        assert.strictEqual(validateSizeRatio(0), false, "0");
    });
    
    it('sizeRatio edge testing clean', () => {
        assert.strictEqual(validateSizeRatio(0), false, "0");
        assert.strictEqual(validateSizeRatio(1), true, "1");
        assert.strictEqual(validateSizeRatio(2), true, "2");
        assert.strictEqual(validateSizeRatio(99), true, "99");
        assert.strictEqual(validateSizeRatio(100), true, "100");
        assert.strictEqual(validateSizeRatio(101), true, "101");
    });

    it('textDecoration clean', () => {
        assert.strictEqual(validateTextDecoration('none'), true, 'none');
        assert.strictEqual(validateTextDecoration('bold'), true, 'bold');
        assert.strictEqual(validateTextDecoration('italic'), true, 'italic');
        assert.strictEqual(validateTextDecoration('underline'), true, 'underline');
        assert.strictEqual(validateTextDecoration('None'), true, 'None');
        assert.strictEqual(validateTextDecoration('Bold'), true, 'Bold');
        assert.strictEqual(validateTextDecoration('Italic'), true, 'Italic');
        assert.strictEqual(validateTextDecoration('Underline'), true, 'Underline');
        assert.strictEqual(validateTextDecoration(''), false, "''");
        assert.strictEqual(validateTextDecoration('sldkfj'), false, 'sldkfj');
    });

    it('fontSize clean', () => {
        assert.strictEqual(validateFontSize('big'), true, 'big');
        assert.strictEqual(validateFontSize('medium'), true, 'medium');
        assert.strictEqual(validateFontSize('small'), true, 'small');
        assert.strictEqual(validateFontSize('12px'), true, '12px');
        assert.strictEqual(validateFontSize(''), false, "''");
        assert.strictEqual(validateFontSize('lsjadkf'), false, 'lsjadkf');
        assert.strictEqual(validateFontSize('Big'), true, 'Big');
        assert.strictEqual(validateFontSize('Medium'), true, 'Medium');
        assert.strictEqual(validateFontSize('Small'), true, 'Small');
    });
});

describe('validation.js object validation functions, clean tests', () => {
    it('container1 clean', () => {
        const container = {
            type: 'container',
            direction: 'horizontal',
            sizeRatio: 42,
            decoration: 'none',
            fontSize: 'big'
        };
        assert.strictEqual(validateContainer(container), true);
        // make sure container was not modified
        assert.strictEqual(container.type, 'container');
        assert.strictEqual(container.direction, 'horizontal');
        assert.strictEqual(container.sizeRatio, 42);
        assert.strictEqual(container.decoration, 'none');
        assert.strictEqual(container.fontSize, 'big');
    });
});

