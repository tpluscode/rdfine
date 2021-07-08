import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Occupation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
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

export function OccupationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Occupation> & RdfResourceCore> & Base {
  @namespace(schema)
  class OccupationClass extends IntangibleMixin(Resource) implements Partial<Occupation> {
    @property.literal()
    educationRequirements: string | undefined;
    @property.resource()
    estimatedSalary: Schema.MonetaryAmount | Schema.MonetaryAmountDistribution | undefined;
    @property.literal({ path: schema.estimatedSalary, type: Number })
    estimatedSalaryLiteral: number | undefined;
    @property.resource()
    experienceRequirements: Schema.OccupationalExperienceRequirements | undefined;
    @property.literal({ path: schema.experienceRequirements })
    experienceRequirementsLiteral: string | undefined;
    @property.resource()
    occupationalCategory: Schema.CategoryCode | undefined;
    @property.literal({ path: schema.occupationalCategory })
    occupationalCategoryLiteral: string | undefined;
    @property.resource()
    occupationLocation: Schema.AdministrativeArea | undefined;
    @property.literal()
    qualifications: string | undefined;
    @property.literal()
    responsibilities: string | undefined;
    @property.literal()
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
