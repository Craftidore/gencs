# JSON Spec v0.1

Everything has an id

# Container

- Direction
- SizeRatio

```js
{
    "type":"container",
    "direction":String, // "vertical" or "horizontal"
    "size_ratio":Number, // not-negative
    "id":String // some hex uuid
}
```

# Label

- Text
- Bold/Italic/Underline
- Font Size
- SizeRatio

```js
{
    "type":"label",
    "decoration":[String], // i.e. ["bold", "italic", "underline"]
    "font_size":String, // font size: "big", "medium", "small", or something like "11px"
    "size_ratio":Number,
    "id":String
}
```

^label_spec

# Gap (Incomplete!)

- WidthRatio

# Text Input

- Starting Value
- Font Size
- SizeRatio

```js
{
    "type":"text-input",
    "default_value":String, // "" for no default value, the value otherwise
    "font_size":String, // see previous note on font sizes
    "size_ratio":Number,
    "id":String
}
```

Font sizes note: [[#^label_spec]]

# Textbox Input

- Starting Value
- Font Size
- SizeRatio

```js
{
    "type":"textbox-input",
    "default_value":String,
    "font_size":String, // see previous note on font sizes
    "size_ratio":Number,
    "id":String
}
```

# Number Input

- Starting Value
- AllowFloat
- Font Size
- SizeRatio

```js
{
    "type":"number-input",
    "allow_float":Bool,
    "default_value":Number,
    "font_size":String, // see previous note on font sizes
    "id":String
}
```

# Choice (Dropdown) Input

- Starting Value
- Font Size
- Array of choices
- SizeRatio

```js
{
    "type":"choice-input",
    "font_size":String, // see previous note on font sizes
    "choices":[String],
    "default_value":Number, // -1 for no preset, otherwise an index
    "size_ratio":Number,
    "id":String
```

# Radio Buttons Input

- Starting Value
- Font Size
- Array of Labels
- Direction
- SizeRatio

```js
{
    "type":"radio-input",
    "default_value":String,
    "font_size":String, // see previous note on font sizes
    "labels":[String],
    "direction":String, // "vertical" or "horizontal"
    "size_ratio":Number,
    "id":String
}
```

# Checkboxes Input `checkboxes` (object)

- Starting Value `default_value` ('checked', 'unchecked')
- Font Size `font_size` (string)
- Array of Labels `labels` (array of string)
- Direction `direction` (string: 'vertical','horizontal')
- SizeRatio `size_ratio` (number: can't be negative)

```js
{
    "type":"checkbox-input",
    "default_value":String,
    "font_size":String, // see previous note on font sizes
    "labels":[String],
    "direction":String, // "vertical" or "horizontal"
    "size_ratio":Number,
    "id":String
}
```

# DuplicatingContainer


## TODO:

Research getting widths right for containers inside containers

