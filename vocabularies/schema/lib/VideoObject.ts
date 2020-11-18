import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MediaObjectMixin } from './MediaObject';

export interface VideoObject<ID extends ResourceNode = ResourceNode> extends Schema.MediaObject<ID>, RdfResource<ID> {
  actor: Schema.Person<SiblingNode<ID>> | undefined;
  actors: Schema.Person<SiblingNode<ID>> | undefined;
  caption: Schema.MediaObject<SiblingNode<ID>> | undefined;
  captionLiteral: string | undefined;
  director: Schema.Person<SiblingNode<ID>> | undefined;
  directors: Schema.Person<SiblingNode<ID>> | undefined;
  musicBy: Schema.MusicGroup<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  thumbnail: Schema.ImageObject<SiblingNode<ID>> | undefined;
  transcript: string | undefined;
  videoFrameSize: string | undefined;
  videoQuality: string | undefined;
}

export function VideoObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VideoObjectClass extends MediaObjectMixin(Resource) implements VideoObject {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    actors: Schema.Person | undefined;
    @property.resource()
    caption: Schema.MediaObject | undefined;
    @property.literal({ path: schema.caption })
    captionLiteral: string | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.resource()
    directors: Schema.Person | undefined;
    @property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @property.resource()
    thumbnail: Schema.ImageObject | undefined;
    @property.literal()
    transcript: string | undefined;
    @property.literal()
    videoFrameSize: string | undefined;
    @property.literal()
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
