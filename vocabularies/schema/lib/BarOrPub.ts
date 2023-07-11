import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { FoodEstablishmentMixin } from './FoodEstablishment.js';

export interface BarOrPub<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, rdfine.RdfResource<D> {
}

export function BarOrPubMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<BarOrPub & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BarOrPubClass extends FoodEstablishmentMixin(Resource) {
  }
  return BarOrPubClass as any
}
BarOrPubMixin.appliesTo = schema.BarOrPub

export const factory = (env: RdfineEnvironment) => createFactory<BarOrPub>([FoodEstablishmentMixin, BarOrPubMixin], { types: [schema.BarOrPub] }, env);
