import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Occupation extends Schema.Intangible, RdfResource {
  estimatedSalary: Schema.MonetaryAmount | Schema.MonetaryAmountDistribution;
  estimatedSalaryLiteral: number;
  experienceRequirements: string;
  occupationLocation: Schema.AdministrativeArea;
  responsibilities: string;
  skills: string;
}

export function OccupationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OccupationClass extends IntangibleMixin(Resource) implements Occupation {
    @property.resource()
    estimatedSalary!: Schema.MonetaryAmount | Schema.MonetaryAmountDistribution;
    @property.literal({ path: schema.estimatedSalary, type: Number })
    estimatedSalaryLiteral!: number;
    @property.literal()
    experienceRequirements!: string;
    @property.resource()
    occupationLocation!: Schema.AdministrativeArea;
    @property.literal()
    responsibilities!: string;
    @property.literal()
    skills!: string;
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
