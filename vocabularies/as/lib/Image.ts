import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { DocumentMixin } from './Document';

export interface Image<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Document<D>, RdfResource<D> {
}

export function ImageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Image> & RdfResourceCore> & Base {
  @namespace(as)
  class ImageClass extends DocumentMixin(Resource) implements Partial<Image> {
  }
  return ImageClass
}

class ImageImpl extends ImageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Image>) {
    super(arg, init)
    this.types.add(as.Image)
  }

  static readonly __mixins: Mixin[] = [ImageMixin, DocumentMixin];
}
ImageMixin.appliesTo = as.Image
ImageMixin.Class = ImageImpl

export const fromPointer = createFactory<Image>([DocumentMixin, ImageMixin], { types: [as.Image] });
