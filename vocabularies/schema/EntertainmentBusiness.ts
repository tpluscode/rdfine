import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface EntertainmentBusiness extends Schema.LocalBusiness, RdfResource {
}

export default function EntertainmentBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EntertainmentBusinessClass extends LocalBusinessMixin(Resource) implements EntertainmentBusiness {
  }
  return EntertainmentBusinessClass
}

class EntertainmentBusinessImpl extends EntertainmentBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EntertainmentBusiness>) {
    super(arg, init)
    this.types.add(schema.EntertainmentBusiness)
  }
}
EntertainmentBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EntertainmentBusiness)
EntertainmentBusinessMixin.Class = EntertainmentBusinessImpl
