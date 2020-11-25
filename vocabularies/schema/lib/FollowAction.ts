import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { InteractActionMixin } from './InteractAction';

export interface FollowAction<ID extends ResourceNode = ResourceNode> extends Schema.InteractAction<ID>, RdfResource<ID> {
  followee: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
}

export function FollowActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FollowActionClass extends InteractActionMixin(Resource) implements FollowAction {
    @property.resource()
    followee: Schema.Organization | Schema.Person | undefined;
  }
  return FollowActionClass
}

class FollowActionImpl extends FollowActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FollowAction>) {
    super(arg, init)
    this.types.add(schema.FollowAction)
  }

  static readonly __mixins: Mixin[] = [FollowActionMixin, InteractActionMixin];
}
FollowActionMixin.appliesTo = schema.FollowAction
FollowActionMixin.Class = FollowActionImpl
