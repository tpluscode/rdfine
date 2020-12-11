import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';
import { DocumentMixin } from './Document';

export interface PersonalProfileDocument<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.Document<D>, RdfResource<D> {
}

export function PersonalProfileDocumentMixin<Base extends Constructor>(Resource: Base): Constructor<PersonalProfileDocument> & Base {
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
