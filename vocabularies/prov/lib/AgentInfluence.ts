import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { InfluenceMixin } from './Influence';

export interface AgentInfluence<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Influence<D>, RdfResource<D> {
  agent: Prov.Agent<D> | undefined;
}

export function AgentInfluenceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AgentInfluence> & RdfResourceCore> & Base {
  @namespace(prov)
  class AgentInfluenceClass extends InfluenceMixin(Resource) implements Partial<AgentInfluence> {
    @property.resource({ implicitTypes: [prov.Agent] })
    agent: Prov.Agent | undefined;
  }
  return AgentInfluenceClass
}

class AgentInfluenceImpl extends AgentInfluenceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AgentInfluence>) {
    super(arg, init)
    this.types.add(prov.AgentInfluence)
  }

  static readonly __mixins: Mixin[] = [AgentInfluenceMixin, InfluenceMixin];
}
AgentInfluenceMixin.appliesTo = prov.AgentInfluence
AgentInfluenceMixin.Class = AgentInfluenceImpl

export const fromPointer = createFactory<AgentInfluence>([InfluenceMixin, AgentInfluenceMixin], { types: [prov.AgentInfluence] });
