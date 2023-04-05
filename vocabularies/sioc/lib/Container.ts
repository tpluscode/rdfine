import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sioc } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '../index.js';

export interface Container<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  'container_of': Sioc.Item<D> | undefined;
  'has_host': Sioc.Site<D> | undefined;
  'has_parent': Sioc.Container<D> | undefined;
  'has_subscriber': Sioc.UserAccount<D> | undefined;
  'last_item_date': RDF.Literal | undefined;
  'num_items': number | undefined;
  'parent_of': Sioc.Container<D> | undefined;
}

export function ContainerMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Container> & RdfResourceCore> & Base {
  @namespace(sioc)
  class ContainerClass extends Resource implements Partial<Container> {
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

export const fromPointer = createFactory<Container>([ContainerMixin], { types: [sioc.Container] });
