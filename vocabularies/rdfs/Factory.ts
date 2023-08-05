import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Rdfs from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    rdfs: RdfsVocabulary;
  }
}

export class RdfsFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.rdfs = this._initVocabulary(Rdfs)
  }
}
