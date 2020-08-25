import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ClipMixin } from './Clip';

export interface MovieClip extends Schema.Clip, RdfResource {
}

export function MovieClipMixin<Base extends Constructor>(Resource: Base) {
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
