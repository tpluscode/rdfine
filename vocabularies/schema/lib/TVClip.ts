import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ClipMixin } from './Clip';

export interface TVClip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Clip<D>, RdfResource<D> {
  partOfTVSeries: Schema.TVSeries<D> | undefined;
}

export function TVClipMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TVClip> & RdfResourceCore> & Base {
  @namespace(schema)
  class TVClipClass extends ClipMixin(Resource) implements Partial<TVClip> {
    @property.resource()
    partOfTVSeries: Schema.TVSeries | undefined;
  }
  return TVClipClass
}

class TVClipImpl extends TVClipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TVClip>) {
    super(arg, init)
    this.types.add(schema.TVClip)
  }

  static readonly __mixins: Mixin[] = [TVClipMixin, ClipMixin];
}
TVClipMixin.appliesTo = schema.TVClip
TVClipMixin.Class = TVClipImpl
