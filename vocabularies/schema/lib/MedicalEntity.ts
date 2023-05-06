import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ThingMixin } from './Thing.js';

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

export function MedicalEntityMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalEntity> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalEntityClass extends ThingMixin(Resource) implements Partial<MedicalEntity> {
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

export const fromPointer = createFactory<MedicalEntity>([ThingMixin, MedicalEntityMixin], { types: [schema.MedicalEntity] });
