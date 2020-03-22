import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TVClip)
  }
}
TVClipMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TVClip)
TVClipMixin.Class = TVClipImpl
