import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import { JSExecutableMixin } from './JSExecutable';
import { RuleMixin } from './Rule';

export interface JSRule extends Sh.JSExecutable, Sh.Rule, RdfResource {
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
