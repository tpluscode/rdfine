import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<EntertainmentBusiness>) {
    super(arg)
    this.types.add(schema.EntertainmentBusiness)
    initializeProperties<EntertainmentBusiness>(this, init)
  }
}
EntertainmentBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EntertainmentBusiness)
EntertainmentBusinessMixin.Class = EntertainmentBusinessImpl
