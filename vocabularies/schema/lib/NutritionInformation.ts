import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface NutritionInformation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
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

export function NutritionInformationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<NutritionInformation> & RdfResourceCore> & Base {
  @namespace(schema)
  class NutritionInformationClass extends StructuredValueMixin(Resource) implements Partial<NutritionInformation> {
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
