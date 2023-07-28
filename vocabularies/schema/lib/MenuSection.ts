import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface MenuSection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  hasMenuItem: Schema.MenuItem<D> | undefined;
  hasMenuSection: Schema.MenuSection<D> | undefined;
}

export function MenuSectionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MenuSection & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MenuSectionClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.resource()
    hasMenuItem: Schema.MenuItem | undefined;
    @rdfine.property.resource()
    hasMenuSection: Schema.MenuSection | undefined;
  }
  return MenuSectionClass as any
}

class MenuSectionImpl extends MenuSectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MenuSection>) {
    super(arg, init)
    this.types.add(schema.MenuSection)
  }

  static readonly __mixins: Mixin[] = [MenuSectionMixin, CreativeWorkMixin];
}
MenuSectionMixin.appliesTo = schema.MenuSection
MenuSectionMixin.Class = MenuSectionImpl

export const fromPointer = createFactory<MenuSection>([CreativeWorkMixin, MenuSectionMixin], { types: [schema.MenuSection] });
