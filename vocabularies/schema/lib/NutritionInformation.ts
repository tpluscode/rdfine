import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface NutritionInformation<ID extends ResourceNode = ResourceNode> extends Schema.StructuredValue<ID>, RdfResource<ID> {
  calories: Schema.Energy<SiblingNode<ID>> | undefined;
  carbohydrateContent: Schema.Mass<SiblingNode<ID>> | undefined;
  cholesterolContent: Schema.Mass<SiblingNode<ID>> | undefined;
  fatContent: Schema.Mass<SiblingNode<ID>> | undefined;
  fiberContent: Schema.Mass<SiblingNode<ID>> | undefined;
  proteinContent: Schema.Mass<SiblingNode<ID>> | undefined;
  saturatedFatContent: Schema.Mass<SiblingNode<ID>> | undefined;
  servingSize: string | undefined;
  sodiumContent: Schema.Mass<SiblingNode<ID>> | undefined;
  sugarContent: Schema.Mass<SiblingNode<ID>> | undefined;
  transFatContent: Schema.Mass<SiblingNode<ID>> | undefined;
  unsaturatedFatContent: Schema.Mass<SiblingNode<ID>> | undefined;
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
