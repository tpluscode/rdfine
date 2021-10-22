import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { VideoObjectMixin } from './VideoObject';

export interface VideoObjectSnapshot<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.VideoObject<D>, RdfResource<D> {
}

export function VideoObjectSnapshotMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<VideoObjectSnapshot> & RdfResourceCore> & Base {
  @namespace(schema)
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