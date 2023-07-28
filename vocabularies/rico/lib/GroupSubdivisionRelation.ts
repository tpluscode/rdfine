import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AgentHierarchicalRelationMixin } from './AgentHierarchicalRelation.js';
import { WholePartRelationMixin } from './WholePartRelation.js';

export interface GroupSubdivisionRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentHierarchicalRelation<D>, Rico.WholePartRelation<D>, rdfine.RdfResource<D> {
  groupSubdivisionRelationHasSource: Rico.Group<D> | undefined;
  groupSubdivisionRelationHasTarget: Rico.Group<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    GroupSubdivisionRelation: Factory<Rico.GroupSubdivisionRelation>;
  }
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
GroupSubdivisionRelationMixin.appliesTo = rico.GroupSubdivisionRelation
GroupSubdivisionRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<GroupSubdivisionRelation>([WholePartRelationMixin, AgentHierarchicalRelationMixin, GroupSubdivisionRelationMixin], { types: [rico.GroupSubdivisionRelation] }, env)
