import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Class from './lib/Class.js';
import * as Mixins from './index.js'

interface VocabularyFactory {
  Class: Factory<Class.Class>;
}

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    rdfs: VocabularyFactory;
  }
}

export class RdfsFactory {
  init(this: RdfineEnvironment) {
    this.rdfine().factory.addMixin(...Object.values(Mixins))

    this.rdfine.rdfs = {
      Class: Class.ClassMixin.createFactory(this),
    }
  }
}
