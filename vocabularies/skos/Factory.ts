import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Skos from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    skos: SkosVocabulary;
  }
}

export class SkosFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.skos = this._initVocabulary(Skos)
  }
}
