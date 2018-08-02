# Dropdown

## Basicaly

![Basic](https://raw.githubusercontent.com/uixcrazy/hhd-storybook/master/packages/dropdown/docs/images/dropdown01.png)

We have a list data like this:

```
[
  { value: null, name: 'All ..' },
  { value: 'a',  name: 'first item' },
  { value: 'b',  name: 'second item' },
  ....
]
```

We need action:
  - change item
  - close dropdown list when we click outside **Dropdown box**


## The second UI

![basic](https://raw.githubusercontent.com/uixcrazy/hhd-storybook/master/packages/dropdown/docs/images/dropdown02.png)

## Issue inside Iframe
  { not update yet }
## Test Case
  - two dropdown (to check click outside) - have label
  - dropdown at the dialog (to check reRender with different data. It will not remember old data)


