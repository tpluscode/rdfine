import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<StructuredValue>) {
    super(arg, init)
    this.types.add(schema.StructuredValue)
  }
}
StructuredValueMixin.shouldApply = (r: RdfResource) => r.types.has(schema.StructuredValue)
StructuredValueMixin.Class = StructuredValueImpl
