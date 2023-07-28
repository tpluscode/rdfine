import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Wgs from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    wgs: WgsVocabulary;
  }
}

export class WgsFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.wgs = this._initVocabulary(Wgs)
  }
}
