import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { ActivityInfluenceMixin } from './ActivityInfluence';
import { InstantaneousEventMixin } from './InstantaneousEvent';

export interface Invalidation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.ActivityInfluence<D>, Prov.InstantaneousEvent<D>, RdfResource<D> {
}

export function InvalidationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Invalidation> & RdfResourceCore> & Base {
  @namespace(prov)
  class InvalidationClass extends InstantaneousEventMixin(ActivityInfluenceMixin(Resource)) implements Partial<Invalidation> {
  }
  return InvalidationClass
}

class InvalidationImpl extends InvalidationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Invalidation>) {
    super(arg, init)
    this.types.add(prov.Invalidation)
  }

  static readonly __mixins: Mixin[] = [InvalidationMixin, ActivityInfluenceMixin, InstantaneousEventMixin];
}
InvalidationMixin.appliesTo = prov.Invalidation
InvalidationMixin.Class = InvalidationImpl

export const fromPointer = createFactory<Invalidation>([InstantaneousEventMixin, ActivityInfluenceMixin, InvalidationMixin], { types: [prov.Invalidation] });
