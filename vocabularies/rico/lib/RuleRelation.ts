import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface RuleRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  ruleRelationHasSource: Rico.Rule<D> | undefined;
  ruleRelationHasTarget: Rico.Thing<D> | undefined;
}

export function RuleRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RuleRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RuleRelationClass extends RelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Rule] })
    ruleRelationHasSource: Rico.Rule | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    ruleRelationHasTarget: Rico.Thing | undefined;
  }
  return RuleRelationClass as any
}
RuleRelationMixin.appliesTo = rico.RuleRelation

export const factory = (env: RdfineEnvironment) => createFactory<RuleRelation>([RelationMixin, RuleRelationMixin], { types: [rico.RuleRelation] }, env);
