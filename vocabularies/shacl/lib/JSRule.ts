import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { JSExecutableMixin } from './JSExecutable.js';
import { RuleMixin } from './Rule.js';

export interface JSRule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.JSExecutable<D>, Sh.Rule<D>, RdfResource<D> {
}

export function JSRuleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<JSRule> & RdfResourceCore> & Base {
  @namespace(sh)
  class JSRuleClass extends RuleMixin(JSExecutableMixin(Resource)) implements Partial<JSRule> {
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

export const fromPointer = createFactory<JSRule>([RuleMixin, JSExecutableMixin, JSRuleMixin], { types: [sh.JSRule] });
