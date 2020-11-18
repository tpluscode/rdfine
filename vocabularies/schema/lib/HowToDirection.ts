import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';
import { ListItemMixin } from './ListItem';

export interface HowToDirection<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, Schema.ListItem<ID>, RdfResource<ID> {
  afterMedia: Schema.MediaObject<SiblingNode<ID>> | undefined;
  beforeMedia: Schema.MediaObject<SiblingNode<ID>> | undefined;
  duringMedia: Schema.MediaObject<SiblingNode<ID>> | undefined;
  performTime: Schema.Duration<SiblingNode<ID>> | undefined;
  prepTime: Schema.Duration<SiblingNode<ID>> | undefined;
  supply: Schema.HowToSupply<SiblingNode<ID>> | undefined;
  supplyLiteral: string | undefined;
  tool: Array<Schema.HowToTool<SiblingNode<ID>>>;
  toolLiteral: Array<string>;
  totalTime: Schema.Duration<SiblingNode<ID>> | undefined;
}

export function HowToDirectionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToDirectionClass extends ListItemMixin(CreativeWorkMixin(Resource)) implements HowToDirection {
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
