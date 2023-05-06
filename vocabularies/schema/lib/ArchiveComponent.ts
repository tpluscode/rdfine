import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface ArchiveComponent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  holdingArchive: Schema.ArchiveOrganization<D> | undefined;
  itemLocation: Schema.Place<D> | Schema.PostalAddress<D> | undefined;
  itemLocationLiteral: string | undefined;
}

export function ArchiveComponentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ArchiveComponent> & RdfResourceCore> & Base {
  @namespace(schema)
  class ArchiveComponentClass extends CreativeWorkMixin(Resource) implements Partial<ArchiveComponent> {
    @property.resource()
    holdingArchive: Schema.ArchiveOrganization | undefined;
    @property.resource()
    itemLocation: Schema.Place | Schema.PostalAddress | undefined;
    @property.literal({ path: schema.itemLocation })
    itemLocationLiteral: string | undefined;
  }
  return ArchiveComponentClass
}

class ArchiveComponentImpl extends ArchiveComponentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ArchiveComponent>) {
    super(arg, init)
    this.types.add(schema.ArchiveComponent)
  }

  static readonly __mixins: Mixin[] = [ArchiveComponentMixin, CreativeWorkMixin];
}
ArchiveComponentMixin.appliesTo = schema.ArchiveComponent
ArchiveComponentMixin.Class = ArchiveComponentImpl

export const fromPointer = createFactory<ArchiveComponent>([CreativeWorkMixin, ArchiveComponentMixin], { types: [schema.ArchiveComponent] });
