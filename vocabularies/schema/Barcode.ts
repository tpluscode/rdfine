import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ImageObjectMixin } from './ImageObject';

export interface Barcode extends Schema.ImageObject, RdfResource {
}

export function BarcodeMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [BarcodeMixin, ImageObjectMixin];
}
BarcodeMixin.appliesTo = schema.Barcode
BarcodeMixin.Class = BarcodeImpl
