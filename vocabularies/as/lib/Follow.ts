import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface Follow<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function FollowMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Follow> & RdfResourceCore> & Base {
  @namespace(as)
  class FollowClass extends ActivityMixin(Resource) implements Partial<Follow> {
  }
  return FollowClass
}

class FollowImpl extends FollowMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Follow>) {
    super(arg, init)
    this.types.add(as.Follow)
  }

  static readonly __mixins: Mixin[] = [FollowMixin, ActivityMixin];
}
FollowMixin.appliesTo = as.Follow
FollowMixin.Class = FollowImpl

export const fromPointer = createFactory<Follow>([ActivityMixin, FollowMixin], { types: [as.Follow] });
