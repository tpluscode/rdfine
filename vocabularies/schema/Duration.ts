import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import QuantityMixin from './Quantity';

export interface Duration extends Schema.Quantity, RdfResource {
}

export default function DurationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DurationClass extends QuantityMixin(Resource) implements Duration {
  }
  return DurationClass
}

class DurationImpl extends DurationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Duration>) {
    super(arg, init)
    this.types.add(schema.Duration)
  }
}
DurationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Duration)
DurationMixin.Class = DurationImpl
