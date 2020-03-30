import { toMatchSnapshot } from 'jest-snapshot'
import { SourceFile } from 'ts-morph'

expect.extend({
  toMatchSnapshot(received: SourceFile | unknown) {
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
