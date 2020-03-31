import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Barcode>) {
    super(arg, init)
    this.types.add(schema.Barcode)
  }
}
BarcodeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Barcode)
BarcodeMixin.Class = BarcodeImpl
