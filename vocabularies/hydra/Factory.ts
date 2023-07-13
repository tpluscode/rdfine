import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Hydra from './index.js'

interface VocabularyFactory {
  Class: Factory<Hydra.Class>;
}

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    hydra: VocabularyFactory;
  }
}

export class HydraFactory {
  init(this: RdfineEnvironment) {
    this.rdfine().factory.addMixin(...Object.values(Hydra))

    this.rdfine.hydra = this._initVocabulary(Hydra)
  }
}
