import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import { RuleMixin } from './Rule';

export interface TripleRule extends Sh.Rule, RdfResource {
  object: RDF.Term | undefined;
  predicate: RDF.Term | undefined;
  subject: RDF.Term | undefined;
}

export function TripleRuleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class TripleRuleClass extends RuleMixin(Resource) implements TripleRule {
    @property()
    object: RDF.Term | undefined;
    @property()
    predicate: RDF.Term | undefined;
    @property()
    subject: RDF.Term | undefined;
  }
  return TripleRuleClass
}

class TripleRuleImpl extends TripleRuleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TripleRule>) {
    super(arg, init)
    this.types.add(sh.TripleRule)
  }

  static readonly __mixins: Mixin[] = [TripleRuleMixin, RuleMixin];
}
TripleRuleMixin.appliesTo = sh.TripleRule
TripleRuleMixin.Class = TripleRuleImpl
