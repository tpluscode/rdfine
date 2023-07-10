import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness.js';

export interface MotorcycleRepair<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, rdfine.RdfResource<D> {
}

export function MotorcycleRepairMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MotorcycleRepair & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MotorcycleRepairClass extends AutomotiveBusinessMixin(Resource) {
  }
  return MotorcycleRepairClass as any
}

class MotorcycleRepairImpl extends MotorcycleRepairMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MotorcycleRepair>) {
    super(arg, init)
    this.types.add(schema.MotorcycleRepair)
  }

  static readonly __mixins: Mixin[] = [MotorcycleRepairMixin, AutomotiveBusinessMixin];
}
MotorcycleRepairMixin.appliesTo = schema.MotorcycleRepair
MotorcycleRepairMixin.Class = MotorcycleRepairImpl

export const fromPointer = createFactory<MotorcycleRepair>([AutomotiveBusinessMixin, MotorcycleRepairMixin], { types: [schema.MotorcycleRepair] });
