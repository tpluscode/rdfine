import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';
import { AgentMixin } from './Agent';

export interface Group<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.Agent<D>, RdfResource<D> {
  member: Foaf.Agent<D> | undefined;
}

export function GroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(foaf)
  class GroupClass extends AgentMixin(Resource) implements Group {
    @property.resource({ implicitTypes: [foaf.Agent] })
    member: Foaf.Agent | undefined;
  }
  return GroupClass
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
