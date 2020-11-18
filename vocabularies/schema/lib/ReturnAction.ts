import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TransferActionMixin } from './TransferAction';

export interface ReturnAction<ID extends ResourceNode = ResourceNode> extends Schema.TransferAction<ID>, RdfResource<ID> {
  recipient: Schema.Audience<SiblingNode<ID>> | Schema.ContactPoint<SiblingNode<ID>> | Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
}

export function ReturnActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReturnActionClass extends TransferActionMixin(Resource) implements ReturnAction {
    @property.resource()
    recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
  }
  return ReturnActionClass
}

class ReturnActionImpl extends ReturnActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReturnAction>) {
    super(arg, init)
    this.types.add(schema.ReturnAction)
  }

  static readonly __mixins: Mixin[] = [ReturnActionMixin, TransferActionMixin];
}
ReturnActionMixin.appliesTo = schema.ReturnAction
ReturnActionMixin.Class = ReturnActionImpl
