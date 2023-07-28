import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Csvw from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    csvw: CsvwVocabulary;
  }
}

export class CsvwFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.csvw = this._initVocabulary(Csvw)
  }
}
