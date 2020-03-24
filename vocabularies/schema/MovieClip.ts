import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ClipMixin from './Clip';

export interface MovieClip extends Schema.Clip, RdfResource {
}

export default function MovieClipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MovieClipClass extends ClipMixin(Resource) implements MovieClip {
  }
  return MovieClipClass
}

class MovieClipImpl extends MovieClipMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MovieClip)
  }
}
MovieClipMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MovieClip)
MovieClipMixin.Class = MovieClipImpl
