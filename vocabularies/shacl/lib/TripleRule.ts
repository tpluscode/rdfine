import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { RuleMixin } from './Rule.js';

export interface TripleRule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.Rule<D>, RdfResource<D> {
  object: RDF.Term | undefined;
  predicate: RDF.Term | undefined;
  subject: RDF.Term | undefined;
}

export function TripleRuleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TripleRule> & RdfResourceCore> & Base {
  @namespace(sh)
  class TripleRuleClass extends RuleMixin(Resource) implements Partial<TripleRule> {
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

export const fromPointer = createFactory<TripleRule>([RuleMixin, TripleRuleMixin], { types: [sh.TripleRule] });
