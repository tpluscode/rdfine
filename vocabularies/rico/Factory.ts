import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Rico from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    rico: RicoVocabulary;
  }
}

export class RicoFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.rico = this._initVocabulary(Rico)
  }
}
