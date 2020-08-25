import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { QuantityMixin } from './Quantity';

export interface Energy extends Schema.Quantity, RdfResource {
}

export function EnergyMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [EnergyMixin, QuantityMixin];
}
EnergyMixin.appliesTo = schema.Energy
EnergyMixin.Class = EnergyImpl
