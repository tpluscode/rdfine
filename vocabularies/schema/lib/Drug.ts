import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SubstanceMixin } from './Substance';

export interface Drug<ID extends ResourceNode = ResourceNode> extends Schema.Substance<ID>, RdfResource<ID> {
  activeIngredient: string | undefined;
  administrationRoute: string | undefined;
  alcoholWarning: string | undefined;
  availableStrength: Schema.DrugStrength<SiblingNode<ID>> | undefined;
  breastfeedingWarning: string | undefined;
  clincalPharmacology: string | undefined;
  clinicalPharmacology: string | undefined;
  dosageForm: string | undefined;
  doseSchedule: Schema.DoseSchedule<SiblingNode<ID>> | undefined;
  drugClass: Schema.DrugClass<SiblingNode<ID>> | undefined;
  drugUnit: string | undefined;
  foodWarning: string | undefined;
  includedInHealthInsurancePlan: Schema.HealthInsurancePlan<SiblingNode<ID>> | undefined;
  interactingDrug: Schema.Drug<SiblingNode<ID>> | undefined;
  isAvailableGenerically: boolean | undefined;
  isProprietary: boolean | undefined;
  labelDetails: RDF.NamedNode | undefined;
  legalStatus: Schema.DrugLegalStatus<SiblingNode<ID>> | undefined;
  legalStatusLiteral: string | undefined;
  manufacturer: Schema.Organization<SiblingNode<ID>> | undefined;
  maximumIntake: Schema.MaximumDoseSchedule<SiblingNode<ID>> | undefined;
  mechanismOfAction: string | undefined;
  nonProprietaryName: string | undefined;
  overdosage: string | undefined;
  pregnancyCategory: Schema.DrugPregnancyCategory | undefined;
  pregnancyWarning: string | undefined;
  prescribingInfo: RDF.NamedNode | undefined;
  prescriptionStatus: string | undefined;
  prescriptionStatusTerm: Schema.DrugPrescriptionStatus | undefined;
  proprietaryName: string | undefined;
  relatedDrug: Schema.Drug<SiblingNode<ID>> | undefined;
  rxcui: string | undefined;
  warning: string | undefined;
  warningTerm: RDF.NamedNode | undefined;
}

export function DrugMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DrugClass extends SubstanceMixin(Resource) implements Drug {
    @property.literal()
    activeIngredient: string | undefined;
    @property.literal()
    administrationRoute: string | undefined;
    @property.literal()
    alcoholWarning: string | undefined;
    @property.resource()
    availableStrength: Schema.DrugStrength | undefined;
    @property.literal()
    breastfeedingWarning: string | undefined;
    @property.literal()
    clincalPharmacology: string | undefined;
    @property.literal()
    clinicalPharmacology: string | undefined;
    @property.literal()
    dosageForm: string | undefined;
    @property.resource()
    doseSchedule: Schema.DoseSchedule | undefined;
    @property.resource()
    drugClass: Schema.DrugClass | undefined;
    @property.literal()
    drugUnit: string | undefined;
    @property.literal()
    foodWarning: string | undefined;
    @property.resource()
    includedInHealthInsurancePlan: Schema.HealthInsurancePlan | undefined;
    @property.resource()
    interactingDrug: Schema.Drug | undefined;
    @property.literal({ type: Boolean })
    isAvailableGenerically: boolean | undefined;
    @property.literal({ type: Boolean })
    isProprietary: boolean | undefined;
    @property()
    labelDetails: RDF.NamedNode | undefined;
    @property.resource()
    legalStatus: Schema.DrugLegalStatus | undefined;
    @property.literal({ path: schema.legalStatus })
    legalStatusLiteral: string | undefined;
    @property.resource()
    manufacturer: Schema.Organization | undefined;
    @property.resource()
    maximumIntake: Schema.MaximumDoseSchedule | undefined;
    @property.literal()
    mechanismOfAction: string | undefined;
    @property.literal()
    nonProprietaryName: string | undefined;
    @property.literal()
    overdosage: string | undefined;
    @property()
    pregnancyCategory: Schema.DrugPregnancyCategory | undefined;
    @property.literal()
    pregnancyWarning: string | undefined;
    @property()
    prescribingInfo: RDF.NamedNode | undefined;
    @property.literal()
    prescriptionStatus: string | undefined;
    @property({ path: schema.prescriptionStatus })
    prescriptionStatusTerm: Schema.DrugPrescriptionStatus | undefined;
    @property.literal()
    proprietaryName: string | undefined;
    @property.resource()
    relatedDrug: Schema.Drug | undefined;
    @property.literal()
    rxcui: string | undefined;
    @property.literal()
    warning: string | undefined;
    @property({ path: schema.warning })
    warningTerm: RDF.NamedNode | undefined;
  }
  return DrugClass
}

class DrugImpl extends DrugMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Drug>) {
    super(arg, init)
    this.types.add(schema.Drug)
  }

  static readonly __mixins: Mixin[] = [DrugMixin, SubstanceMixin];
}
DrugMixin.appliesTo = schema.Drug
DrugMixin.Class = DrugImpl
