import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';
import { ListItemMixin } from './ListItem.js';

export interface HowToDirection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.ListItem<D>, rdfine.RdfResource<D> {
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

export function HowToDirectionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HowToDirection> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HowToDirectionClass extends ListItemMixin(CreativeWorkMixin(Resource)) implements Partial<HowToDirection> {
    @rdfine.property.resource()
    afterMedia: Schema.MediaObject | undefined;
    @rdfine.property.resource()
    beforeMedia: Schema.MediaObject | undefined;
    @rdfine.property.resource()
    duringMedia: Schema.MediaObject | undefined;
    @rdfine.property.resource()
    performTime: Schema.Duration | undefined;
    @rdfine.property.resource()
    prepTime: Schema.Duration | undefined;
    @rdfine.property.resource()
    supply: Schema.HowToSupply | undefined;
    @rdfine.property.literal({ path: schema.supply })
    supplyLiteral: string | undefined;
    @rdfine.property.resource({ values: 'array' })
    tool!: Array<Schema.HowToTool>;
    @rdfine.property.literal({ path: schema.tool, values: 'array' })
    toolLiteral!: Array<string>;
    @rdfine.property.resource()
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

export const fromPointer = createFactory<HowToDirection>([ListItemMixin, CreativeWorkMixin, HowToDirectionMixin], { types: [schema.HowToDirection] });
