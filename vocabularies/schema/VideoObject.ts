import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MediaObjectMixin } from './MediaObject';

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

export function VideoObjectMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<VideoObject>) {
    super(arg, init)
    this.types.add(schema.VideoObject)
  }

  static readonly __mixins: Mixin[] = [VideoObjectMixin, MediaObjectMixin];
}
VideoObjectMixin.appliesTo = schema.VideoObject
VideoObjectMixin.Class = VideoObjectImpl
