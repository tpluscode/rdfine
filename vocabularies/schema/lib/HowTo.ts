import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface HowTo<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  estimatedCost: Schema.MonetaryAmount<D> | undefined;
  estimatedCostLiteral: string | undefined;
  performTime: Schema.Duration<D> | undefined;
  prepTime: Schema.Duration<D> | undefined;
  step: Array<Schema.CreativeWork<D> | Schema.HowToSection<D> | Schema.HowToStep<D>>;
  stepLiteral: Array<string>;
  steps: Array<Schema.CreativeWork<D> | Schema.ItemList<D>>;
  stepsLiteral: Array<string>;
  supply: Schema.HowToSupply<D> | undefined;
  supplyLiteral: string | undefined;
  tool: Array<Schema.HowToTool<D>>;
  toolLiteral: Array<string>;
  totalTime: Schema.Duration<D> | undefined;
  yield: Schema.QuantitativeValue<D> | undefined;
  yieldLiteral: string | undefined;
}

export function HowToMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HowTo> & RdfResourceCore> & Base {
  @namespace(schema)
  class HowToClass extends CreativeWorkMixin(Resource) implements Partial<HowTo> {
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

export const fromPointer = createFactory<HowTo>([CreativeWorkMixin, HowToMixin], { types: [schema.HowTo] });
