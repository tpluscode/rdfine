import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ThingMixin } from './Thing';

export interface MedicalEntity<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Thing<D>, RdfResource<D> {
  code: Schema.MedicalCode<D> | undefined;
  guideline: Schema.MedicalGuideline<D> | undefined;
  legalStatus: Schema.DrugLegalStatus<D> | undefined;
  legalStatusLiteral: string | undefined;
  medicineSystem: Schema.MedicineSystem | undefined;
  recognizingAuthority: Schema.Organization<D> | undefined;
  relevantSpecialty: Schema.MedicalSpecialty | undefined;
  study: Schema.MedicalStudy<D> | undefined;
}

export function MedicalEntityMixin<Base extends Constructor>(Resource: Base): Constructor<MedicalEntity> & Base {
  @namespace(schema)
  class MedicalEntityClass extends ThingMixin(Resource) implements MedicalEntity {
    @property.resource()
    code: Schema.MedicalCode | undefined;
    @property.resource()
    guideline: Schema.MedicalGuideline | undefined;
    @property.resource()
    legalStatus: Schema.DrugLegalStatus | undefined;
    @property.literal({ path: schema.legalStatus })
    legalStatusLiteral: string | undefined;
    @property()
    medicineSystem: Schema.MedicineSystem | undefined;
    @property.resource()
    recognizingAuthority: Schema.Organization | undefined;
    @property()
    relevantSpecialty: Schema.MedicalSpecialty | undefined;
    @property.resource()
    study: Schema.MedicalStudy | undefined;
  }
  return MedicalEntityClass
}

class MedicalEntityImpl extends MedicalEntityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalEntity>) {
    super(arg, init)
    this.types.add(schema.MedicalEntity)
  }

  static readonly __mixins: Mixin[] = [MedicalEntityMixin, ThingMixin];
}
MedicalEntityMixin.appliesTo = schema.MedicalEntity
MedicalEntityMixin.Class = MedicalEntityImpl
