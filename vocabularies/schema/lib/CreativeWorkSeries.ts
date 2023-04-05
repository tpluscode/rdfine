import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';
import { SeriesMixin } from './Series.js';

export interface CreativeWorkSeries<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.Series<D>, RdfResource<D> {
  endDate: Date | undefined;
  issn: string | undefined;
  startDate: Date | undefined;
}

export function CreativeWorkSeriesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CreativeWorkSeries> & RdfResourceCore> & Base {
  @namespace(schema)
  class CreativeWorkSeriesClass extends SeriesMixin(CreativeWorkMixin(Resource)) implements Partial<CreativeWorkSeries> {
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

export const fromPointer = createFactory<CreativeWorkSeries>([SeriesMixin, CreativeWorkMixin, CreativeWorkSeriesMixin], { types: [schema.CreativeWorkSeries] });
