import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface DataFeedItem extends Schema.Intangible, RdfResource {
  dateCreated: Date | undefined;
  dateDeleted: Date | undefined;
  dateModified: Date | undefined;
  item: Schema.Thing | undefined;
}

export function DataFeedItemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DataFeedItemClass extends IntangibleMixin(Resource) implements DataFeedItem {
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    dateCreated: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    dateDeleted: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    dateModified: Date | undefined;
    @property.resource()
    item: Schema.Thing | undefined;
  }
  return DataFeedItemClass
}

class DataFeedItemImpl extends DataFeedItemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DataFeedItem>) {
    super(arg, init)
    this.types.add(schema.DataFeedItem)
  }

  static readonly __mixins: Mixin[] = [DataFeedItemMixin, IntangibleMixin];
}
DataFeedItemMixin.appliesTo = schema.DataFeedItem
DataFeedItemMixin.Class = DataFeedItemImpl
