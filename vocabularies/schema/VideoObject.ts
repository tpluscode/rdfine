import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import MediaObjectMixin from './MediaObject';

export interface VideoObject extends Schema.MediaObject, RdfResource {
  actor: Schema.Person;
  actors: Schema.Person;
  caption: Schema.MediaObject;
  captionLiteral: string;
  director: Schema.Person;
  directors: Schema.Person;
  musicBy: Schema.MusicGroup | Schema.Person;
  thumbnail: Schema.ImageObject;
  transcript: string;
  videoFrameSize: string;
  videoQuality: string;
}

export default function VideoObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VideoObjectClass extends MediaObjectMixin(Resource) implements VideoObject {
    @property.resource()
    actor!: Schema.Person;
    @property.resource()
    actors!: Schema.Person;
    @property.resource()
    caption!: Schema.MediaObject;
    @property.literal({ path: schema.caption })
    captionLiteral!: string;
    @property.resource()
    director!: Schema.Person;
    @property.resource()
    directors!: Schema.Person;
    @property.resource()
    musicBy!: Schema.MusicGroup | Schema.Person;
    @property.resource()
    thumbnail!: Schema.ImageObject;
    @property.literal()
    transcript!: string;
    @property.literal()
    videoFrameSize!: string;
    @property.literal()
    videoQuality!: string;
  }
  return VideoObjectClass
}

class VideoObjectImpl extends VideoObjectMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.VideoObject)
  }
}
VideoObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VideoObject)
VideoObjectMixin.Class = VideoObjectImpl
