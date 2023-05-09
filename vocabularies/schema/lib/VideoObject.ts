import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MediaObjectMixin } from './MediaObject.js';

export interface VideoObject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MediaObject<D>, rdfine.RdfResource<D> {
  actor: Schema.Person<D> | undefined;
  actors: Schema.Person<D> | undefined;
  caption: Schema.MediaObject<D> | undefined;
  captionLiteral: string | undefined;
  director: Schema.Person<D> | undefined;
  directors: Schema.Person<D> | undefined;
  embeddedTextCaption: string | undefined;
  musicBy: Schema.MusicGroup<D> | Schema.Person<D> | undefined;
  thumbnail: Schema.ImageObject<D> | undefined;
  transcript: string | undefined;
  videoFrameSize: string | undefined;
  videoQuality: string | undefined;
}

export function VideoObjectMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<VideoObject> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VideoObjectClass extends MediaObjectMixin(Resource) implements Partial<VideoObject> {
    @rdfine.property.resource()
    actor: Schema.Person | undefined;
    @rdfine.property.resource()
    actors: Schema.Person | undefined;
    @rdfine.property.resource()
    caption: Schema.MediaObject | undefined;
    @rdfine.property.literal({ path: schema.caption })
    captionLiteral: string | undefined;
    @rdfine.property.resource()
    director: Schema.Person | undefined;
    @rdfine.property.resource()
    directors: Schema.Person | undefined;
    @rdfine.property.literal()
    embeddedTextCaption: string | undefined;
    @rdfine.property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @rdfine.property.resource()
    thumbnail: Schema.ImageObject | undefined;
    @rdfine.property.literal()
    transcript: string | undefined;
    @rdfine.property.literal()
    videoFrameSize: string | undefined;
    @rdfine.property.literal()
    videoQuality: string | undefined;
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

export const fromPointer = createFactory<VideoObject>([MediaObjectMixin, VideoObjectMixin], { types: [schema.VideoObject] });
