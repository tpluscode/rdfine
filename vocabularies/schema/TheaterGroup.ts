import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PerformingGroupMixin from './PerformingGroup';

export interface TheaterGroup extends Schema.PerformingGroup, RdfResource {
}

export default function TheaterGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TheaterGroupClass extends PerformingGroupMixin(Resource) implements TheaterGroup {
  }
  return TheaterGroupClass
}

class TheaterGroupImpl extends TheaterGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TheaterGroup>) {
    super(arg)
    this.types.add(schema.TheaterGroup)
    initializeProperties(this, init)
  }
}
TheaterGroupMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TheaterGroup)
TheaterGroupMixin.Class = TheaterGroupImpl
