import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  industry: any;
  industryLiteral: string;
  jobBenefits: string;
  jobLocation: Schema.Place;
  relevantOccupation: Schema.Occupation;
  responsibilities: string;
  salaryCurrency: string;
  skills: any;
  skillsLiteral: string;
  specialCommitments: string;
  title: string;
  validThrough: Date | Date;
  workHours: string;
}

export default function JobPostingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class JobPostingClass extends IntangibleMixin(Resource) implements JobPosting {
    @property.resource()
    baseSalary!: Schema.MonetaryAmount | Schema.PriceSpecification;
    @property.literal({ type: Number, path: schema.baseSalary })
    baseSalaryLiteral!: number;
    @property.literal()
    benefits!: string;
    @property.literal()
    datePosted!: Date;
    @property.literal()
    employmentType!: string;
    @property.resource()
    estimatedSalary!: Schema.MonetaryAmount | Schema.MonetaryAmountDistribution;
    @property.literal({ type: Number, path: schema.estimatedSalary })
    estimatedSalaryLiteral!: number;
    @property.literal()
    experienceRequirements!: string;
    @property.resource()
    hiringOrganization!: Schema.Organization;
    @property.literal()
    incentiveCompensation!: string;
    @property.literal()
    incentives!: string;
    @property.resource()
    industry!: any;
    @property.literal({ path: schema.industry })
    industryLiteral!: string;
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
    @property.resource()
    skills!: any;
    @property.literal({ path: schema.skills })
    skillsLiteral!: string;
    @property.literal()
    specialCommitments!: string;
    @property.literal()
    title!: string;
    @property.literal()
    validThrough!: Date | Date;
    @property.literal()
    workHours!: string;
  }
  return JobPostingClass
}

class JobPostingImpl extends JobPostingMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.JobPosting)
  }
}
JobPostingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.JobPosting)
JobPostingMixin.Class = JobPostingImpl