import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Foaf from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    foaf: FoafVocabulary;
  }
}

export class FoafFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.foaf = this._initVocabulary(Foaf)
  }
}
