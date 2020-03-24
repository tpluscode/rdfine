import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import QuantityMixin from './Quantity';

export interface Mass extends Schema.Quantity, RdfResource {
}

export default function MassMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MassClass extends QuantityMixin(Resource) implements Mass {
  }
  return MassClass
}

class MassImpl extends MassMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Mass)
  }
}
MassMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Mass)
MassMixin.Class = MassImpl
