import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Rdf from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    rdf: RdfVocabulary;
  }
}

export class RdfFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.rdf = this._initVocabulary(Rdf)
  }
}
