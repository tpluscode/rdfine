import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Quantity extends Schema.Intangible, RdfResource {
}

export default function QuantityMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class QuantityClass extends IntangibleMixin(Resource) implements Quantity {
  }
  return QuantityClass
}

class QuantityImpl extends QuantityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Quantity>) {
    super(arg)
    this.types.add(schema.Quantity)
    initializeProperties(this, init)
  }
}
QuantityMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Quantity)
QuantityMixin.Class = QuantityImpl
