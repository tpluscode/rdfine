import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { InteractActionMixin } from './InteractAction';

export interface FollowAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, RdfResource<D> {
  followee: Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function FollowActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FollowAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class FollowActionClass extends InteractActionMixin(Resource) implements Partial<FollowAction> {
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

export const fromPointer = createFactory<FollowAction>([InteractActionMixin, FollowActionMixin], { types: [schema.FollowAction] });
