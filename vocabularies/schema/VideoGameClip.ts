import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ClipMixin } from './Clip';

export interface VideoGameClip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Clip<D>, RdfResource<D> {
}

export function VideoGameClipMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [VideoGameClipMixin, ClipMixin];
}
VideoGameClipMixin.appliesTo = schema.VideoGameClip
VideoGameClipMixin.Class = VideoGameClipImpl
