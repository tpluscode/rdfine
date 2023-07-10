import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MediaObjectMixin } from './MediaObject.js';

export interface ImageObject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MediaObject<D>, rdfine.RdfResource<D> {
  caption: Schema.MediaObject<D> | undefined;
  captionLiteral: string | undefined;
  embeddedTextCaption: string | undefined;
  exifData: Schema.PropertyValue<D> | undefined;
  exifDataLiteral: string | undefined;
  representativeOfPage: boolean | undefined;
  thumbnail: Schema.ImageObject<D> | undefined;
}

export function ImageObjectMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ImageObject & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ImageObjectClass extends MediaObjectMixin(Resource) {
    @rdfine.property.resource()
    caption: Schema.MediaObject | undefined;
    @rdfine.property.literal({ path: schema.caption })
    captionLiteral: string | undefined;
    @rdfine.property.literal()
    embeddedTextCaption: string | undefined;
    @rdfine.property.resource()
    exifData: Schema.PropertyValue | undefined;
    @rdfine.property.literal({ path: schema.exifData })
    exifDataLiteral: string | undefined;
    @rdfine.property.literal({ type: Boolean })
    representativeOfPage: boolean | undefined;
    @rdfine.property.resource()
    thumbnail: Schema.ImageObject | undefined;
  }
  return ImageObjectClass as any
}

class ImageObjectImpl extends ImageObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ImageObject>) {
    super(arg, init)
    this.types.add(schema.ImageObject)
  }

  static readonly __mixins: Mixin[] = [ImageObjectMixin, MediaObjectMixin];
}
ImageObjectMixin.appliesTo = schema.ImageObject
ImageObjectMixin.Class = ImageObjectImpl

export const fromPointer = createFactory<ImageObject>([MediaObjectMixin, ImageObjectMixin], { types: [schema.ImageObject] });
