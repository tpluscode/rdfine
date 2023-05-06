import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HowToMixin } from './HowTo.js';

export interface Recipe<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HowTo<D>, RdfResource<D> {
  cookingMethod: string | undefined;
  cookTime: Schema.Duration<D> | undefined;
  ingredients: string | undefined;
  nutrition: Schema.NutritionInformation<D> | undefined;
  recipeCategory: string | undefined;
  recipeCuisine: string | undefined;
  recipeIngredient: string | undefined;
  recipeInstructions: Schema.CreativeWork<D> | Schema.ItemList<D> | undefined;
  recipeInstructionsLiteral: string | undefined;
  recipeYield: Schema.QuantitativeValue<D> | undefined;
  recipeYieldLiteral: string | undefined;
  suitableForDiet: Schema.RestrictedDiet | undefined;
}

export function RecipeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Recipe> & RdfResourceCore> & Base {
  @namespace(schema)
  class RecipeClass extends HowToMixin(Resource) implements Partial<Recipe> {
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

export const fromPointer = createFactory<Recipe>([HowToMixin, RecipeMixin], { types: [schema.Recipe] });
