import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sioc } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '..';

export interface Item<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  about: RDF.Term | undefined;
  'addressed_to': RDF.Term | undefined;
  attachment: RDF.Term | undefined;
  content: RDF.Literal | undefined;
  'delivered_at': RDF.Literal | undefined;
  'earlier_version': Sioc.Item<D> | undefined;
  'embeds_knowledge': RDF.Term | undefined;
  generator: RDF.Term | undefined;
  'has_container': Sioc.Container<D> | undefined;
  'has_discussion': RDF.Term | undefined;
  'has_reply': Sioc.Item<D> | undefined;
  'later_version': Sioc.Item<D> | undefined;
  'latest_version': Sioc.Item<D> | undefined;
  mentions: Sioc.UserAccount<D> | undefined;
  'next_by_date': Sioc.Item<D> | undefined;
  'next_version': Sioc.Item<D> | undefined;
  'previous_by_date': Sioc.Item<D> | undefined;
  'previous_version': Sioc.Item<D> | undefined;
  'read_at': RDF.Literal | undefined;
  'reply_of': Sioc.Item<D> | undefined;
  'respond_to': RDF.Term | undefined;
  'shared_by': Sioc.UserAccount<D> | undefined;
  sibling: Sioc.Item<D> | undefined;
}

export function ItemMixin<Base extends Constructor>(Resource: Base): Constructor<Item> & Base {
  @namespace(sioc)
  class ItemClass extends Resource implements Item {
    @property()
    about: RDF.Term | undefined;
    @property()
    'addressed_to': RDF.Term | undefined;
    @property()
    attachment: RDF.Term | undefined;
    @property()
    content: RDF.Literal | undefined;
    @property()
    'delivered_at': RDF.Literal | undefined;
    @property.resource({ as: [ItemMixin] })
    'earlier_version': Sioc.Item | undefined;
    @property()
    'embeds_knowledge': RDF.Term | undefined;
    @property()
    generator: RDF.Term | undefined;
    @property.resource({ implicitTypes: [sioc.Container] })
    'has_container': Sioc.Container | undefined;
    @property()
    'has_discussion': RDF.Term | undefined;
    @property.resource({ as: [ItemMixin] })
    'has_reply': Sioc.Item | undefined;
    @property.resource({ as: [ItemMixin] })
    'later_version': Sioc.Item | undefined;
    @property.resource({ as: [ItemMixin] })
    'latest_version': Sioc.Item | undefined;
    @property.resource({ implicitTypes: [sioc.UserAccount] })
    mentions: Sioc.UserAccount | undefined;
    @property.resource({ as: [ItemMixin] })
    'next_by_date': Sioc.Item | undefined;
    @property.resource({ as: [ItemMixin] })
    'next_version': Sioc.Item | undefined;
    @property.resource({ as: [ItemMixin] })
    'previous_by_date': Sioc.Item | undefined;
    @property.resource({ as: [ItemMixin] })
    'previous_version': Sioc.Item | undefined;
    @property()
    'read_at': RDF.Literal | undefined;
    @property.resource({ as: [ItemMixin] })
    'reply_of': Sioc.Item | undefined;
    @property()
    'respond_to': RDF.Term | undefined;
    @property.resource({ implicitTypes: [sioc.UserAccount] })
    'shared_by': Sioc.UserAccount | undefined;
    @property.resource({ as: [ItemMixin] })
    sibling: Sioc.Item | undefined;
  }
  return ItemClass
}

class ItemImpl extends ItemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Item>) {
    super(arg, init)
    this.types.add(sioc.Item)
  }

  static readonly __mixins: Mixin[] = [ItemMixin];
}
ItemMixin.appliesTo = sioc.Item
ItemMixin.Class = ItemImpl
