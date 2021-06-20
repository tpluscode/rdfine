import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalStudyMixin } from './MedicalStudy';

export interface MedicalObservationalStudy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalStudy<D>, RdfResource<D> {
  studyDesign: Schema.MedicalObservationalStudyDesign | undefined;
}

export function MedicalObservationalStudyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalObservationalStudy> & RdfResourceCore> & Base {
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

export const fromPointer = createFactory<MedicalObservationalStudy>([MedicalStudyMixin, MedicalObservationalStudyMixin], { types: [schema.MedicalObservationalStudy] });
