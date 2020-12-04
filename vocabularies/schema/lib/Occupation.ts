import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Occupation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  educationRequirements: string | undefined;
  estimatedSalary: Schema.MonetaryAmount<D> | Schema.MonetaryAmountDistribution<D> | undefined;
  estimatedSalaryLiteral: number | undefined;
  experienceRequirements: string | undefined;
  occupationalCategory: Schema.CategoryCode<D> | undefined;
  occupationalCategoryLiteral: string | undefined;
  occupationLocation: Schema.AdministrativeArea<D> | undefined;
  qualifications: string | undefined;
  responsibilities: string | undefined;
  skills: string | undefined;
}

export function OccupationMixin<Base extends Constructor>(Resource: Base): Constructor<Occupation> & Base {
  @namespace(schema)
  class OccupationClass extends IntangibleMixin(Resource) implements Occupation {
    @property.literal()
    educationRequirements: string | undefined;
    @property.resource()
    estimatedSalary: Schema.MonetaryAmount | Schema.MonetaryAmountDistribution | undefined;
    @property.literal({ path: schema.estimatedSalary, type: Number })
    estimatedSalaryLiteral: number | undefined;
    @property.literal()
    experienceRequirements: string | undefined;
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
