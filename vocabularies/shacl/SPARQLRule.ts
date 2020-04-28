import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import RuleMixin from './Rule';
import SPARQLConstructExecutableMixin from './SPARQLConstructExecutable';

export interface SPARQLRule extends Sh.Rule, Sh.SPARQLConstructExecutable, RdfResource {
}

export default function SPARQLRuleMixin<Base extends Constructor>(Resource: Base) {
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
}
SPARQLRuleMixin.shouldApply = (r: RdfResource) => r.types.has(sh.SPARQLRule)
SPARQLRuleMixin.Class = SPARQLRuleImpl
