import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface MenuSection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  hasMenuItem: Schema.MenuItem<D> | undefined;
  hasMenuSection: Schema.MenuSection<D> | undefined;
}

export function MenuSectionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MenuSection> & RdfResourceCore> & Base {
  @namespace(schema)
  class MenuSectionClass extends CreativeWorkMixin(Resource) implements Partial<MenuSection> {
    @property.resource()
    hasMenuItem: Schema.MenuItem | undefined;
    @property.resource()
    hasMenuSection: Schema.MenuSection | undefined;
  }
  return MenuSectionClass
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
