import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ImageObjectMixin } from './ImageObject.js';

export interface ImageObjectSnapshot<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ImageObject<D>, rdfine.RdfResource<D> {
}

export function ImageObjectSnapshotMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ImageObjectSnapshot & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ImageObjectSnapshotClass extends ImageObjectMixin(Resource) {
  }
  return ImageObjectSnapshotClass as any
}

class ImageObjectSnapshotImpl extends ImageObjectSnapshotMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ImageObjectSnapshot>) {
    super(arg, init)
    this.types.add(schema.ImageObjectSnapshot)
  }

  static readonly __mixins: Mixin[] = [ImageObjectSnapshotMixin, ImageObjectMixin];
}
ImageObjectSnapshotMixin.appliesTo = schema.ImageObjectSnapshot
ImageObjectSnapshotMixin.Class = ImageObjectSnapshotImpl

export const fromPointer = createFactory<ImageObjectSnapshot>([ImageObjectMixin, ImageObjectSnapshotMixin], { types: [schema.ImageObjectSnapshot] });
