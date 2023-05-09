import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Like<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function LikeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Like> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class LikeClass extends ActivityMixin(Resource) implements Partial<Like> {
  }
  return LikeClass
}

class LikeImpl extends LikeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Like>) {
    super(arg, init)
    this.types.add(as.Like)
  }

  static readonly __mixins: Mixin[] = [LikeMixin, ActivityMixin];
}
LikeMixin.appliesTo = as.Like
LikeMixin.Class = LikeImpl

export const fromPointer = createFactory<Like>([ActivityMixin, LikeMixin], { types: [as.Like] });
