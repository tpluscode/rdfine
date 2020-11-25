import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Rule<ID extends ResourceNode = ResourceNode> extends Rdfs.Resource<ID>, RdfResource<ID> {
  condition: Sh.Shape<SiblingNode<ID>> | undefined;
}

export function RuleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class RuleClass extends RdfsResourceMixin(Resource) implements Rule {
    @property.resource({ implicitTypes: [sh.Shape] })
    condition: Sh.Shape | undefined;
  }
  return RuleClass
}

class RuleImpl extends RuleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Rule>) {
    super(arg, init)
    this.types.add(sh.Rule)
  }

  static readonly __mixins: Mixin[] = [RuleMixin, RdfsResourceMixin];
}
RuleMixin.appliesTo = sh.Rule
RuleMixin.Class = RuleImpl
