import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Mass>) {
    super(arg, init)
    this.types.add(schema.Mass)
  }
}
MassMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Mass)
MassMixin.Class = MassImpl
