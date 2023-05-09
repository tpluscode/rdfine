import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface MedicalStudy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, rdfine.RdfResource<D> {
  healthCondition: Schema.MedicalCondition<D> | undefined;
  sponsor: Schema.Organization<D> | Schema.Person<D> | undefined;
  status: string | undefined;
  statusTerm: Schema.EventStatusType | Schema.MedicalStudyStatus | undefined;
  studyLocation: Schema.AdministrativeArea<D> | undefined;
  studySubject: Schema.MedicalEntity<D> | undefined;
}

export function MedicalStudyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MedicalStudy> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalStudyClass extends MedicalEntityMixin(Resource) implements Partial<MedicalStudy> {
    @rdfine.property.resource()
    healthCondition: Schema.MedicalCondition | undefined;
    @rdfine.property.resource()
    sponsor: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.literal()
    status: string | undefined;
    @rdfine.property({ path: schema.status })
    statusTerm: Schema.EventStatusType | Schema.MedicalStudyStatus | undefined;
    @rdfine.property.resource()
    studyLocation: Schema.AdministrativeArea | undefined;
    @rdfine.property.resource()
    studySubject: Schema.MedicalEntity | undefined;
  }
  return MedicalStudyClass
}

class MedicalStudyImpl extends MedicalStudyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalStudy>) {
    super(arg, init)
    this.types.add(schema.MedicalStudy)
  }

  static readonly __mixins: Mixin[] = [MedicalStudyMixin, MedicalEntityMixin];
}
MedicalStudyMixin.appliesTo = schema.MedicalStudy
MedicalStudyMixin.Class = MedicalStudyImpl

export const fromPointer = createFactory<MedicalStudy>([MedicalEntityMixin, MedicalStudyMixin], { types: [schema.MedicalStudy] });
