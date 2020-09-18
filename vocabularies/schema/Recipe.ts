import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { HowToMixin } from './HowTo';

export interface Recipe extends Schema.HowTo, RdfResource {
  cookingMethod: string | undefined;
  cookTime: Schema.Duration | undefined;
  ingredients: string | undefined;
  nutrition: Schema.NutritionInformation | undefined;
  recipeCategory: string | undefined;
  recipeCuisine: string | undefined;
  recipeIngredient: string | undefined;
  recipeInstructions: Schema.CreativeWork | Schema.ItemList | undefined;
  recipeInstructionsLiteral: string | undefined;
  recipeYield: Schema.QuantitativeValue | undefined;
  recipeYieldLiteral: string | undefined;
  suitableForDiet: Schema.RestrictedDiet | undefined;
}

export function RecipeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RecipeClass extends HowToMixin(Resource) implements Recipe {
    @property.literal()
    cookingMethod: string | undefined;
    @property.resource()
    cookTime: Schema.Duration | undefined;
    @property.literal()
    ingredients: string | undefined;
    @property.resource()
    nutrition: Schema.NutritionInformation | undefined;
    @property.literal()
    recipeCategory: string | undefined;
    @property.literal()
    recipeCuisine: string | undefined;
    @property.literal()
    recipeIngredient: string | undefined;
    @property.resource()
    recipeInstructions: Schema.CreativeWork | Schema.ItemList | undefined;
    @property.literal({ path: schema.recipeInstructions })
    recipeInstructionsLiteral: string | undefined;
    @property.resource()
    recipeYield: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.recipeYield })
    recipeYieldLiteral: string | undefined;
    @property()
    suitableForDiet: Schema.RestrictedDiet | undefined;
  }
  return RecipeClass
}

class RecipeImpl extends RecipeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Recipe>) {
    super(arg, init)
    this.types.add(schema.Recipe)
  }

  static readonly __mixins: Mixin[] = [RecipeMixin, HowToMixin];
}
RecipeMixin.appliesTo = schema.Recipe
RecipeMixin.Class = RecipeImpl
