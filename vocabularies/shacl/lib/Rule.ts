import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Rule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  condition: Sh.Shape<D> | undefined;
}

export function RuleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Rule> & RdfResourceCore> & Base {
  @namespace(sh)
  class RuleClass extends RdfsResourceMixin(Resource) implements Partial<Rule> {
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

export const fromPointer = createFactory<Rule>([RdfsResourceMixin, RuleMixin], { types: [sh.Rule] });
