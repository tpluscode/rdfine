import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';
import { ListItemMixin } from './ListItem';

export interface HowToDirection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.ListItem<D>, RdfResource<D> {
  afterMedia: Schema.MediaObject<D> | undefined;
  beforeMedia: Schema.MediaObject<D> | undefined;
  duringMedia: Schema.MediaObject<D> | undefined;
  performTime: Schema.Duration<D> | undefined;
  prepTime: Schema.Duration<D> | undefined;
  supply: Schema.HowToSupply<D> | undefined;
  supplyLiteral: string | undefined;
  tool: Array<Schema.HowToTool<D>>;
  toolLiteral: Array<string>;
  totalTime: Schema.Duration<D> | undefined;
}

export function HowToDirectionMixin<Base extends Constructor>(Resource: Base): Constructor<HowToDirection> & Base {
  @namespace(schema)
  class HowToDirectionClass extends ListItemMixin(CreativeWorkMixin(Resource)) implements Partial<HowToDirection> {
    @property.resource()
    afterMedia: Schema.MediaObject | undefined;
    @property.resource()
    beforeMedia: Schema.MediaObject | undefined;
    @property.resource()
    duringMedia: Schema.MediaObject | undefined;
    @property.resource()
    performTime: Schema.Duration | undefined;
    @property.resource()
    prepTime: Schema.Duration | undefined;
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
  }
  return HowToDirectionClass
}

class HowToDirectionImpl extends HowToDirectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HowToDirection>) {
    super(arg, init)
    this.types.add(schema.HowToDirection)
  }

  static readonly __mixins: Mixin[] = [HowToDirectionMixin, CreativeWorkMixin, ListItemMixin];
}
HowToDirectionMixin.appliesTo = schema.HowToDirection
HowToDirectionMixin.Class = HowToDirectionImpl
