import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface WarrantyPromise extends Schema.StructuredValue, RdfResource {
  durationOfWarranty: Schema.QuantitativeValue;
  warrantyScope: Schema.WarrantyScope;
}

export default function WarrantyPromiseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WarrantyPromiseClass extends StructuredValueMixin(Resource) implements WarrantyPromise {
    @property.resource()
    durationOfWarranty!: Schema.QuantitativeValue;
    @property()
    warrantyScope!: Schema.WarrantyScope;
  }
  return WarrantyPromiseClass
}

class WarrantyPromiseImpl extends WarrantyPromiseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<WarrantyPromise>) {
    super(arg)
    this.types.add(schema.WarrantyPromise)
    initializeProperties<WarrantyPromise>(this, init)
  }
}
WarrantyPromiseMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WarrantyPromise)
WarrantyPromiseMixin.Class = WarrantyPromiseImpl
