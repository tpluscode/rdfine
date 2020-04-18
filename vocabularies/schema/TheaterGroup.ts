import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<TheaterGroup>) {
    super(arg, init)
    this.types.add(schema.TheaterGroup)
  }
}
TheaterGroupMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TheaterGroup)
TheaterGroupMixin.Class = TheaterGroupImpl
