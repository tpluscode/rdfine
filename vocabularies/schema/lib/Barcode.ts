import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ImageObjectMixin } from './ImageObject';

export interface Barcode<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ImageObject<D>, RdfResource<D> {
}

export function BarcodeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Barcode> & RdfResourceCore> & Base {
  @namespace(schema)
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
