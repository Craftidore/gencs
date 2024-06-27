// import config from '../lib/config.js';
import assert from 'node:assert/strict';
import {
    _testing,
    validateContainer,
    validateLabel,
    validateTextInput,
    validateTextboxInput,
    validateNumberInput,
    // validateChoiceInput,
    // validateRadioInput,
    // validateCheckboxInput
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
        const refContainer = { ...container };
        assert.strictEqual(validateContainer(container), true);
        assert.deepStrictEqual(refContainer, container);
    });
    it('label1 clean', () => {
        const label = {
            type: 'label',
            decoration: 'bold',
            fontSize: 'big',
            sizeRatio: 1
        };
        const refLabel = { ...label };
        assert.strictEqual(validateLabel(label), true, 'label object is valid');
        assert.deepStrictEqual(refLabel, label, 'label object remains unchanged');
    });
    it('textInput clean', () => {
        const textInput = {
            type: 'text-input',
            defaultValue: '',
            fontSize: 'big',
            sizeRatio: 1
        };
        const refTextInput = { ...textInput };
        assert.strictEqual(validateTextInput(textInput), true, 'textInput object is valid');
        assert.deepStrictEqual(refTextInput, textInput, 'textInput object remains unchanged');
    });
    it('textboxInput clean', () => {
        const textboxInput = {
            type: 'textbox-input',
            defaultValue: '',
            fontSize: 'big',
            sizeRatio: 2
        };
        const refTextboxInput = { ...textboxInput };
        assert.strictEqual(validateTextboxInput(textboxInput), true, 'textboxInput object is valid');
        assert.deepStrictEqual(refTextboxInput, textboxInput, 'textboxInput object remains unchanged');
    });
    it('numberInput clean', () => {
        const numberInput = {
            type: 'number-input',
            allowFloat: true,
            defaultValue: 5.213,
            fontSize: 'small',
        };
        const refNumberInput = { ...numberInput };
        assert.strictEqual(validateNumberInput(numberInput), true, 'numberInput object is valid');
        assert.deepStrictEqual(refNumberInput, numberInput, true, 'numberInput object remains unchanged');
    });
    // it('choiceInput clean', () => {
    //     const choiceInput = {
    //         type: 'choice-input',
    //         fontSize: 'medium',
    //         choices: ['Example 1', 'Example 2'],
    //         defaultValue: -1,
    //         sizeRatio: 2,
    //     };
    //     const refChoiceInput = { ...choiceInput };
    //     assert.strictEqual(validateChoiceInput(choiceInput), true, 'choiceInput object is valid');
    //     assert.deepStrictEqual(refChoiceInput, choiceInput, 'choiceInput object remains unchanged');
    // });
    // it('radioInput clean', () => {
    //     const radioInput = {
    //         type: 'radio-input', 
    //         defaultValue: 'example one', // Why is this a string, not an index...
    //         fontSize:'small',
    //         labels:['example one', 'example two'],
    //         direction:'vertical',
    //         sizeRatio:4,
    //     };
    //     const refRadioInput = { ...radioInput };
    //     assert.strictEqual(validateRadioInput(radioInput), true, 'radioInput object is valid');
    //     assert.deepStrictEqual(refRadioInput, radioInput, 'radioInput object remains unchanged');
    // });
    // it('checkboxInput clean', () => {
    //     const checkboxInput = {
    //         type: 'checkbox-input',
    //         defaultValue: 'checked',
    //         fontSize: 'small',
    //         labels: ['example one', 'example 2'],
    //         direction: 'horizontal',
    //         sizeRatio: 3,
    //     };
    //     const refCheckboxInput = { ...checkboxInput };
    //     assert.strictEqual(validateCheckboxInput(checkboxInput), true, 'checkboxInput object is valid');
    //     assert.deepStrictEqual(refCheckboxInput, checkboxInput, 'checkboxInput remains unchanged');
    // });
});

