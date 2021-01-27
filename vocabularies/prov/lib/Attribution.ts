import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { AgentInfluenceMixin } from './AgentInfluence';

export interface Attribution<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.AgentInfluence<D>, RdfResource<D> {
}

export function AttributionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Attribution> & RdfResourceCore> & Base {
  @namespace(prov)
  class AttributionClass extends AgentInfluenceMixin(Resource) implements Partial<Attribution> {
  }
  return AttributionClass
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
