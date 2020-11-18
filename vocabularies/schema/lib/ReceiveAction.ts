import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TransferActionMixin } from './TransferAction';

export interface ReceiveAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, RdfResource<D> {
  deliveryMethod: Schema.DeliveryMethod | undefined;
  sender: Schema.Audience<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function ReceiveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReceiveActionClass extends TransferActionMixin(Resource) implements ReceiveAction {
    @property()
    deliveryMethod: Schema.DeliveryMethod | undefined;
    @property.resource()
    sender: Schema.Audience | Schema.Organization | Schema.Person | undefined;
  }
  return ReceiveActionClass
}

class ReceiveActionImpl extends ReceiveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReceiveAction>) {
    super(arg, init)
    this.types.add(schema.ReceiveAction)
  }

  static readonly __mixins: Mixin[] = [ReceiveActionMixin, TransferActionMixin];
}
ReceiveActionMixin.appliesTo = schema.ReceiveAction
ReceiveActionMixin.Class = ReceiveActionImpl
