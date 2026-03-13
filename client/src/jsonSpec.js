export const Types = {
    Container: 'container',
    Label: 'label',
    Gap: 'null',
    TextInput: 'text-input',
    TextBoxInput: 'textbox-input',
    NumberInput: 'number-input',
    DropdownInput: 'choice-input',
    RadioButtonsInput: 'radio-input',
    CheckboxInput: 'checkbox-input',
    DuplicatingContainer: 'null',
};

export const Attributes = {
    Name: 'name',
    Id: 'id',
    Type: 'type',
    Direction: 'direction',
    SizeRatio: 'sizeRatio',
    Children: 'children',
    Decorations: 'decorations',
    FontSize: 'fontSize',
    WidthRatio: 'widthRatio', // For Gap
    DefaultValueText: 'defaultValueText',
    DefaultValueNum: 'defaultValueNum',
    DefaultValueBool: 'defaultValueBool',
    AllowFloat: 'allowFloat',
    Choices: 'choices',
    Labels: 'labels',
};

export const Directions = [
    'vertical',
    'horizontal',
];

export const Decorations = [
    'bold',
    'italic',
    'underline',
];

export const FontSizes = [
    'big',
    'medium',
    'small',
    /\d+px/,
];

export const CheckboxDefaultValues = [
    'checked',
    'unchecked',
];

export const TypeAttributes = {
    Container: ['Name', 'Id', 'Type', 'Direction', 'Children', 'SizeRatio'],
    Label: ['Name', 'Id', 'Type', 'Decoration', 'FontSize', 'SizeRatio'],
    Gap: ['Name', 'Id', 'Type'], // WARN: INCOMPLETE
    TextInput: ['Name', 'Id', 'Type', 'DefaultValueText', 'FontSize', 'SizeRatio'],
    TextBoxInput: ['Name', 'Id', 'Type', 'DefaultValueText', 'FontSize', 'SizeRatio'],
    NumberInput: ['Name', 'Id', 'Type', 'AllowFloat', 'DefaultValueNum', 'FontSize'],
    DropdownInput: ['Name', 'Id', 'Type', 'FontSize', 'Choices', 'DefaultValueNum', 'SizeRatio', 'Id'],
    RadioButtonsInput: ['Name', 'Id', 'Type', 'DefaultValueNum', 'FontSize', 'Labels', 'Direction', 'SizeRatio'],
    CheckboxInput: ['Name', 'Id', 'Type', 'DefaultValueBool', 'FontSize', 'Labels', 'Direction', 'SizeRatio'],
    DuplicatingContainer: ['Name', 'Id', 'Type'], // WARN: INCOMPLETE
};
