import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { VideoObjectMixin } from './VideoObject.js';

export interface VideoObjectSnapshot<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.VideoObject<D>, rdfine.RdfResource<D> {
}

export function VideoObjectSnapshotMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<VideoObjectSnapshot> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VideoObjectSnapshotClass extends VideoObjectMixin(Resource) implements Partial<VideoObjectSnapshot> {
  }
  return VideoObjectSnapshotClass
}

class VideoObjectSnapshotImpl extends VideoObjectSnapshotMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VideoObjectSnapshot>) {
    super(arg, init)
    this.types.add(schema.VideoObjectSnapshot)
  }

  static readonly __mixins: Mixin[] = [VideoObjectSnapshotMixin, VideoObjectMixin];
}
VideoObjectSnapshotMixin.appliesTo = schema.VideoObjectSnapshot
VideoObjectSnapshotMixin.Class = VideoObjectSnapshotImpl

export const fromPointer = createFactory<VideoObjectSnapshot>([VideoObjectMixin, VideoObjectSnapshotMixin], { types: [schema.VideoObjectSnapshot] });
