import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ClipMixin } from './Clip.js';

export interface VideoGameClip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Clip<D>, rdfine.RdfResource<D> {
}

export function VideoGameClipMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<VideoGameClip & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VideoGameClipClass extends ClipMixin(Resource) {
  }
  return VideoGameClipClass as any
}

class VideoGameClipImpl extends VideoGameClipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VideoGameClip>) {
    super(arg, init)
    this.types.add(schema.VideoGameClip)
  }

  static readonly __mixins: Mixin[] = [VideoGameClipMixin, ClipMixin];
}
VideoGameClipMixin.appliesTo = schema.VideoGameClip
VideoGameClipMixin.Class = VideoGameClipImpl

export const fromPointer = createFactory<VideoGameClip>([ClipMixin, VideoGameClipMixin], { types: [schema.VideoGameClip] });
