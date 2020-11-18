import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TransferActionMixin } from './TransferAction';

export interface SendAction<ID extends ResourceNode = ResourceNode> extends Schema.TransferAction<ID>, RdfResource<ID> {
  deliveryMethod: Schema.DeliveryMethod | undefined;
  recipient: Schema.Audience<SiblingNode<ID>> | Schema.ContactPoint<SiblingNode<ID>> | Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
}

export function SendActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SendActionClass extends TransferActionMixin(Resource) implements SendAction {
    @property()
    deliveryMethod: Schema.DeliveryMethod | undefined;
    @property.resource()
    recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
  }
  return SendActionClass
}

class SendActionImpl extends SendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SendAction>) {
    super(arg, init)
    this.types.add(schema.SendAction)
  }

  static readonly __mixins: Mixin[] = [SendActionMixin, TransferActionMixin];
}
SendActionMixin.appliesTo = schema.SendAction
SendActionMixin.Class = SendActionImpl
