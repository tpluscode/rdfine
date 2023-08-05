import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import { Factory } from '@tpluscode/rdfine/factory';
import * as Schema from './index.js';

declare module '@tpluscode/rdfine/environment' {
  interface Rdfine {
    schema: SchemaVocabulary;
  }
}

export class SchemaFactory {
  init(this: RdfineEnvironment) {
    this.rdfine.schema = this._initVocabulary(Schema)
  }
}
