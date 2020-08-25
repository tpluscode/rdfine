import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness';

export interface AutoRepair extends Schema.AutomotiveBusiness, RdfResource {
}

export function AutoRepairMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AutoRepairClass extends AutomotiveBusinessMixin(Resource) implements AutoRepair {
  }
  return AutoRepairClass
}

class AutoRepairImpl extends AutoRepairMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutoRepair>) {
    super(arg, init)
    this.types.add(schema.AutoRepair)
  }

  static readonly __mixins: Mixin[] = [AutoRepairMixin, AutomotiveBusinessMixin];
}
AutoRepairMixin.appliesTo = schema.AutoRepair
AutoRepairMixin.Class = AutoRepairImpl
