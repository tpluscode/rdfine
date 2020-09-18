import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface HowTo extends Schema.CreativeWork, RdfResource {
  estimatedCost: Schema.MonetaryAmount | undefined;
  estimatedCostLiteral: string | undefined;
  performTime: Schema.Duration | undefined;
  prepTime: Schema.Duration | undefined;
  step: Array<Schema.CreativeWork | Schema.HowToSection | Schema.HowToStep>;
  stepLiteral: Array<string>;
  steps: Array<Schema.CreativeWork | Schema.ItemList>;
  stepsLiteral: Array<string>;
  supply: Schema.HowToSupply | undefined;
  supplyLiteral: string | undefined;
  tool: Array<Schema.HowToTool>;
  toolLiteral: Array<string>;
  totalTime: Schema.Duration | undefined;
  yield: Schema.QuantitativeValue | undefined;
  yieldLiteral: string | undefined;
}

export function HowToMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToClass extends CreativeWorkMixin(Resource) implements HowTo {
    @property.resource()
    estimatedCost: Schema.MonetaryAmount | undefined;
    @property.literal({ path: schema.estimatedCost })
    estimatedCostLiteral: string | undefined;
    @property.resource()
    performTime: Schema.Duration | undefined;
    @property.resource()
    prepTime: Schema.Duration | undefined;
    @property.resource({ values: 'array' })
    step!: Array<Schema.CreativeWork | Schema.HowToSection | Schema.HowToStep>;
    @property.literal({ path: schema.step, values: 'array' })
    stepLiteral!: Array<string>;
    @property.resource({ values: 'array' })
    steps!: Array<Schema.CreativeWork | Schema.ItemList>;
    @property.literal({ path: schema.steps, values: 'array' })
    stepsLiteral!: Array<string>;
    @property.resource()
    supply: Schema.HowToSupply | undefined;
    @property.literal({ path: schema.supply })
    supplyLiteral: string | undefined;
    @property.resource({ values: 'array' })
    tool!: Array<Schema.HowToTool>;
    @property.literal({ path: schema.tool, values: 'array' })
    toolLiteral!: Array<string>;
    @property.resource()
    totalTime: Schema.Duration | undefined;
    @property.resource()
    yield: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.yield })
    yieldLiteral: string | undefined;
  }
  return HowToClass
}

class HowToImpl extends HowToMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HowTo>) {
    super(arg, init)
    this.types.add(schema.HowTo)
  }

  static readonly __mixins: Mixin[] = [HowToMixin, CreativeWorkMixin];
}
HowToMixin.appliesTo = schema.HowTo
HowToMixin.Class = HowToImpl
