import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface TouristInformationCenter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    TouristInformationCenter: Factory<Schema.TouristInformationCenter>;
  }
}

export function TouristInformationCenterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TouristInformationCenter & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TouristInformationCenterClass extends LocalBusinessMixin(Resource) {
  }
  return TouristInformationCenterClass as any
}
TouristInformationCenterMixin.appliesTo = schema.TouristInformationCenter
TouristInformationCenterMixin.createFactory = (env: RdfineEnvironment) => createFactory<TouristInformationCenter>([LocalBusinessMixin, TouristInformationCenterMixin], { types: [schema.TouristInformationCenter] }, env)
