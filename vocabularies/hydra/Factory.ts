import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Class from './lib/Class.js';

interface VocabularyFactory {
  Class: Factory<Class.Class>;
}

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    hydra: VocabularyFactory;
  }
}

export class HydraFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.hydra = {
      Class: Class.factory(this),
    }
  }
}
