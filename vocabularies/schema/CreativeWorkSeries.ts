import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';
import { SeriesMixin } from './Series';

export interface CreativeWorkSeries<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.Series<D>, RdfResource<D> {
  endDate: Date | undefined;
  issn: string | undefined;
  startDate: Date | undefined;
}

export function CreativeWorkSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreativeWorkSeriesClass extends SeriesMixin(CreativeWorkMixin(Resource)) implements CreativeWorkSeries {
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    endDate: Date | undefined;
    @property.literal()
    issn: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    startDate: Date | undefined;
  }
  return CreativeWorkSeriesClass
}

class CreativeWorkSeriesImpl extends CreativeWorkSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CreativeWorkSeries>) {
    super(arg, init)
    this.types.add(schema.CreativeWorkSeries)
  }

  static readonly __mixins: Mixin[] = [CreativeWorkSeriesMixin, CreativeWorkMixin, SeriesMixin];
}
CreativeWorkSeriesMixin.appliesTo = schema.CreativeWorkSeries
CreativeWorkSeriesMixin.Class = CreativeWorkSeriesImpl
