import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface WarrantyPromise extends Schema.StructuredValue, RdfResource {
  durationOfWarranty: Schema.QuantitativeValue | undefined;
  warrantyScope: Schema.WarrantyScope | undefined;
}

export function WarrantyPromiseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WarrantyPromiseClass extends StructuredValueMixin(Resource) implements WarrantyPromise {
    @property.resource()
    durationOfWarranty: Schema.QuantitativeValue | undefined;
    @property()
    warrantyScope: Schema.WarrantyScope | undefined;
  }
  return WarrantyPromiseClass
}

class WarrantyPromiseImpl extends WarrantyPromiseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WarrantyPromise>) {
    super(arg, init)
    this.types.add(schema.WarrantyPromise)
  }

  static readonly __mixins: Mixin[] = [WarrantyPromiseMixin, StructuredValueMixin];
}
WarrantyPromiseMixin.appliesTo = schema.WarrantyPromise
WarrantyPromiseMixin.Class = WarrantyPromiseImpl
