import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness.js';

export interface AutoRepair<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, rdfine.RdfResource<D> {
}

export function AutoRepairMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AutoRepair> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AutoRepairClass extends AutomotiveBusinessMixin(Resource) implements Partial<AutoRepair> {
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

export const fromPointer = createFactory<AutoRepair>([AutomotiveBusinessMixin, AutoRepairMixin], { types: [schema.AutoRepair] });
