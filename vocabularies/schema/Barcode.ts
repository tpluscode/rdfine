import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ImageObjectMixin from './ImageObject';

export interface Barcode extends Schema.ImageObject, RdfResource {
}

export default function BarcodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BarcodeClass extends ImageObjectMixin(Resource) implements Barcode {
  }
  return BarcodeClass
}

class BarcodeImpl extends BarcodeMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Barcode)
  }
}
BarcodeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Barcode)
BarcodeMixin.Class = BarcodeImpl
