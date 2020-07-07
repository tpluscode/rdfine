import { toMatchSnapshot } from 'jest-snapshot'
import DatasetExt from 'rdf-ext/lib/Dataset'
import { SourceFile } from 'ts-morph'

expect.extend({
  toMatchSnapshot(received: DatasetExt | SourceFile | object) {
    if (typeof received === 'object' && received && 'toCanonical' in received) {
      return toMatchSnapshot.call(
        this as any,
        received.toCanonical(),
        'toMatchSnapshot',
      )
    }

    if (received instanceof SourceFile) {
      received.saveSync()
      const contents = received.getProject().getFileSystem().readFileSync(received.getFilePath())
      return toMatchSnapshot.call(
        this as any,
        contents,
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
