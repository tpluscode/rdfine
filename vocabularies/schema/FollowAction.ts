import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface FollowAction extends Schema.InteractAction, RdfResource {
  followee: Schema.Organization | Schema.Person;
}

export default function FollowActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FollowActionClass extends InteractActionMixin(Resource) implements FollowAction {
    @property.resource()
    followee!: Schema.Organization | Schema.Person;
  }
  return FollowActionClass
}

class FollowActionImpl extends FollowActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<FollowAction>) {
    super(arg)
    this.types.add(schema.FollowAction)
    initializeProperties(this, init)
  }
}
FollowActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FollowAction)
FollowActionMixin.Class = FollowActionImpl
