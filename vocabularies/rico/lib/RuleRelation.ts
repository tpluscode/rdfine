import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface RuleRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, RdfResource<D> {
  ruleRelationHasSource: Rico.Rule<D> | undefined;
  ruleRelationHasTarget: Rico.Thing<D> | undefined;
}

export function RuleRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RuleRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class RuleRelationClass extends RelationMixin(Resource) implements Partial<RuleRelation> {
    @property.resource({ implicitTypes: [rico.Rule] })
    ruleRelationHasSource: Rico.Rule | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    ruleRelationHasTarget: Rico.Thing | undefined;
  }
  return RuleRelationClass
}

class RuleRelationImpl extends RuleRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RuleRelation>) {
    super(arg, init)
    this.types.add(rico.RuleRelation)
  }

  static readonly __mixins: Mixin[] = [RuleRelationMixin, RelationMixin];
}
RuleRelationMixin.appliesTo = rico.RuleRelation
RuleRelationMixin.Class = RuleRelationImpl

export const fromPointer = createFactory<RuleRelation>([RelationMixin, RuleRelationMixin], { types: [rico.RuleRelation] });
