import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { DocumentMixin } from './Document.js';

export interface Image<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Document<D>, rdfine.RdfResource<D> {
}

export function ImageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Image & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class ImageClass extends DocumentMixin(Resource) {
  }
  return ImageClass as any
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
