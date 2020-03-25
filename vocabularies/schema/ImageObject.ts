import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import MediaObjectMixin from './MediaObject';

export interface ImageObject extends Schema.MediaObject, RdfResource {
  caption: Schema.MediaObject;
  captionLiteral: string;
  exifData: Schema.PropertyValue;
  exifDataLiteral: string;
  representativeOfPage: boolean;
  thumbnail: ImageObject;
}

export default function ImageObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ImageObjectClass extends MediaObjectMixin(Resource) implements ImageObject {
    @property.resource()
    caption!: Schema.MediaObject;
    @property.literal({ path: schema.caption })
    captionLiteral!: string;
    @property.resource()
    exifData!: Schema.PropertyValue;
    @property.literal({ path: schema.exifData })
    exifDataLiteral!: string;
    @property.literal({ type: Boolean })
    representativeOfPage!: boolean;
    @property.resource()
    thumbnail!: ImageObject;
  }
  return ImageObjectClass
}

class ImageObjectImpl extends ImageObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ImageObject>) {
    super(arg, init)
    this.types.add(schema.ImageObject)
  }
}
ImageObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ImageObject)
ImageObjectMixin.Class = ImageObjectImpl
