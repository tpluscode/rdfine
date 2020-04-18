import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import QuantityMixin from './Quantity';

export interface Energy extends Schema.Quantity, RdfResource {
}

export default function EnergyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EnergyClass extends QuantityMixin(Resource) implements Energy {
  }
  return EnergyClass
}

class EnergyImpl extends EnergyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Energy>) {
    super(arg, init)
    this.types.add(schema.Energy)
  }
}
EnergyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Energy)
EnergyMixin.Class = EnergyImpl
