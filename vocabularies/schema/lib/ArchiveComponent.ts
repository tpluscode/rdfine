import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface ArchiveComponent<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  holdingArchive: Schema.ArchiveOrganization<SiblingNode<ID>> | undefined;
  itemLocation: Schema.Place<SiblingNode<ID>> | Schema.PostalAddress<SiblingNode<ID>> | undefined;
  itemLocationLiteral: string | undefined;
}

export function ArchiveComponentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ArchiveComponentClass extends CreativeWorkMixin(Resource) implements ArchiveComponent {
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
