import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Owl from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    owl: OwlVocabulary;
  }
}

export class OwlFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.owl = this._initVocabulary(Owl)
  }
}
