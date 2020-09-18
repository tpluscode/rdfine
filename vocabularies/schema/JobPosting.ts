import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface JobPosting extends Schema.Intangible, RdfResource {
  baseSalary: Schema.MonetaryAmount | Schema.PriceSpecification | undefined;
  baseSalaryLiteral: number | undefined;
  benefits: string | undefined;
  datePosted: Date | undefined;
  employmentType: string | undefined;
  estimatedSalary: Schema.MonetaryAmount | Schema.MonetaryAmountDistribution | undefined;
  estimatedSalaryLiteral: number | undefined;
  experienceRequirements: string | undefined;
  hiringOrganization: Schema.Organization | undefined;
  incentiveCompensation: string | undefined;
  incentives: string | undefined;
  industry: string | undefined;
  jobBenefits: string | undefined;
  jobLocation: Schema.Place | undefined;
  relevantOccupation: Schema.Occupation | undefined;
  responsibilities: string | undefined;
  salaryCurrency: string | undefined;
  skills: string | undefined;
  specialCommitments: string | undefined;
  title: string | undefined;
  validThrough: Date | undefined;
  workHours: string | undefined;
}

export function JobPostingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class JobPostingClass extends IntangibleMixin(Resource) implements JobPosting {
    @property.resource()
    baseSalary: Schema.MonetaryAmount | Schema.PriceSpecification | undefined;
    @property.literal({ path: schema.baseSalary, type: Number })
    baseSalaryLiteral: number | undefined;
    @property.literal()
    benefits: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    datePosted: Date | undefined;
    @property.literal()
    employmentType: string | undefined;
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
    @property.resource()
    jobLocation: Schema.Place | undefined;
    @property.resource()
    relevantOccupation: Schema.Occupation | undefined;
    @property.literal()
    responsibilities: string | undefined;
    @property.literal()
    salaryCurrency: string | undefined;
    @property.literal()
    skills: string | undefined;
    @property.literal()
    specialCommitments: string | undefined;
    @property.literal()
    title: string | undefined;
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
