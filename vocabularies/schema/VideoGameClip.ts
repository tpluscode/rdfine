import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.VideoGameClip)
  }
}
VideoGameClipMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VideoGameClip)
VideoGameClipMixin.Class = VideoGameClipImpl
