import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface Occupation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  educationRequirements: string | undefined;
  estimatedSalary: Schema.MonetaryAmount<D> | Schema.MonetaryAmountDistribution<D> | undefined;
  estimatedSalaryLiteral: number | undefined;
  experienceRequirements: Schema.OccupationalExperienceRequirements<D> | undefined;
  experienceRequirementsLiteral: string | undefined;
  occupationalCategory: Schema.CategoryCode<D> | undefined;
  occupationalCategoryLiteral: string | undefined;
  occupationLocation: Schema.AdministrativeArea<D> | undefined;
  qualifications: string | undefined;
  responsibilities: string | undefined;
  skills: string | undefined;
}

export function OccupationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Occupation> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OccupationClass extends IntangibleMixin(Resource) implements Partial<Occupation> {
    @rdfine.property.literal()
    educationRequirements: string | undefined;
    @rdfine.property.resource()
    estimatedSalary: Schema.MonetaryAmount | Schema.MonetaryAmountDistribution | undefined;
    @rdfine.property.literal({ path: schema.estimatedSalary, type: Number })
    estimatedSalaryLiteral: number | undefined;
    @rdfine.property.resource()
    experienceRequirements: Schema.OccupationalExperienceRequirements | undefined;
    @rdfine.property.literal({ path: schema.experienceRequirements })
    experienceRequirementsLiteral: string | undefined;
    @rdfine.property.resource()
    occupationalCategory: Schema.CategoryCode | undefined;
    @rdfine.property.literal({ path: schema.occupationalCategory })
    occupationalCategoryLiteral: string | undefined;
    @rdfine.property.resource()
    occupationLocation: Schema.AdministrativeArea | undefined;
    @rdfine.property.literal()
    qualifications: string | undefined;
    @rdfine.property.literal()
    responsibilities: string | undefined;
    @rdfine.property.literal()
    skills: string | undefined;
  }
  return OccupationClass
}

class OccupationImpl extends OccupationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Occupation>) {
    super(arg, init)
    this.types.add(schema.Occupation)
  }

  static readonly __mixins: Mixin[] = [OccupationMixin, IntangibleMixin];
}
OccupationMixin.appliesTo = schema.Occupation
OccupationMixin.Class = OccupationImpl

export const fromPointer = createFactory<Occupation>([IntangibleMixin, OccupationMixin], { types: [schema.Occupation] });
