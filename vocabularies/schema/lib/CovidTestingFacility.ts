import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalClinicMixin } from './MedicalClinic.js';

export interface CovidTestingFacility<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalClinic<D>, rdfine.RdfResource<D> {
}

export function CovidTestingFacilityMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<CovidTestingFacility> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CovidTestingFacilityClass extends MedicalClinicMixin(Resource) implements Partial<CovidTestingFacility> {
  }
  return CovidTestingFacilityClass
}

class CovidTestingFacilityImpl extends CovidTestingFacilityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CovidTestingFacility>) {
    super(arg, init)
    this.types.add(schema.CovidTestingFacility)
  }

  static readonly __mixins: Mixin[] = [CovidTestingFacilityMixin, MedicalClinicMixin];
}
CovidTestingFacilityMixin.appliesTo = schema.CovidTestingFacility
CovidTestingFacilityMixin.Class = CovidTestingFacilityImpl

export const fromPointer = createFactory<CovidTestingFacility>([MedicalClinicMixin, CovidTestingFacilityMixin], { types: [schema.CovidTestingFacility] });
