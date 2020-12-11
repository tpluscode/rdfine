import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalStudyMixin } from './MedicalStudy';

export interface MedicalObservationalStudy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalStudy<D>, RdfResource<D> {
  studyDesign: Schema.MedicalObservationalStudyDesign | undefined;
}

export function MedicalObservationalStudyMixin<Base extends Constructor>(Resource: Base): Constructor<MedicalObservationalStudy> & Base {
  @namespace(schema)
  class MedicalObservationalStudyClass extends MedicalStudyMixin(Resource) implements Partial<MedicalObservationalStudy> {
    @property()
    studyDesign: Schema.MedicalObservationalStudyDesign | undefined;
  }
  return MedicalObservationalStudyClass
}

class MedicalObservationalStudyImpl extends MedicalObservationalStudyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalObservationalStudy>) {
    super(arg, init)
    this.types.add(schema.MedicalObservationalStudy)
  }

  static readonly __mixins: Mixin[] = [MedicalObservationalStudyMixin, MedicalStudyMixin];
}
MedicalObservationalStudyMixin.appliesTo = schema.MedicalObservationalStudy
MedicalObservationalStudyMixin.Class = MedicalObservationalStudyImpl
