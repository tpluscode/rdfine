import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface NutritionInformation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, rdfine.RdfResource<D> {
  calories: Schema.Energy<D> | undefined;
  carbohydrateContent: Schema.Mass<D> | undefined;
  cholesterolContent: Schema.Mass<D> | undefined;
  fatContent: Schema.Mass<D> | undefined;
  fiberContent: Schema.Mass<D> | undefined;
  proteinContent: Schema.Mass<D> | undefined;
  saturatedFatContent: Schema.Mass<D> | undefined;
  servingSize: string | undefined;
  sodiumContent: Schema.Mass<D> | undefined;
  sugarContent: Schema.Mass<D> | undefined;
  transFatContent: Schema.Mass<D> | undefined;
  unsaturatedFatContent: Schema.Mass<D> | undefined;
}

export function NutritionInformationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<NutritionInformation> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class NutritionInformationClass extends StructuredValueMixin(Resource) implements Partial<NutritionInformation> {
    @rdfine.property.resource()
    calories: Schema.Energy | undefined;
    @rdfine.property.resource()
    carbohydrateContent: Schema.Mass | undefined;
    @rdfine.property.resource()
    cholesterolContent: Schema.Mass | undefined;
    @rdfine.property.resource()
    fatContent: Schema.Mass | undefined;
    @rdfine.property.resource()
    fiberContent: Schema.Mass | undefined;
    @rdfine.property.resource()
    proteinContent: Schema.Mass | undefined;
    @rdfine.property.resource()
    saturatedFatContent: Schema.Mass | undefined;
    @rdfine.property.literal()
    servingSize: string | undefined;
    @rdfine.property.resource()
    sodiumContent: Schema.Mass | undefined;
    @rdfine.property.resource()
    sugarContent: Schema.Mass | undefined;
    @rdfine.property.resource()
    transFatContent: Schema.Mass | undefined;
    @rdfine.property.resource()
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

export const fromPointer = createFactory<NutritionInformation>([StructuredValueMixin, NutritionInformationMixin], { types: [schema.NutritionInformation] });
