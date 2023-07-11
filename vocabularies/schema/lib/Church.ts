import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { PlaceOfWorshipMixin } from './PlaceOfWorship.js';

export interface Church<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlaceOfWorship<D>, rdfine.RdfResource<D> {
}

export function ChurchMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Church & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ChurchClass extends PlaceOfWorshipMixin(Resource) {
  }
  return ChurchClass as any
}
ChurchMixin.appliesTo = schema.Church

export const factory = (env: RdfineEnvironment) => createFactory<Church>([PlaceOfWorshipMixin, ChurchMixin], { types: [schema.Church] }, env);
