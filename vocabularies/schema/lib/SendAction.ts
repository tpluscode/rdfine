import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TransferActionMixin } from './TransferAction.js';

export interface SendAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, rdfine.RdfResource<D> {
  deliveryMethod: Schema.DeliveryMethod | undefined;
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function SendActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SendAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SendActionClass extends TransferActionMixin(Resource) implements Partial<SendAction> {
    @rdfine.property()
    deliveryMethod: Schema.DeliveryMethod | undefined;
    @rdfine.property.resource()
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

export const fromPointer = createFactory<SendAction>([TransferActionMixin, SendActionMixin], { types: [schema.SendAction] });
