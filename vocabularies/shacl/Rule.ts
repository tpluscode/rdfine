import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface Rule extends Rdfs.Resource, RdfResource {
  condition: Sh.Shape;
}

export function RuleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class RuleClass extends Rdfs.ResourceMixin(Resource) implements Rule {
    @property.resource({ implicitTypes: [sh.Shape] })
    condition!: Sh.Shape;
  }
  return RuleClass
}

class RuleImpl extends RuleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Rule>) {
    super(arg, init)
    this.types.add(sh.Rule)
  }

  static readonly __mixins: Mixin[] = [RuleMixin, Rdfs.ResourceMixin];
}
RuleMixin.appliesTo = sh.Rule
RuleMixin.Class = RuleImpl
