import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Menu<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  hasMenuItem: Schema.MenuItem<D> | undefined;
  hasMenuSection: Schema.MenuSection<D> | undefined;
}

export function MenuMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Menu> & RdfResourceCore> & Base {
  @namespace(schema)
  class MenuClass extends CreativeWorkMixin(Resource) implements Partial<Menu> {
    @property.resource()
    hasMenuItem: Schema.MenuItem | undefined;
    @property.resource()
    hasMenuSection: Schema.MenuSection | undefined;
  }
  return MenuClass
}

class MenuImpl extends MenuMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Menu>) {
    super(arg, init)
    this.types.add(schema.Menu)
  }

  static readonly __mixins: Mixin[] = [MenuMixin, CreativeWorkMixin];
}
MenuMixin.appliesTo = schema.Menu
MenuMixin.Class = MenuImpl

export const fromPointer = createFactory<Menu>([CreativeWorkMixin, MenuMixin], { types: [schema.Menu] });
