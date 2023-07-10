import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InteractActionMixin } from './InteractAction.js';

export interface FollowAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, rdfine.RdfResource<D> {
  followee: Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function FollowActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FollowAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FollowActionClass extends InteractActionMixin(Resource) {
    @rdfine.property.resource()
    followee: Schema.Organization | Schema.Person | undefined;
  }
  return FollowActionClass as any
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

export const fromPointer = createFactory<FollowAction>([InteractActionMixin, FollowActionMixin], { types: [schema.FollowAction] });
