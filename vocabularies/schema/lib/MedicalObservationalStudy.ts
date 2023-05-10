import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalStudyMixin } from './MedicalStudy.js';

export interface MedicalObservationalStudy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalStudy<D>, rdfine.RdfResource<D> {
  studyDesign: Schema.MedicalObservationalStudyDesign | undefined;
}

export function MedicalObservationalStudyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MedicalObservationalStudy> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalObservationalStudyClass extends MedicalStudyMixin(Resource) implements Partial<MedicalObservationalStudy> {
    @rdfine.property()
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
