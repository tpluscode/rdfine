import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TransferActionMixin } from './TransferAction';

export interface SendAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, RdfResource<D> {
  deliveryMethod: Schema.DeliveryMethod | undefined;
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function SendActionMixin<Base extends Constructor>(Resource: Base): Constructor<SendAction> & Base {
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
