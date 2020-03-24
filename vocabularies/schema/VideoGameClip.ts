import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<VideoGameClip>) {
    super(arg)
    this.types.add(schema.VideoGameClip)
    initializeProperties(this, init)
  }
}
VideoGameClipMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VideoGameClip)
VideoGameClipMixin.Class = VideoGameClipImpl
