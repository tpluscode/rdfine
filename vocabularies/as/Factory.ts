import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as As from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    as: AsVocabulary;
  }
}

export class AsFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.as = this._initVocabulary(As)
  }
}
