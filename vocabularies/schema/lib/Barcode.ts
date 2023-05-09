import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ImageObjectMixin } from './ImageObject.js';

export interface Barcode<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ImageObject<D>, rdfine.RdfResource<D> {
}

export function BarcodeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Barcode> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BarcodeClass extends ImageObjectMixin(Resource) implements Partial<Barcode> {
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

export const fromPointer = createFactory<Barcode>([ImageObjectMixin, BarcodeMixin], { types: [schema.Barcode] });
