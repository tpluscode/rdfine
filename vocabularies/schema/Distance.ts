import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import QuantityMixin from './Quantity';

export interface Distance extends Schema.Quantity, RdfResource {
}

export default function DistanceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DistanceClass extends QuantityMixin(Resource) implements Distance {
  }
  return DistanceClass
}

class DistanceImpl extends DistanceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Distance>) {
    super(arg)
    this.types.add(schema.Distance)
    initializeProperties<Distance>(this, init)
  }
}
DistanceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Distance)
DistanceMixin.Class = DistanceImpl
