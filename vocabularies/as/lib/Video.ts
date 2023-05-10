import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { DocumentMixin } from './Document.js';

export interface Video<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Document<D>, rdfine.RdfResource<D> {
}

export function VideoMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Video> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class VideoClass extends DocumentMixin(Resource) implements Partial<Video> {
  }
  return VideoClass
}

class VideoImpl extends VideoMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Video>) {
    super(arg, init)
    this.types.add(as.Video)
  }

  static readonly __mixins: Mixin[] = [VideoMixin, DocumentMixin];
}
VideoMixin.appliesTo = as.Video
VideoMixin.Class = VideoImpl

export const fromPointer = createFactory<Video>([DocumentMixin, VideoMixin], { types: [as.Video] });
