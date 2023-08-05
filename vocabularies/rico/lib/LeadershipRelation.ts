import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AgentControlRelationMixin } from './AgentControlRelation.js';

export interface LeadershipRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentControlRelation<D>, rdfine.RdfResource<D> {
  leadershipRelationHasSource: Rico.Person<D> | undefined;
  leadershipRelationHasTarget: Rico.Group<D> | undefined;
  leadershipWithPosition: Rico.Position<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    LeadershipRelation: Factory<Rico.LeadershipRelation>;
  }
}

export function LeadershipRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<LeadershipRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class LeadershipRelationClass extends AgentControlRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    leadershipRelationHasSource: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Group] })
    leadershipRelationHasTarget: Rico.Group | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Position] })
    leadershipWithPosition: Rico.Position | undefined;
  }
  return LeadershipRelationClass as any
}
LeadershipRelationMixin.appliesTo = rico.LeadershipRelation
LeadershipRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<LeadershipRelation>([AgentControlRelationMixin, LeadershipRelationMixin], { types: [rico.LeadershipRelation] }, env)
