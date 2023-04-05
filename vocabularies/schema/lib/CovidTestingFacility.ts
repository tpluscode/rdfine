import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalClinicMixin } from './MedicalClinic';

export interface CovidTestingFacility<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalClinic<D>, RdfResource<D> {
}

export function CovidTestingFacilityMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CovidTestingFacility> & RdfResourceCore> & Base {
  @namespace(schema)
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
