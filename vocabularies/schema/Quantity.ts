import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Quantity)
  }
}
QuantityMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Quantity)
QuantityMixin.Class = QuantityImpl
