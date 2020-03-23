import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';
import ListItemMixin from './ListItem';

export interface HowToDirection extends Schema.CreativeWork, Schema.ListItem, RdfResource {
  afterMedia: Schema.MediaObject;
  afterMediaLiteral: string;
  beforeMedia: Schema.MediaObject;
  beforeMediaLiteral: string;
  duringMedia: Schema.MediaObject;
  duringMediaLiteral: string;
  performTime: Schema.Duration;
  prepTime: Schema.Duration;
  supply: Schema.HowToSupply;
  supplyLiteral: string;
  tool: Schema.HowToTool;
  toolLiteral: string;
  totalTime: Schema.Duration;
}

export default function HowToDirectionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToDirectionClass extends ListItemMixin(CreativeWorkMixin(Resource)) implements HowToDirection {
    @property.resource()
    afterMedia!: Schema.MediaObject;
    @property.literal({ path: schema.afterMedia })
    afterMediaLiteral!: string;
    @property.resource()
    beforeMedia!: Schema.MediaObject;
    @property.literal({ path: schema.beforeMedia })
    beforeMediaLiteral!: string;
    @property.resource()
    duringMedia!: Schema.MediaObject;
    @property.literal({ path: schema.duringMedia })
    duringMediaLiteral!: string;
    @property.resource()
    performTime!: Schema.Duration;
    @property.resource()
    prepTime!: Schema.Duration;
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
  }
  return HowToDirectionClass
}

class HowToDirectionImpl extends HowToDirectionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HowToDirection)
  }
}
HowToDirectionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HowToDirection)
HowToDirectionMixin.Class = HowToDirectionImpl
