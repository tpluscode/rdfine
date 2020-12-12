import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface ParcelDelivery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  carrier: Schema.Organization<D> | undefined;
  deliveryAddress: Schema.PostalAddress<D> | undefined;
  deliveryStatus: Schema.DeliveryEvent<D> | undefined;
  expectedArrivalFrom: Date | undefined;
  expectedArrivalUntil: Date | undefined;
  hasDeliveryMethod: Schema.DeliveryMethod | undefined;
  itemShipped: Schema.Product<D> | undefined;
  originAddress: Schema.PostalAddress<D> | undefined;
  partOfOrder: Schema.Order<D> | undefined;
  provider: Schema.Organization<D> | Schema.Person<D> | undefined;
  trackingNumber: string | undefined;
  trackingUrl: RDF.NamedNode | undefined;
}

export function ParcelDeliveryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ParcelDelivery> & RdfResourceCore> & Base {
  @namespace(schema)
  class ParcelDeliveryClass extends IntangibleMixin(Resource) implements Partial<ParcelDelivery> {
    @property.resource()
    carrier: Schema.Organization | undefined;
    @property.resource()
    deliveryAddress: Schema.PostalAddress | undefined;
    @property.resource()
    deliveryStatus: Schema.DeliveryEvent | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    expectedArrivalFrom: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    expectedArrivalUntil: Date | undefined;
    @property()
    hasDeliveryMethod: Schema.DeliveryMethod | undefined;
    @property.resource()
    itemShipped: Schema.Product | undefined;
    @property.resource()
    originAddress: Schema.PostalAddress | undefined;
    @property.resource()
    partOfOrder: Schema.Order | undefined;
    @property.resource()
    provider: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    trackingNumber: string | undefined;
    @property()
    trackingUrl: RDF.NamedNode | undefined;
  }
  return ParcelDeliveryClass
}

class ParcelDeliveryImpl extends ParcelDeliveryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ParcelDelivery>) {
    super(arg, init)
    this.types.add(schema.ParcelDelivery)
  }

  static readonly __mixins: Mixin[] = [ParcelDeliveryMixin, IntangibleMixin];
}
ParcelDeliveryMixin.appliesTo = schema.ParcelDelivery
ParcelDeliveryMixin.Class = ParcelDeliveryImpl
