import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface Library<ID extends ResourceNode = ResourceNode> extends Schema.LocalBusiness<ID>, RdfResource<ID> {
}

export function LibraryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LibraryClass extends LocalBusinessMixin(Resource) implements Library {
  }
  return LibraryClass
}

class LibraryImpl extends LibraryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Library>) {
    super(arg, init)
    this.types.add(schema.Library)
  }

  static readonly __mixins: Mixin[] = [LibraryMixin, LocalBusinessMixin];
}
LibraryMixin.appliesTo = schema.Library
LibraryMixin.Class = LibraryImpl
