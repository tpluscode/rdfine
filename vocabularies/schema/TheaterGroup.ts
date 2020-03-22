import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TheaterGroup)
  }
}
TheaterGroupMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TheaterGroup)
TheaterGroupMixin.Class = TheaterGroupImpl