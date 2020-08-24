import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import { RuleMixin } from './Rule';
import { SPARQLConstructExecutableMixin } from './SPARQLConstructExecutable';

export interface SPARQLRule extends Sh.Rule, Sh.SPARQLConstructExecutable, RdfResource {
}

export function SPARQLRuleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLRuleClass extends SPARQLConstructExecutableMixin(RuleMixin(Resource)) implements SPARQLRule {
  }
  return SPARQLRuleClass
}

class SPARQLRuleImpl extends SPARQLRuleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLRule>) {
    super(arg, init)
    this.types.add(sh.SPARQLRule)
  }

  static readonly __mixins: Mixin[] = [SPARQLRuleMixin, RuleMixin, SPARQLConstructExecutableMixin];
}
SPARQLRuleMixin.appliesTo = sh.SPARQLRule
SPARQLRuleMixin.Class = SPARQLRuleImpl
