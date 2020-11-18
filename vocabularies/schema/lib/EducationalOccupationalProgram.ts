import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface EducationalOccupationalProgram<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  applicationDeadline: Date | undefined;
  applicationStartDate: Date | undefined;
  dayOfWeek: Schema.DayOfWeek | undefined;
  educationalCredentialAwarded: string | undefined;
  educationalCredentialAwardedTerm: RDF.NamedNode | undefined;
  educationalProgramMode: string | undefined;
  educationalProgramModeTerm: RDF.NamedNode | undefined;
  endDate: Date | undefined;
  financialAidEligible: string | undefined;
  maximumEnrollment: number | undefined;
  numberOfCredits: Schema.StructuredValue<SiblingNode<ID>> | undefined;
  numberOfCreditsLiteral: number | undefined;
  occupationalCategory: Schema.CategoryCode<SiblingNode<ID>> | undefined;
  occupationalCategoryLiteral: string | undefined;
  occupationalCredentialAwarded: string | undefined;
  occupationalCredentialAwardedTerm: RDF.NamedNode | undefined;
  offers: Schema.Demand<SiblingNode<ID>> | Schema.Offer<SiblingNode<ID>> | undefined;
  programPrerequisites: Schema.AlignmentObject<SiblingNode<ID>> | Schema.Course<SiblingNode<ID>> | undefined;
  programPrerequisitesLiteral: string | undefined;
  programType: string | undefined;
  provider: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  salaryUponCompletion: Schema.MonetaryAmountDistribution<SiblingNode<ID>> | undefined;
  startDate: Date | undefined;
  termDuration: Schema.Duration<SiblingNode<ID>> | undefined;
  termsPerYear: number | undefined;
  timeOfDay: string | undefined;
  timeToComplete: Schema.Duration<SiblingNode<ID>> | undefined;
  trainingSalary: Schema.MonetaryAmountDistribution<SiblingNode<ID>> | undefined;
  typicalCreditsPerTerm: Schema.StructuredValue<SiblingNode<ID>> | undefined;
  typicalCreditsPerTermLiteral: number | undefined;
}

export function EducationalOccupationalProgramMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EducationalOccupationalProgramClass extends IntangibleMixin(Resource) implements EducationalOccupationalProgram {
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    applicationDeadline: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    applicationStartDate: Date | undefined;
    @property()
    dayOfWeek: Schema.DayOfWeek | undefined;
    @property.literal()
    educationalCredentialAwarded: string | undefined;
    @property({ path: schema.educationalCredentialAwarded })
    educationalCredentialAwardedTerm: RDF.NamedNode | undefined;
    @property.literal()
    educationalProgramMode: string | undefined;
    @property({ path: schema.educationalProgramMode })
    educationalProgramModeTerm: RDF.NamedNode | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    endDate: Date | undefined;
    @property.literal()
    financialAidEligible: string | undefined;
    @property.literal({ type: Number })
    maximumEnrollment: number | undefined;
    @property.resource()
    numberOfCredits: Schema.StructuredValue | undefined;
    @property.literal({ path: schema.numberOfCredits, type: Number })
    numberOfCreditsLiteral: number | undefined;
    @property.resource()
    occupationalCategory: Schema.CategoryCode | undefined;
    @property.literal({ path: schema.occupationalCategory })
    occupationalCategoryLiteral: string | undefined;
    @property.literal()
    occupationalCredentialAwarded: string | undefined;
    @property({ path: schema.occupationalCredentialAwarded })
    occupationalCredentialAwardedTerm: RDF.NamedNode | undefined;
    @property.resource()
    offers: Schema.Demand | Schema.Offer | undefined;
    @property.resource()
    programPrerequisites: Schema.AlignmentObject | Schema.Course | undefined;
    @property.literal({ path: schema.programPrerequisites })
    programPrerequisitesLiteral: string | undefined;
    @property.literal()
    programType: string | undefined;
    @property.resource()
    provider: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    salaryUponCompletion: Schema.MonetaryAmountDistribution | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    startDate: Date | undefined;
    @property.resource()
    termDuration: Schema.Duration | undefined;
    @property.literal({ type: Number })
    termsPerYear: number | undefined;
    @property.literal()
    timeOfDay: string | undefined;
    @property.resource()
    timeToComplete: Schema.Duration | undefined;
    @property.resource()
    trainingSalary: Schema.MonetaryAmountDistribution | undefined;
    @property.resource()
    typicalCreditsPerTerm: Schema.StructuredValue | undefined;
    @property.literal({ path: schema.typicalCreditsPerTerm, type: Number })
    typicalCreditsPerTermLiteral: number | undefined;
  }
  return EducationalOccupationalProgramClass
}

class EducationalOccupationalProgramImpl extends EducationalOccupationalProgramMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EducationalOccupationalProgram>) {
    super(arg, init)
    this.types.add(schema.EducationalOccupationalProgram)
  }

  static readonly __mixins: Mixin[] = [EducationalOccupationalProgramMixin, IntangibleMixin];
}
EducationalOccupationalProgramMixin.appliesTo = schema.EducationalOccupationalProgram
EducationalOccupationalProgramMixin.Class = EducationalOccupationalProgramImpl
