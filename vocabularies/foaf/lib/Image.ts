import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';
import { DocumentMixin } from './Document';

export interface Image<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.Document<D>, RdfResource<D> {
  depicts: RDF.NamedNode | undefined;
  thumbnail: Foaf.Image<D> | undefined;
}

export function ImageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Image> & RdfResourceCore> & Base {
  @namespace(foaf)
  class ImageClass extends DocumentMixin(Resource) implements Partial<Image> {
    @property()
    depicts: RDF.NamedNode | undefined;
    @property.resource({ as: [ImageMixin] })
    thumbnail: Foaf.Image | undefined;
  }
  return ImageClass
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
