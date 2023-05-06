import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ClipMixin } from './Clip.js';

export interface MovieClip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Clip<D>, RdfResource<D> {
}

export function MovieClipMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MovieClip> & RdfResourceCore> & Base {
  @namespace(schema)
  class MovieClipClass extends ClipMixin(Resource) implements Partial<MovieClip> {
  }
  return MovieClipClass
}

class MovieClipImpl extends MovieClipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MovieClip>) {
    super(arg, init)
    this.types.add(schema.MovieClip)
  }

  static readonly __mixins: Mixin[] = [MovieClipMixin, ClipMixin];
}
MovieClipMixin.appliesTo = schema.MovieClip
MovieClipMixin.Class = MovieClipImpl

export const fromPointer = createFactory<MovieClip>([ClipMixin, MovieClipMixin], { types: [schema.MovieClip] });
