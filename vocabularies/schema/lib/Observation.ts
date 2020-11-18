import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Observation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  marginOfError: Date | undefined;
  measuredProperty: Schema.Property<D> | undefined;
  measuredValue: RDF.Term | undefined;
  observationDate: Date | undefined;
  observedNode: Schema.StatisticalPopulation<D> | undefined;
}

export function ObservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ObservationClass extends IntangibleMixin(Resource) implements Observation {
    @property.literal({ type: Date })
    marginOfError: Date | undefined;
    @property.resource()
    measuredProperty: Schema.Property | undefined;
    @property()
    measuredValue: RDF.Term | undefined;
    @property.literal({ type: Date })
    observationDate: Date | undefined;
    @property.resource()
    observedNode: Schema.StatisticalPopulation | undefined;
  }
  return ObservationClass
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
