import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface JobPosting<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  applicantLocationRequirements: Schema.AdministrativeArea<D> | undefined;
  applicationContact: Schema.ContactPoint<D> | undefined;
  baseSalary: Schema.MonetaryAmount<D> | Schema.PriceSpecification<D> | undefined;
  baseSalaryLiteral: number | undefined;
  benefits: string | undefined;
  datePosted: Date | undefined;
  educationRequirements: string | undefined;
  eligibilityToWorkRequirement: string | undefined;
  employerOverview: string | undefined;
  employmentType: string | undefined;
  employmentUnit: Schema.Organization<D> | undefined;
  estimatedSalary: Schema.MonetaryAmount<D> | Schema.MonetaryAmountDistribution<D> | undefined;
  estimatedSalaryLiteral: number | undefined;
  experienceRequirements: string | undefined;
  hiringOrganization: Schema.Organization<D> | undefined;
  incentiveCompensation: string | undefined;
  incentives: string | undefined;
  industry: string | undefined;
  jobBenefits: string | undefined;
  jobImmediateStart: boolean | undefined;
  jobLocation: Schema.Place<D> | undefined;
  jobLocationType: string | undefined;
  jobStartDate: Date | string | undefined;
  occupationalCategory: Schema.CategoryCode<D> | undefined;
  occupationalCategoryLiteral: string | undefined;
  physicalRequirement: string | undefined;
  physicalRequirementTerm: RDF.NamedNode | undefined;
  qualifications: string | undefined;
  relevantOccupation: Schema.Occupation<D> | undefined;
  responsibilities: string | undefined;
  salaryCurrency: string | undefined;
  securityClearanceRequirement: string | undefined;
  securityClearanceRequirementTerm: RDF.NamedNode | undefined;
  sensoryRequirement: string | undefined;
  sensoryRequirementTerm: RDF.NamedNode | undefined;
  skills: string | undefined;
  specialCommitments: string | undefined;
  title: string | undefined;
  totalJobOpenings: number | undefined;
  validThrough: Date | undefined;
  workHours: string | undefined;
}

export function JobPostingMixin<Base extends Constructor>(Resource: Base): Constructor<JobPosting> & Base {
  @namespace(schema)
  class JobPostingClass extends IntangibleMixin(Resource) implements JobPosting {
    @property.resource()
    applicantLocationRequirements: Schema.AdministrativeArea | undefined;
    @property.resource()
    applicationContact: Schema.ContactPoint | undefined;
    @property.resource()
    baseSalary: Schema.MonetaryAmount | Schema.PriceSpecification | undefined;
    @property.literal({ path: schema.baseSalary, type: Number })
    baseSalaryLiteral: number | undefined;
    @property.literal()
    benefits: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    datePosted: Date | undefined;
    @property.literal()
    educationRequirements: string | undefined;
    @property.literal()
    eligibilityToWorkRequirement: string | undefined;
    @property.literal()
    employerOverview: string | undefined;
    @property.literal()
    employmentType: string | undefined;
    @property.resource()
    employmentUnit: Schema.Organization | undefined;
    @property.resource()
    estimatedSalary: Schema.MonetaryAmount | Schema.MonetaryAmountDistribution | undefined;
    @property.literal({ path: schema.estimatedSalary, type: Number })
    estimatedSalaryLiteral: number | undefined;
    @property.literal()
    experienceRequirements: string | undefined;
    @property.resource()
    hiringOrganization: Schema.Organization | undefined;
    @property.literal()
    incentiveCompensation: string | undefined;
    @property.literal()
    incentives: string | undefined;
    @property.literal()
    industry: string | undefined;
    @property.literal()
    jobBenefits: string | undefined;
    @property.literal({ type: Boolean })
    jobImmediateStart: boolean | undefined;
    @property.resource()
    jobLocation: Schema.Place | undefined;
    @property.literal()
    jobLocationType: string | undefined;
    @property.literal({ datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    jobStartDate: Date | string | undefined;
    @property.resource()
    occupationalCategory: Schema.CategoryCode | undefined;
    @property.literal({ path: schema.occupationalCategory })
    occupationalCategoryLiteral: string | undefined;
    @property.literal()
    physicalRequirement: string | undefined;
    @property({ path: schema.physicalRequirement })
    physicalRequirementTerm: RDF.NamedNode | undefined;
    @property.literal()
    qualifications: string | undefined;
    @property.resource()
    relevantOccupation: Schema.Occupation | undefined;
    @property.literal()
    responsibilities: string | undefined;
    @property.literal()
    salaryCurrency: string | undefined;
    @property.literal()
    securityClearanceRequirement: string | undefined;
    @property({ path: schema.securityClearanceRequirement })
    securityClearanceRequirementTerm: RDF.NamedNode | undefined;
    @property.literal()
    sensoryRequirement: string | undefined;
    @property({ path: schema.sensoryRequirement })
    sensoryRequirementTerm: RDF.NamedNode | undefined;
    @property.literal()
    skills: string | undefined;
    @property.literal()
    specialCommitments: string | undefined;
    @property.literal()
    title: string | undefined;
    @property.literal({ type: Number })
    totalJobOpenings: number | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validThrough: Date | undefined;
    @property.literal()
    workHours: string | undefined;
  }
  return JobPostingClass
}

class JobPostingImpl extends JobPostingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JobPosting>) {
    super(arg, init)
    this.types.add(schema.JobPosting)
  }

  static readonly __mixins: Mixin[] = [JobPostingMixin, IntangibleMixin];
}
JobPostingMixin.appliesTo = schema.JobPosting
JobPostingMixin.Class = JobPostingImpl
