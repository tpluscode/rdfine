import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface NutritionInformation extends Schema.StructuredValue, RdfResource {
  calories: Schema.Energy | undefined;
  carbohydrateContent: Schema.Mass | undefined;
  cholesterolContent: Schema.Mass | undefined;
  fatContent: Schema.Mass | undefined;
  fiberContent: Schema.Mass | undefined;
  proteinContent: Schema.Mass | undefined;
  saturatedFatContent: Schema.Mass | undefined;
  servingSize: string | undefined;
  sodiumContent: Schema.Mass | undefined;
  sugarContent: Schema.Mass | undefined;
  transFatContent: Schema.Mass | undefined;
  unsaturatedFatContent: Schema.Mass | undefined;
}

export function NutritionInformationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NutritionInformationClass extends StructuredValueMixin(Resource) implements NutritionInformation {
    @property.resource()
    calories: Schema.Energy | undefined;
    @property.resource()
    carbohydrateContent: Schema.Mass | undefined;
    @property.resource()
    cholesterolContent: Schema.Mass | undefined;
    @property.resource()
    fatContent: Schema.Mass | undefined;
    @property.resource()
    fiberContent: Schema.Mass | undefined;
    @property.resource()
    proteinContent: Schema.Mass | undefined;
    @property.resource()
    saturatedFatContent: Schema.Mass | undefined;
    @property.literal()
    servingSize: string | undefined;
    @property.resource()
    sodiumContent: Schema.Mass | undefined;
    @property.resource()
    sugarContent: Schema.Mass | undefined;
    @property.resource()
    transFatContent: Schema.Mass | undefined;
    @property.resource()
    unsaturatedFatContent: Schema.Mass | undefined;
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
