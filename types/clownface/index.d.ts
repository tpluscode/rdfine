declare module 'clownface' {
  import { DatasetCore } from 'rdf-js';
  import {SafeClownface, ClownfaceInit, WithTerm, WithValue} from 'clownface/lib'
  import Clownface = require('clownface/lib/Clownface');

  function factory<D extends DatasetCore>(options: ClownfaceInit<D> & WithTerm | ClownfaceInit<D> & WithValue): SafeClownface<D>;
  function factory<D extends DatasetCore>(options: ClownfaceInit<D>): Clownface<D>;

  export = factory
}
