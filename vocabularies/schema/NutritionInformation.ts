import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface NutritionInformation extends Schema.StructuredValue, RdfResource {
  calories: Schema.Energy;
  carbohydrateContent: Schema.Mass;
  cholesterolContent: Schema.Mass;
  fatContent: Schema.Mass;
  fiberContent: Schema.Mass;
  proteinContent: Schema.Mass;
  saturatedFatContent: Schema.Mass;
  servingSize: string;
  sodiumContent: Schema.Mass;
  sugarContent: Schema.Mass;
  transFatContent: Schema.Mass;
  unsaturatedFatContent: Schema.Mass;
}

export function NutritionInformationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NutritionInformationClass extends StructuredValueMixin(Resource) implements NutritionInformation {
    @property.resource()
    calories!: Schema.Energy;
    @property.resource()
    carbohydrateContent!: Schema.Mass;
    @property.resource()
    cholesterolContent!: Schema.Mass;
    @property.resource()
    fatContent!: Schema.Mass;
    @property.resource()
    fiberContent!: Schema.Mass;
    @property.resource()
    proteinContent!: Schema.Mass;
    @property.resource()
    saturatedFatContent!: Schema.Mass;
    @property.literal()
    servingSize!: string;
    @property.resource()
    sodiumContent!: Schema.Mass;
    @property.resource()
    sugarContent!: Schema.Mass;
    @property.resource()
    transFatContent!: Schema.Mass;
    @property.resource()
    unsaturatedFatContent!: Schema.Mass;
  }
  return NutritionInformationClass
}

class NutritionInformationImpl extends NutritionInformationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NutritionInformation>) {
    super(arg, init)
    this.types.add(schema.NutritionInformation)
  }

  static readonly __mixins: Mixin[] = [NutritionInformationMixin, StructuredValueMixin];
}
NutritionInformationMixin.appliesTo = schema.NutritionInformation
NutritionInformationMixin.Class = NutritionInformationImpl
