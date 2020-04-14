import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ClipMixin from './Clip';

export interface VideoGameClip extends Schema.Clip, RdfResource {
}

export default function VideoGameClipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VideoGameClipClass extends ClipMixin(Resource) implements VideoGameClip {
  }
  return VideoGameClipClass
}

class VideoGameClipImpl extends VideoGameClipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VideoGameClip>) {
    super(arg, init)
    this.types.add(schema.VideoGameClip)
  }
}
VideoGameClipMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VideoGameClip)
VideoGameClipMixin.Class = VideoGameClipImpl
