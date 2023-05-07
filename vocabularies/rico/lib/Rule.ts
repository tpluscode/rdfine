import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Rule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, RdfResource<D> {
  hasOrHadRuleType: Rico.RuleType<D> | undefined;
  hasOrHadTitle: Rico.Title<D> | undefined;
  history: RDF.Literal | undefined;
  isOrWasEnforcedBy: Rico.Agent<D> | undefined;
  isOrWasExpressedBy: Rico.RecordResource<D> | undefined;
  isRuleAssociatedWith: Rico.Thing<D> | undefined;
  issuedBy: Rico.Agent<D> | undefined;
  regulatesOrRegulated: Rico.Thing<D> | undefined;
  ruleIsSourceOfRuleRelation: Rico.RuleRelation<D> | undefined;
  title: RDF.Literal | undefined;
}

export function RuleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Rule> & RdfResourceCore> & Base {
  @namespace(rico)
  class RuleClass extends ThingMixin(Resource) implements Partial<Rule> {
    @property.resource({ implicitTypes: [rico.RuleType] })
    hasOrHadRuleType: Rico.RuleType | undefined;
    @property.resource({ implicitTypes: [rico.Title] })
    hasOrHadTitle: Rico.Title | undefined;
    @property()
    history: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    isOrWasEnforcedBy: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.RecordResource] })
    isOrWasExpressedBy: Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    isRuleAssociatedWith: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    issuedBy: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    regulatesOrRegulated: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.RuleRelation] })
    ruleIsSourceOfRuleRelation: Rico.RuleRelation | undefined;
    @property()
    title: RDF.Literal | undefined;
  }
  return RuleClass
}

class RuleImpl extends RuleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Rule>) {
    super(arg, init)
    this.types.add(rico.Rule)
  }

  static readonly __mixins: Mixin[] = [RuleMixin, ThingMixin];
}
RuleMixin.appliesTo = rico.Rule
RuleMixin.Class = RuleImpl

export const fromPointer = createFactory<Rule>([ThingMixin, RuleMixin], { types: [rico.Rule] });
