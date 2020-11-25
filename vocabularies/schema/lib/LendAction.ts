import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TransferActionMixin } from './TransferAction';

export interface LendAction<ID extends ResourceNode = ResourceNode> extends Schema.TransferAction<ID>, RdfResource<ID> {
  borrower: Schema.Person<SiblingNode<ID>> | undefined;
}

export function LendActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LendActionClass extends TransferActionMixin(Resource) implements LendAction {
    @property.resource()
    borrower: Schema.Person | undefined;
  }
  return LendActionClass
}

class LendActionImpl extends LendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LendAction>) {
    super(arg, init)
    this.types.add(schema.LendAction)
  }

  static readonly __mixins: Mixin[] = [LendActionMixin, TransferActionMixin];
}
LendActionMixin.appliesTo = schema.LendAction
LendActionMixin.Class = LendActionImpl
