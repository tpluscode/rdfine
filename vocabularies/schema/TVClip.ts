import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ClipMixin from './Clip';

export interface TVClip extends Schema.Clip, RdfResource {
  partOfTVSeries: Schema.TVSeries;
}

export default function TVClipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TVClipClass extends ClipMixin(Resource) implements TVClip {
    @property.resource()
    partOfTVSeries!: Schema.TVSeries;
  }
  return TVClipClass
}

class TVClipImpl extends TVClipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TVClip>) {
    super(arg, init)
    this.types.add(schema.TVClip)
  }
}
TVClipMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TVClip)
TVClipMixin.Class = TVClipImpl
