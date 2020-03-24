import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HowToMixin from './HowTo';

export interface Recipe extends Schema.HowTo, RdfResource {
  cookingMethod: string;
  cookTime: Schema.Duration;
  ingredients: string;
  nutrition: Schema.NutritionInformation;
  recipeCategory: string;
  recipeCuisine: string;
  recipeIngredient: string;
  recipeInstructions: Schema.CreativeWork | Schema.ItemList;
  recipeInstructionsLiteral: string;
  recipeYield: Schema.QuantitativeValue;
  recipeYieldLiteral: string;
  suitableForDiet: Schema.RestrictedDiet;
}

export default function RecipeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RecipeClass extends HowToMixin(Resource) implements Recipe {
    @property.literal()
    cookingMethod!: string;
    @property.resource()
    cookTime!: Schema.Duration;
    @property.literal()
    ingredients!: string;
    @property.resource()
    nutrition!: Schema.NutritionInformation;
    @property.literal()
    recipeCategory!: string;
    @property.literal()
    recipeCuisine!: string;
    @property.literal()
    recipeIngredient!: string;
    @property.resource()
    recipeInstructions!: Schema.CreativeWork | Schema.ItemList;
    @property.literal({ path: schema.recipeInstructions })
    recipeInstructionsLiteral!: string;
    @property.resource()
    recipeYield!: Schema.QuantitativeValue;
    @property.literal({ path: schema.recipeYield })
    recipeYieldLiteral!: string;
    @property()
    suitableForDiet!: Schema.RestrictedDiet;
  }
  return RecipeClass
}

class RecipeImpl extends RecipeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Recipe>) {
    super(arg)
    this.types.add(schema.Recipe)
    initializeProperties(this, init)
  }
}
RecipeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Recipe)
RecipeMixin.Class = RecipeImpl
