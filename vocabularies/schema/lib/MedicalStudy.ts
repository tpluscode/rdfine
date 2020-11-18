import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalStudy<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
  healthCondition: Schema.MedicalCondition<SiblingNode<ID>> | undefined;
  sponsor: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  status: string | undefined;
  statusTerm: Schema.EventStatusType | Schema.MedicalStudyStatus | undefined;
  studyLocation: Schema.AdministrativeArea<SiblingNode<ID>> | undefined;
  studySubject: Schema.MedicalEntity<SiblingNode<ID>> | undefined;
}

export function MedicalStudyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalStudyClass extends MedicalEntityMixin(Resource) implements MedicalStudy {
    @property.resource()
    healthCondition: Schema.MedicalCondition | undefined;
    @property.resource()
    sponsor: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    status: string | undefined;
    @property({ path: schema.status })
    statusTerm: Schema.EventStatusType | Schema.MedicalStudyStatus | undefined;
    @property.resource()
    studyLocation: Schema.AdministrativeArea | undefined;
    @property.resource()
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
