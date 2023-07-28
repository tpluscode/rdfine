import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { AgentInfluenceMixin } from './AgentInfluence.js';

export interface Attribution<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.AgentInfluence<D>, rdfine.RdfResource<D> {
}

export function AttributionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Attribution & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class AttributionClass extends AgentInfluenceMixin(Resource) {
  }
  return AttributionClass as any
}

class AttributionImpl extends AttributionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Attribution>) {
    super(arg, init)
    this.types.add(prov.Attribution)
  }

  static readonly __mixins: Mixin[] = [AttributionMixin, AgentInfluenceMixin];
}
AttributionMixin.appliesTo = prov.Attribution
AttributionMixin.Class = AttributionImpl

export const fromPointer = createFactory<Attribution>([AgentInfluenceMixin, AttributionMixin], { types: [prov.Attribution] });
