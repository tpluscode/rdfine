import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PerformingGroupMixin from './PerformingGroup';

export interface DanceGroup extends Schema.PerformingGroup, RdfResource {
}

export default function DanceGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DanceGroupClass extends PerformingGroupMixin(Resource) implements DanceGroup {
  }
  return DanceGroupClass
}

class DanceGroupImpl extends DanceGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DanceGroup>) {
    super(arg)
    this.types.add(schema.DanceGroup)
    initializeProperties(this, init)
  }
}
DanceGroupMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DanceGroup)
DanceGroupMixin.Class = DanceGroupImpl
