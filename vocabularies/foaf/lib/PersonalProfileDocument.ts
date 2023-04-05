import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '../index.js';
import { DocumentMixin } from './Document.js';

export interface PersonalProfileDocument<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.Document<D>, RdfResource<D> {
}

export function PersonalProfileDocumentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PersonalProfileDocument> & RdfResourceCore> & Base {
  @namespace(foaf)
  class PersonalProfileDocumentClass extends DocumentMixin(Resource) implements Partial<PersonalProfileDocument> {
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

export const fromPointer = createFactory<PersonalProfileDocument>([DocumentMixin, PersonalProfileDocumentMixin], { types: [foaf.PersonalProfileDocument] });
