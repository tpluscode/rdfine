import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { NameMixin } from './Name.js';

export interface AgentName<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Name<D>, rdfine.RdfResource<D> {
  isOrWasAgentNameOf: Rico.Agent<D> | undefined;
}

export function AgentNameMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AgentName> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class AgentNameClass extends NameMixin(Resource) implements Partial<AgentName> {
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    isOrWasAgentNameOf: Rico.Agent | undefined;
  }
  return AgentNameClass
}

class AgentNameImpl extends AgentNameMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AgentName>) {
    super(arg, init)
    this.types.add(rico.AgentName)
  }

  static readonly __mixins: Mixin[] = [AgentNameMixin, NameMixin];
}
AgentNameMixin.appliesTo = rico.AgentName
AgentNameMixin.Class = AgentNameImpl

export const fromPointer = createFactory<AgentName>([NameMixin, AgentNameMixin], { types: [rico.AgentName] });
