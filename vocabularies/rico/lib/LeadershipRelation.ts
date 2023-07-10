import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentControlRelationMixin } from './AgentControlRelation.js';

export interface LeadershipRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentControlRelation<D>, rdfine.RdfResource<D> {
  leadershipRelationHasSource: Rico.Person<D> | undefined;
  leadershipRelationHasTarget: Rico.Group<D> | undefined;
  leadershipWithPosition: Rico.Position<D> | undefined;
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

class LeadershipRelationImpl extends LeadershipRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LeadershipRelation>) {
    super(arg, init)
    this.types.add(rico.LeadershipRelation)
  }

  static readonly __mixins: Mixin[] = [LeadershipRelationMixin, AgentControlRelationMixin];
}
LeadershipRelationMixin.appliesTo = rico.LeadershipRelation
LeadershipRelationMixin.Class = LeadershipRelationImpl

export const fromPointer = createFactory<LeadershipRelation>([AgentControlRelationMixin, LeadershipRelationMixin], { types: [rico.LeadershipRelation] });
