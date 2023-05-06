import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface ShippingDeliveryTime<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  businessDays: Schema.OpeningHoursSpecification<D> | undefined;
  cutoffTime: Date | undefined;
  handlingTime: Schema.QuantitativeValue<D> | undefined;
  transitTime: Schema.QuantitativeValue<D> | undefined;
}

export function ShippingDeliveryTimeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ShippingDeliveryTime> & RdfResourceCore> & Base {
  @namespace(schema)
  class ShippingDeliveryTimeClass extends StructuredValueMixin(Resource) implements Partial<ShippingDeliveryTime> {
    @property.resource()
    businessDays: Schema.OpeningHoursSpecification | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    cutoffTime: Date | undefined;
    @property.resource()
    handlingTime: Schema.QuantitativeValue | undefined;
    @property.resource()
    transitTime: Schema.QuantitativeValue | undefined;
  }
  return ShippingDeliveryTimeClass
}

class ShippingDeliveryTimeImpl extends ShippingDeliveryTimeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ShippingDeliveryTime>) {
    super(arg, init)
    this.types.add(schema.ShippingDeliveryTime)
  }

  static readonly __mixins: Mixin[] = [ShippingDeliveryTimeMixin, StructuredValueMixin];
}
ShippingDeliveryTimeMixin.appliesTo = schema.ShippingDeliveryTime
ShippingDeliveryTimeMixin.Class = ShippingDeliveryTimeImpl

export const fromPointer = createFactory<ShippingDeliveryTime>([StructuredValueMixin, ShippingDeliveryTimeMixin], { types: [schema.ShippingDeliveryTime] });
