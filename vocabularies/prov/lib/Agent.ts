import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';

export interface Agent<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  actedOnBehalfOf: Prov.Agent<D> | undefined;
  atLocation: Prov.Location<D> | undefined;
  qualifiedDelegation: Prov.Delegation<D> | undefined;
  qualifiedInfluence: Prov.Influence<D> | undefined;
  wasInfluencedBy: Prov.Activity<D> | Prov.Agent<D> | Prov.Entity<D> | undefined;
}

export function AgentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Agent> & RdfResourceCore> & Base {
  @namespace(prov)
  class AgentClass extends Resource implements Partial<Agent> {
    @property.resource({ as: [AgentMixin] })
    actedOnBehalfOf: Prov.Agent | undefined;
    @property.resource({ implicitTypes: [prov.Location] })
    atLocation: Prov.Location | undefined;
    @property.resource({ implicitTypes: [prov.Delegation] })
    qualifiedDelegation: Prov.Delegation | undefined;
    @property.resource({ implicitTypes: [prov.Influence] })
    qualifiedInfluence: Prov.Influence | undefined;
    @property.resource()
    wasInfluencedBy: Prov.Activity | Prov.Agent | Prov.Entity | undefined;
  }
  return AgentClass
}

class AgentImpl extends AgentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Agent>) {
    super(arg, init)
    this.types.add(prov.Agent)
  }

  static readonly __mixins: Mixin[] = [AgentMixin];
}
AgentMixin.appliesTo = prov.Agent
AgentMixin.Class = AgentImpl

export const fromPointer = createFactory<Agent>([AgentMixin], { types: [prov.Agent] });
