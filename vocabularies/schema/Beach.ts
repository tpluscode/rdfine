import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Beach extends Schema.CivicStructure, RdfResource {
}

export default function BeachMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BeachClass extends CivicStructureMixin(Resource) implements Beach {
  }
  return BeachClass
}

class BeachImpl extends BeachMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Beach>) {
    super(arg)
    this.types.add(schema.Beach)
    initializeProperties<Beach>(this, init)
  }
}
BeachMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Beach)
BeachMixin.Class = BeachImpl
