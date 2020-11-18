import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlanActionMixin } from './PlanAction';

export interface CancelAction<ID extends ResourceNode = ResourceNode> extends Schema.PlanAction<ID>, RdfResource<ID> {
}

export function CancelActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CancelActionClass extends PlanActionMixin(Resource) implements CancelAction {
  }
  return CancelActionClass
}

class CancelActionImpl extends CancelActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CancelAction>) {
    super(arg, init)
    this.types.add(schema.CancelAction)
  }

  static readonly __mixins: Mixin[] = [CancelActionMixin, PlanActionMixin];
}
CancelActionMixin.appliesTo = schema.CancelAction
CancelActionMixin.Class = CancelActionImpl
