import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MediaObjectMixin } from './MediaObject';

export interface ImageObject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MediaObject<D>, RdfResource<D> {
  caption: Schema.MediaObject<D> | undefined;
  captionLiteral: string | undefined;
  exifData: Schema.PropertyValue<D> | undefined;
  exifDataLiteral: string | undefined;
  representativeOfPage: boolean | undefined;
  thumbnail: Schema.ImageObject<D> | undefined;
}

export function ImageObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ImageObjectClass extends MediaObjectMixin(Resource) implements ImageObject {
    @property.resource()
    caption: Schema.MediaObject | undefined;
    @property.literal({ path: schema.caption })
    captionLiteral: string | undefined;
    @property.resource()
    exifData: Schema.PropertyValue | undefined;
    @property.literal({ path: schema.exifData })
    exifDataLiteral: string | undefined;
    @property.literal({ type: Boolean })
    representativeOfPage: boolean | undefined;
    @property.resource()
    thumbnail: Schema.ImageObject | undefined;
  }
  return ImageObjectClass
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
