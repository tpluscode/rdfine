import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ServiceMixin from './Service';

export interface Taxi extends Schema.Service, RdfResource {
}

export default function TaxiMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TaxiClass extends ServiceMixin(Resource) implements Taxi {
  }
  return TaxiClass
}

class TaxiImpl extends TaxiMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Taxi>) {
    super(arg)
    this.types.add(schema.Taxi)
    initializeProperties<Taxi>(this, init)
  }
}
TaxiMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Taxi)
TaxiMixin.Class = TaxiImpl
