// import config from '../lib/config.js';
import {
    validateDirection,
    validateSizeRatio,
    validateTextDecoration,
    validateFontSize,
    validateContainer,
} from '../validation.js';

describe('validation.js helper functions, clean tests', () => {
    it('direction clean', () => {
        expect(validateDirection('horizontal')).toStrictEqual(true);
        expect(validateDirection('vertical')).toStrictEqual(true);
        expect(validateDirection('')).toStrictEqual(false);
        expect(validateDirection('lfldf kjasd')).toStrictEqual(false);
    });

    it('sizeRatio clean', () => {
        expect(validateSizeRatio(5)).toStrictEqual(true);
        expect(validateSizeRatio(28)).toStrictEqual(true);
        expect(validateSizeRatio(123921038)).toStrictEqual(false);
        expect(validateSizeRatio(-3)).toStrictEqual(false);
        expect(validateSizeRatio(0)).toStrictEqual(false);
    });
    
    it('sizeRatio edge testing clean', () => {
        expect(validateSizeRatio(0)).toStrictEqual(false);
        expect(validateSizeRatio(1)).toStrictEqual(true);
        expect(validateSizeRatio(2)).toStrictEqual(true);
        expect(validateSizeRatio(99)).toStrictEqual(true);
        expect(validateSizeRatio(100)).toStrictEqual(true);
        expect(validateSizeRatio(101)).toStrictEqual(true);
    });

    it('textDecoration clean', () => {
        expect(validateTextDecoration('none')).toStrictEqual(true);
        expect(validateTextDecoration('bold')).toStrictEqual(true);
        expect(validateTextDecoration('italic')).toStrictEqual(true);
        expect(validateTextDecoration('underline')).toStrictEqual(true);
        expect(validateTextDecoration('None')).toStrictEqual(true);
        expect(validateTextDecoration('Bold')).toStrictEqual(true);
        expect(validateTextDecoration('Italic')).toStrictEqual(true);
        expect(validateTextDecoration('Underline')).toStrictEqual(true);
        expect(validateTextDecoration('')).toStrictEqual(false);
        expect(validateTextDecoration('sldkfj')).toStrictEqual(false);
    });

    it('fontSize clean', () => {
        expect(validateFontSize('big')).toStrictEqual(true);
        expect(validateFontSize('medium')).toStrictEqual(true);
        expect(validateFontSize('small')).toStrictEqual(true);
        expect(validateFontSize('12px')).toStrictEqual(true);
        expect(validateFontSize('')).toStrictEqual(false);
        expect(validateFontSize('lsjadkf')).toStrictEqual(false);
        expect(validateFontSize('Big')).toStrictEqual(true);
        expect(validateFontSize('Medium')).toStrictEqual(true);
        expect(validateFontSize('Small')).toStrictEqual(true);
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
        expect(validateContainer(container)).toStrictEqual(true);
        // make sure container was not modified
        expect(container.type).toStrictEqual('container');
        expect(container.direction).toStrictEqual('horizontal');
        expect(container.sizeRatio).toStrictEqual(42);
        expect(container.decoration).toStrictEqual('none');
        expect(container.fontSize).toStrictEqual('big');
    });
});

