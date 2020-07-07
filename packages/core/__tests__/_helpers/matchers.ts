import { toMatchSnapshot } from 'jest-snapshot'
import DatasetExt from 'rdf-ext/lib/Dataset'

expect.extend({
  toMatchSnapshot(received: DatasetExt | object) {
    if (typeof received === 'object' && received && 'toCanonical' in received) {
      return toMatchSnapshot.call(
        this as any,
        received.toCanonical(),
        'toMatchSnapshot',
      )
    }

    return toMatchSnapshot.call(
      this as any,
      received,
      'toMatchSnapshot',
    )
  },
})
