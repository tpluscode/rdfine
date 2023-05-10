import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { AgentMixin } from './Agent.js';

export interface SoftwareAgent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Agent<D>, rdfine.RdfResource<D> {
}

export function SoftwareAgentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SoftwareAgent> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class SoftwareAgentClass extends AgentMixin(Resource) implements Partial<SoftwareAgent> {
  }
  return SoftwareAgentClass
}

class SoftwareAgentImpl extends SoftwareAgentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SoftwareAgent>) {
    super(arg, init)
    this.types.add(prov.SoftwareAgent)
  }

  static readonly __mixins: Mixin[] = [SoftwareAgentMixin, AgentMixin];
}
SoftwareAgentMixin.appliesTo = prov.SoftwareAgent
SoftwareAgentMixin.Class = SoftwareAgentImpl

export const fromPointer = createFactory<SoftwareAgent>([AgentMixin, SoftwareAgentMixin], { types: [prov.SoftwareAgent] });
