import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentHierarchicalRelationMixin } from './AgentHierarchicalRelation.js';
import { WholePartRelationMixin } from './WholePartRelation.js';

export interface GroupSubdivisionRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentHierarchicalRelation<D>, Rico.WholePartRelation<D>, rdfine.RdfResource<D> {
  groupSubdivisionRelationHasSource: Rico.Group<D> | undefined;
  groupSubdivisionRelationHasTarget: Rico.Group<D> | undefined;
}

export function GroupSubdivisionRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GroupSubdivisionRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class GroupSubdivisionRelationClass extends WholePartRelationMixin(AgentHierarchicalRelationMixin(Resource)) {
    @rdfine.property.resource({ implicitTypes: [rico.Group] })
    groupSubdivisionRelationHasSource: Rico.Group | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Group] })
    groupSubdivisionRelationHasTarget: Rico.Group | undefined;
  }
  return GroupSubdivisionRelationClass as any
}

class GroupSubdivisionRelationImpl extends GroupSubdivisionRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GroupSubdivisionRelation>) {
    super(arg, init)
    this.types.add(rico.GroupSubdivisionRelation)
  }

  static readonly __mixins: Mixin[] = [GroupSubdivisionRelationMixin, AgentHierarchicalRelationMixin, WholePartRelationMixin];
}
GroupSubdivisionRelationMixin.appliesTo = rico.GroupSubdivisionRelation
GroupSubdivisionRelationMixin.Class = GroupSubdivisionRelationImpl

export const fromPointer = createFactory<GroupSubdivisionRelation>([WholePartRelationMixin, AgentHierarchicalRelationMixin, GroupSubdivisionRelationMixin], { types: [rico.GroupSubdivisionRelation] });
