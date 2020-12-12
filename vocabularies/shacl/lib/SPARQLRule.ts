import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { RuleMixin } from './Rule';
import { SPARQLConstructExecutableMixin } from './SPARQLConstructExecutable';

export interface SPARQLRule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.Rule<D>, Sh.SPARQLConstructExecutable<D>, RdfResource<D> {
}

export function SPARQLRuleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SPARQLRule> & RdfResourceCore> & Base {
  @namespace(sh)
  class SPARQLRuleClass extends SPARQLConstructExecutableMixin(RuleMixin(Resource)) implements Partial<SPARQLRule> {
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

export const fromPointer = createFactory<SPARQLRule>([SPARQLConstructExecutableMixin, RuleMixin, SPARQLRuleMixin], { types: [sh.SPARQLRule] });
