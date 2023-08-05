import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Doap from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    doap: DoapVocabulary;
  }
}

export class DoapFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.doap = this._initVocabulary(Doap)
  }
}
