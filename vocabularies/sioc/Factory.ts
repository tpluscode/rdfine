import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Sioc from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    sioc: SiocVocabulary;
  }
}

export class SiocFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.sioc = this._initVocabulary(Sioc)
  }
}
