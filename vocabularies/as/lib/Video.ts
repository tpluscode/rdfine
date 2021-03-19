import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { DocumentMixin } from './Document';

export interface Video<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Document<D>, RdfResource<D> {
}

export function VideoMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Video> & RdfResourceCore> & Base {
  @namespace(as)
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
