import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface HowTo extends Schema.CreativeWork, RdfResource {
  estimatedCost: Schema.MonetaryAmount;
  estimatedCostLiteral: string;
  performTime: Schema.Duration;
  prepTime: Schema.Duration;
  step: Array<Schema.CreativeWork | Schema.HowToSection | Schema.HowToStep>;
  stepLiteral: Array<string>;
  steps: Array<Schema.CreativeWork | Schema.ItemList>;
  stepsLiteral: Array<string>;
  supply: Schema.HowToSupply;
  supplyLiteral: string;
  tool: Array<Schema.HowToTool>;
  toolLiteral: Array<string>;
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
    @property.resource({ values: 'array' })
    step!: Array<Schema.CreativeWork | Schema.HowToSection | Schema.HowToStep>;
    @property.literal({ path: schema.step, values: 'array' })
    stepLiteral!: Array<string>;
    @property.resource({ values: 'array' })
    steps!: Array<Schema.CreativeWork | Schema.ItemList>;
    @property.literal({ path: schema.steps, values: 'array' })
    stepsLiteral!: Array<string>;
    @property.resource()
    supply!: Schema.HowToSupply;
    @property.literal({ path: schema.supply })
    supplyLiteral!: string;
    @property.resource({ values: 'array' })
    tool!: Array<Schema.HowToTool>;
    @property.literal({ path: schema.tool, values: 'array' })
    toolLiteral!: Array<string>;
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
  constructor(arg: ResourceNode, init?: Initializer<HowTo>) {
    super(arg, init)
    this.types.add(schema.HowTo)
  }
}
HowToMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HowTo)
HowToMixin.Class = HowToImpl
