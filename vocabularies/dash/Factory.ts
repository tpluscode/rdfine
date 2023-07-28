import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Dash from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    dash: DashVocabulary;
  }
}

export class DashFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.dash = this._initVocabulary(Dash)
  }
}
