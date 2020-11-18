import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ConsumeActionMixin } from './ConsumeAction';

export interface EatAction<ID extends ResourceNode = ResourceNode> extends Schema.ConsumeAction<ID>, RdfResource<ID> {
}

export function EatActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EatActionClass extends ConsumeActionMixin(Resource) implements EatAction {
  }
  return EatActionClass
}

class EatActionImpl extends EatActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EatAction>) {
    super(arg, init)
    this.types.add(schema.EatAction)
  }

  static readonly __mixins: Mixin[] = [EatActionMixin, ConsumeActionMixin];
}
EatActionMixin.appliesTo = schema.EatAction
EatActionMixin.Class = EatActionImpl
