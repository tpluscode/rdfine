import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ComicStoryMixin } from './ComicStory';
import { CoverArtMixin } from './CoverArt';

export interface ComicCoverArt<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ComicStory<D>, Schema.CoverArt<D>, RdfResource<D> {
}

export function ComicCoverArtMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ComicCoverArt> & RdfResourceCore> & Base {
  @namespace(schema)
  class ComicCoverArtClass extends CoverArtMixin(ComicStoryMixin(Resource)) implements Partial<ComicCoverArt> {
  }
  return ComicCoverArtClass
}

class ComicCoverArtImpl extends ComicCoverArtMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ComicCoverArt>) {
    super(arg, init)
    this.types.add(schema.ComicCoverArt)
  }

  static readonly __mixins: Mixin[] = [ComicCoverArtMixin, ComicStoryMixin, CoverArtMixin];
}
ComicCoverArtMixin.appliesTo = schema.ComicCoverArt
ComicCoverArtMixin.Class = ComicCoverArtImpl

export const fromPointer = createFactory<ComicCoverArt>([CoverArtMixin, ComicStoryMixin, ComicCoverArtMixin], { types: [schema.ComicCoverArt] });
