import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface StructuredValue extends Schema.Intangible, RdfResource {
}

export default function StructuredValueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class StructuredValueClass extends IntangibleMixin(Resource) implements StructuredValue {
  }
  return StructuredValueClass
}

class StructuredValueImpl extends StructuredValueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<StructuredValue>) {
    super(arg)
    this.types.add(schema.StructuredValue)
    initializeProperties<StructuredValue>(this, init)
  }
}
StructuredValueMixin.shouldApply = (r: RdfResource) => r.types.has(schema.StructuredValue)
StructuredValueMixin.Class = StructuredValueImpl
