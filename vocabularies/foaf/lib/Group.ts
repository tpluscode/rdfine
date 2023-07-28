import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '../index.js';
import { AgentMixin } from './Agent.js';

export interface Group<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.Agent<D>, rdfine.RdfResource<D> {
  member: Foaf.Agent<D> | undefined;
}

export function GroupMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Group & RdfResourceCore> & Base {
  @rdfine.namespace(foaf)
  class GroupClass extends AgentMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [foaf.Agent] })
    member: Foaf.Agent | undefined;
  }
  return GroupClass as any
}

class GroupImpl extends GroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Group>) {
    super(arg, init)
    this.types.add(foaf.Group)
  }

  static readonly __mixins: Mixin[] = [GroupMixin, AgentMixin];
}
GroupMixin.appliesTo = foaf.Group
GroupMixin.Class = GroupImpl

export const fromPointer = createFactory<Group>([AgentMixin, GroupMixin], { types: [foaf.Group] });
