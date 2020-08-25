import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness';

export interface MotorcycleRepair extends Schema.AutomotiveBusiness, RdfResource {
}

export function MotorcycleRepairMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MotorcycleRepairClass extends AutomotiveBusinessMixin(Resource) implements MotorcycleRepair {
  }
  return MotorcycleRepairClass
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
