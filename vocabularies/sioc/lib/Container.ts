import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sioc } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '..';

export interface Container<ID extends ResourceNode = ResourceNode> extends RdfResource<ID> {
  'container_of': Sioc.Item<SiblingNode<ID>> | undefined;
  'has_host': Sioc.Site<SiblingNode<ID>> | undefined;
  'has_parent': Sioc.Container<SiblingNode<ID>> | undefined;
  'has_subscriber': Sioc.UserAccount<SiblingNode<ID>> | undefined;
  'last_item_date': RDF.Literal | undefined;
  'num_items': number | undefined;
  'parent_of': Sioc.Container<SiblingNode<ID>> | undefined;
}

export function ContainerMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sioc)
  class ContainerClass extends Resource implements Container {
    @property.resource({ implicitTypes: [sioc.Item] })
    'container_of': Sioc.Item | undefined;
    @property.resource({ implicitTypes: [sioc.Site] })
    'has_host': Sioc.Site | undefined;
    @property.resource({ as: [ContainerMixin] })
    'has_parent': Sioc.Container | undefined;
    @property.resource({ implicitTypes: [sioc.UserAccount] })
    'has_subscriber': Sioc.UserAccount | undefined;
    @property()
    'last_item_date': RDF.Literal | undefined;
    @property.literal({ type: Number })
    'num_items': number | undefined;
    @property.resource({ as: [ContainerMixin] })
    'parent_of': Sioc.Container | undefined;
  }
  return ContainerClass
}

class ContainerImpl extends ContainerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Container>) {
    super(arg, init)
    this.types.add(sioc.Container)
  }

  static readonly __mixins: Mixin[] = [ContainerMixin];
}
ContainerMixin.appliesTo = sioc.Container
ContainerMixin.Class = ContainerImpl
