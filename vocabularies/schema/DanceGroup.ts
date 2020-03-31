import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<DanceGroup>) {
    super(arg, init)
    this.types.add(schema.DanceGroup)
  }
}
DanceGroupMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DanceGroup)
DanceGroupMixin.Class = DanceGroupImpl
