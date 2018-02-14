Select css given by
 - mapValue[props[prop]]
 - mapValue(props[prop], prop, props)
 - mapValue
 - props[prop]

```js
   <StyledComponent hide={!visible} />
```

```js
   mapProps({
       color: (propValue, propName, ownProps) =>
           css`color: ${propValue}`
   })
```

```js
   mapProps({
       intent: {
           alert: css`color: magenta`,
           success: css`color: green`,
           default: css`color: blue`,
       }
   })
```   

```js
   mapProps({
       block: css`
           display: block;
       `
   })
```
