import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';
import { DocumentMixin } from './Document';

export interface PersonalProfileDocument<ID extends ResourceNode = ResourceNode> extends Foaf.Document<ID>, RdfResource<ID> {
}

export function PersonalProfileDocumentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(foaf)
  class PersonalProfileDocumentClass extends DocumentMixin(Resource) implements PersonalProfileDocument {
  }
  return PersonalProfileDocumentClass
}

class PersonalProfileDocumentImpl extends PersonalProfileDocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PersonalProfileDocument>) {
    super(arg, init)
    this.types.add(foaf.PersonalProfileDocument)
  }

  static readonly __mixins: Mixin[] = [PersonalProfileDocumentMixin, DocumentMixin];
}
PersonalProfileDocumentMixin.appliesTo = foaf.PersonalProfileDocument
PersonalProfileDocumentMixin.Class = PersonalProfileDocumentImpl
