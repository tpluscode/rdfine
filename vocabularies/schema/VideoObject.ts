import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<VideoObject>) {
    super(arg)
    this.types.add(schema.VideoObject)
    initializeProperties(this, init)
  }
}
VideoObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VideoObject)
VideoObjectMixin.Class = VideoObjectImpl
