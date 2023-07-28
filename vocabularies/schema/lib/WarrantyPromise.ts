import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface WarrantyPromise<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, rdfine.RdfResource<D> {
  durationOfWarranty: Schema.QuantitativeValue<D> | undefined;
  warrantyScope: Schema.WarrantyScope | undefined;
}

export function WarrantyPromiseMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WarrantyPromise & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WarrantyPromiseClass extends StructuredValueMixin(Resource) {
    @rdfine.property.resource()
    durationOfWarranty: Schema.QuantitativeValue | undefined;
    @rdfine.property()
    warrantyScope: Schema.WarrantyScope | undefined;
  }
  return WarrantyPromiseClass as any
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

export const fromPointer = createFactory<WarrantyPromise>([StructuredValueMixin, WarrantyPromiseMixin], { types: [schema.WarrantyPromise] });
