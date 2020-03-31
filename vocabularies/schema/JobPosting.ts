import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface JobPosting extends Schema.Intangible, RdfResource {
  baseSalary: Schema.MonetaryAmount | Schema.PriceSpecification;
  baseSalaryLiteral: number;
  benefits: string;
  datePosted: Date;
  employmentType: string;
  estimatedSalary: Schema.MonetaryAmount | Schema.MonetaryAmountDistribution;
  estimatedSalaryLiteral: number;
  experienceRequirements: string;
  hiringOrganization: Schema.Organization;
  incentiveCompensation: string;
  incentives: string;
  industry: string;
  jobBenefits: string;
  jobLocation: Schema.Place;
  relevantOccupation: Schema.Occupation;
  responsibilities: string;
  salaryCurrency: string;
  skills: string;
  specialCommitments: string;
  title: string;
  validThrough: Date;
  workHours: string;
}

export default function JobPostingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class JobPostingClass extends IntangibleMixin(Resource) implements JobPosting {
    @property.resource()
    baseSalary!: Schema.MonetaryAmount | Schema.PriceSpecification;
    @property.literal({ path: schema.baseSalary, type: Number })
    baseSalaryLiteral!: number;
    @property.literal()
    benefits!: string;
    @property.literal()
    datePosted!: Date;
    @property.literal()
    employmentType!: string;
    @property.resource()
    estimatedSalary!: Schema.MonetaryAmount | Schema.MonetaryAmountDistribution;
    @property.literal({ path: schema.estimatedSalary, type: Number })
    estimatedSalaryLiteral!: number;
    @property.literal()
    experienceRequirements!: string;
    @property.resource()
    hiringOrganization!: Schema.Organization;
    @property.literal()
    incentiveCompensation!: string;
    @property.literal()
    incentives!: string;
    @property.literal()
    industry!: string;
    @property.literal()
    jobBenefits!: string;
    @property.resource()
    jobLocation!: Schema.Place;
    @property.resource()
    relevantOccupation!: Schema.Occupation;
    @property.literal()
    responsibilities!: string;
    @property.literal()
    salaryCurrency!: string;
    @property.literal()
    skills!: string;
    @property.literal()
    specialCommitments!: string;
    @property.literal()
    title!: string;
    @property.literal()
    validThrough!: Date;
    @property.literal()
    workHours!: string;
  }
  return JobPostingClass
}

class JobPostingImpl extends JobPostingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JobPosting>) {
    super(arg, init)
    this.types.add(schema.JobPosting)
  }
}
JobPostingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.JobPosting)
JobPostingMixin.Class = JobPostingImpl
