import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '../index.js';
import { DocumentMixin } from './Document.js';

export interface Image<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.Document<D>, rdfine.RdfResource<D> {
  depicts: RDF.NamedNode | undefined;
  thumbnail: Foaf.Image<D> | undefined;
}

export function ImageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Image & RdfResourceCore> & Base {
  @rdfine.namespace(foaf)
  class ImageClass extends DocumentMixin(Resource) {
    @rdfine.property()
    depicts: RDF.NamedNode | undefined;
    @rdfine.property.resource({ as: [ImageMixin] })
    thumbnail: Foaf.Image | undefined;
  }
  return ImageClass as any
}

class ImageImpl extends ImageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Image>) {
    super(arg, init)
    this.types.add(foaf.Image)
  }

  static readonly __mixins: Mixin[] = [ImageMixin, DocumentMixin];
}
ImageMixin.appliesTo = foaf.Image
ImageMixin.Class = ImageImpl

export const fromPointer = createFactory<Image>([DocumentMixin, ImageMixin], { types: [foaf.Image] });
