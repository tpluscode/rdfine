declare module 'clownface' {
  import { Term } from 'rdf-js'
  import Clownface from 'clownface/lib/Clownface'

  interface ClownfaceOptions {
    dataset?: unknown;
    graph?: unknown;
    term?: Term | null;
    value?: unknown;
    _context?: unknown;
  }

  const factory: (options: ClownfaceOptions) => Clownface

  export = factory
}
