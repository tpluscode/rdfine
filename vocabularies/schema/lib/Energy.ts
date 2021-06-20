import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { QuantityMixin } from './Quantity';

export interface Energy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Quantity<D>, RdfResource<D> {
}

export function EnergyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Energy> & RdfResourceCore> & Base {
  @namespace(schema)
  class EnergyClass extends QuantityMixin(Resource) implements Partial<Energy> {
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

export const fromPointer = createFactory<Energy>([QuantityMixin, EnergyMixin], { types: [schema.Energy] });
