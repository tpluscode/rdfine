import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EntertainmentBusinessMixin from './EntertainmentBusiness';

export interface AmusementPark extends Schema.EntertainmentBusiness, RdfResource {
}

export default function AmusementParkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AmusementParkClass extends EntertainmentBusinessMixin(Resource) implements AmusementPark {
  }
  return AmusementParkClass
}

class AmusementParkImpl extends AmusementParkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AmusementPark>) {
    super(arg)
    this.types.add(schema.AmusementPark)
    initializeProperties<AmusementPark>(this, init)
  }
}
AmusementParkMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AmusementPark)
AmusementParkMixin.Class = AmusementParkImpl
