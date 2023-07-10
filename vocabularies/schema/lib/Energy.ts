import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { QuantityMixin } from './Quantity.js';

export interface Energy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Quantity<D>, rdfine.RdfResource<D> {
}

export function EnergyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Energy & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EnergyClass extends QuantityMixin(Resource) {
  }
  return EnergyClass as any
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

export const fromPointer = createFactory<Energy>([QuantityMixin, EnergyMixin], { types: [schema.Energy] });
