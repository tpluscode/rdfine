import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { InteractActionMixin } from './InteractAction';

export interface FollowAction extends Schema.InteractAction, RdfResource {
  followee: Schema.Organization | Schema.Person;
}

export function FollowActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FollowActionClass extends InteractActionMixin(Resource) implements FollowAction {
    @property.resource()
    followee!: Schema.Organization | Schema.Person;
  }
  return FollowActionClass
}

class FollowActionImpl extends FollowActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FollowAction>) {
    super(arg, init)
    this.types.add(schema.FollowAction)
  }
}
FollowActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FollowAction)
FollowActionMixin.Class = FollowActionImpl
