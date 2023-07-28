import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface Observation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  marginOfError: Schema.QuantitativeValue<D> | undefined;
  measuredProperty: Schema.Property<D> | undefined;
  measuredValue: RDF.Term | undefined;
  observationDate: Date | undefined;
  observedNode: Schema.StatisticalPopulation<D> | undefined;
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

class ObservationImpl extends ObservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Observation>) {
    super(arg, init)
    this.types.add(schema.Observation)
  }

  static readonly __mixins: Mixin[] = [ObservationMixin, IntangibleMixin];
}
ObservationMixin.appliesTo = schema.Observation
ObservationMixin.Class = ObservationImpl

export const fromPointer = createFactory<Observation>([IntangibleMixin, ObservationMixin], { types: [schema.Observation] });
