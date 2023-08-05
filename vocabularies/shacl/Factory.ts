import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Sh from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    sh: ShVocabulary;
  }
}

export class ShFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.sh = this._initVocabulary(Sh)
  }
}
