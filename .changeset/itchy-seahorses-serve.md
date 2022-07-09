---
"@tpluscode/rdfine": patch
---

RDF List initializer made simpler a helper function. For example, to initialize a `( 'foo', 'bar', 'baz )` list:

```js
import * as initialize from '@tpluscode/rdfine/initializer'

let node
const resource = fromPointer(node, {
  'listProp': initialize.rdfList('foo', 'bar', 'baz') 
})
```

closes (#143)
