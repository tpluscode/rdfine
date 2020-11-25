import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AllocateActionMixin } from './AllocateAction';

export interface RejectAction<ID extends ResourceNode = ResourceNode> extends Schema.AllocateAction<ID>, RdfResource<ID> {
}

export function RejectActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RejectActionClass extends AllocateActionMixin(Resource) implements RejectAction {
  }
  return RejectActionClass
}

class RejectActionImpl extends RejectActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RejectAction>) {
    super(arg, init)
    this.types.add(schema.RejectAction)
  }

  static readonly __mixins: Mixin[] = [RejectActionMixin, AllocateActionMixin];
}
RejectActionMixin.appliesTo = schema.RejectAction
RejectActionMixin.Class = RejectActionImpl
