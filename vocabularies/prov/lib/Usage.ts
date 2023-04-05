import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { EntityInfluenceMixin } from './EntityInfluence.js';
import { InstantaneousEventMixin } from './InstantaneousEvent.js';

export interface Usage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.EntityInfluence<D>, Prov.InstantaneousEvent<D>, RdfResource<D> {
}

export function UsageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Usage> & RdfResourceCore> & Base {
  @namespace(prov)
  class UsageClass extends InstantaneousEventMixin(EntityInfluenceMixin(Resource)) implements Partial<Usage> {
  }
  return UsageClass
}

class UsageImpl extends UsageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Usage>) {
    super(arg, init)
    this.types.add(prov.Usage)
  }

  static readonly __mixins: Mixin[] = [UsageMixin, EntityInfluenceMixin, InstantaneousEventMixin];
}
UsageMixin.appliesTo = prov.Usage
UsageMixin.Class = UsageImpl

export const fromPointer = createFactory<Usage>([InstantaneousEventMixin, EntityInfluenceMixin, UsageMixin], { types: [prov.Usage] });
