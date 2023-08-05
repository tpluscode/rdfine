import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface Observation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  marginOfError: Schema.QuantitativeValue<D> | undefined;
  measuredProperty: Schema.Property<D> | undefined;
  measuredValue: RDF.Term | undefined;
  observationDate: Date | undefined;
  observedNode: Schema.StatisticalPopulation<D> | undefined;
}

declare global {
  interface SchemaVocabulary {
    Observation: Factory<Schema.Observation>;
  }
}

export function ObservationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Observation & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ObservationClass extends IntangibleMixin(Resource) {
    @rdfine.property.resource()
    marginOfError: Schema.QuantitativeValue | undefined;
    @rdfine.property.resource()
    measuredProperty: Schema.Property | undefined;
    @rdfine.property()
    measuredValue: RDF.Term | undefined;
    @rdfine.property.literal({ type: Date })
    observationDate: Date | undefined;
    @rdfine.property.resource()
    observedNode: Schema.StatisticalPopulation | undefined;
  }
  return ObservationClass as any
}
ObservationMixin.appliesTo = schema.Observation
ObservationMixin.createFactory = (env: RdfineEnvironment) => createFactory<Observation>([IntangibleMixin, ObservationMixin], { types: [schema.Observation] }, env)
