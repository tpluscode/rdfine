import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { JSExecutableMixin } from './JSExecutable';
import { RuleMixin } from './Rule';

export interface JSRule<ID extends ResourceNode = ResourceNode> extends Sh.JSExecutable<ID>, Sh.Rule<ID>, RdfResource<ID> {
}

export function JSRuleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class JSRuleClass extends RuleMixin(JSExecutableMixin(Resource)) implements JSRule {
  }
  return JSRuleClass
}

class JSRuleImpl extends JSRuleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSRule>) {
    super(arg, init)
    this.types.add(sh.JSRule)
  }

  static readonly __mixins: Mixin[] = [JSRuleMixin, JSExecutableMixin, RuleMixin];
}
JSRuleMixin.appliesTo = sh.JSRule
JSRuleMixin.Class = JSRuleImpl
