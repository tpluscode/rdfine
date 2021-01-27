import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { AgentMixin } from './Agent';

export interface SoftwareAgent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Agent<D>, RdfResource<D> {
}

export function SoftwareAgentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SoftwareAgent> & RdfResourceCore> & Base {
  @namespace(prov)
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
