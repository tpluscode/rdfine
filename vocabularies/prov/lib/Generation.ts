import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { ActivityInfluenceMixin } from './ActivityInfluence';
import { InstantaneousEventMixin } from './InstantaneousEvent';

export interface Generation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.ActivityInfluence<D>, Prov.InstantaneousEvent<D>, RdfResource<D> {
}

export function GenerationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Generation> & RdfResourceCore> & Base {
  @namespace(prov)
  class GenerationClass extends InstantaneousEventMixin(ActivityInfluenceMixin(Resource)) implements Partial<Generation> {
  }
  return GenerationClass
}

class GenerationImpl extends GenerationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Generation>) {
    super(arg, init)
    this.types.add(prov.Generation)
  }

  static readonly __mixins: Mixin[] = [GenerationMixin, ActivityInfluenceMixin, InstantaneousEventMixin];
}
GenerationMixin.appliesTo = prov.Generation
GenerationMixin.Class = GenerationImpl

export const fromPointer = createFactory<Generation>([InstantaneousEventMixin, ActivityInfluenceMixin, GenerationMixin], { types: [prov.Generation] });
