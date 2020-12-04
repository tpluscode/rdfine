import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ClipMixin } from './Clip';

export interface MovieClip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Clip<D>, RdfResource<D> {
}

export function MovieClipMixin<Base extends Constructor>(Resource: Base): Constructor<MovieClip> & Base {
  @namespace(schema)
  class MovieClipClass extends ClipMixin(Resource) implements MovieClip {
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
