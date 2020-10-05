import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface UserInteraction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function UserInteractionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserInteractionClass extends EventMixin(Resource) implements UserInteraction {
  }
  return UserInteractionClass
}

class UserInteractionImpl extends UserInteractionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserInteraction>) {
    super(arg, init)
    this.types.add(schema.UserInteraction)
  }

  static readonly __mixins: Mixin[] = [UserInteractionMixin, EventMixin];
}
UserInteractionMixin.appliesTo = schema.UserInteraction
UserInteractionMixin.Class = UserInteractionImpl
