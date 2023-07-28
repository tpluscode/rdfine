import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Prov from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    prov: ProvVocabulary;
  }
}

export class ProvFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.prov = this._initVocabulary(Prov)
  }
}
