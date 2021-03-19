import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface Like<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function LikeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Like> & RdfResourceCore> & Base {
  @namespace(as)
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
