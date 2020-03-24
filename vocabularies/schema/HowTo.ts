import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface HowTo extends Schema.CreativeWork, RdfResource {
  estimatedCost: Schema.MonetaryAmount;
  estimatedCostLiteral: string;
  performTime: Schema.Duration;
  prepTime: Schema.Duration;
  step: Schema.CreativeWork | Schema.HowToSection | Schema.HowToStep;
  stepLiteral: string;
  steps: Schema.CreativeWork | Schema.ItemList;
  stepsLiteral: string;
  supply: Schema.HowToSupply;
  supplyLiteral: string;
  tool: Schema.HowToTool;
  toolLiteral: string;
  totalTime: Schema.Duration;
  yield: Schema.QuantitativeValue;
  yieldLiteral: string;
}

export default function HowToMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToClass extends CreativeWorkMixin(Resource) implements HowTo {
    @property.resource()
    estimatedCost!: Schema.MonetaryAmount;
    @property.literal({ path: schema.estimatedCost })
    estimatedCostLiteral!: string;
    @property.resource()
    performTime!: Schema.Duration;
    @property.resource()
    prepTime!: Schema.Duration;
    @property.resource()
    step!: Schema.CreativeWork | Schema.HowToSection | Schema.HowToStep;
    @property.literal({ path: schema.step })
    stepLiteral!: string;
    @property.resource()
    steps!: Schema.CreativeWork | Schema.ItemList;
    @property.literal({ path: schema.steps })
    stepsLiteral!: string;
    @property.resource()
    supply!: Schema.HowToSupply;
    @property.literal({ path: schema.supply })
    supplyLiteral!: string;
    @property.resource()
    tool!: Schema.HowToTool;
    @property.literal({ path: schema.tool })
    toolLiteral!: string;
    @property.resource()
    totalTime!: Schema.Duration;
    @property.resource()
    yield!: Schema.QuantitativeValue;
    @property.literal({ path: schema.yield })
    yieldLiteral!: string;
  }
  return HowToClass
}

class HowToImpl extends HowToMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HowTo>) {
    super(arg)
    this.types.add(schema.HowTo)
    initializeProperties(this, init)
  }
}
HowToMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HowTo)
HowToMixin.Class = HowToImpl
