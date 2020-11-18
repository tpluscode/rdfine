import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sioc } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '..';
import type * as Foaf from '@rdfine/foaf';
import { ItemMixin } from './Item';
import { DocumentMixin as FoafDocumentMixin } from '@rdfine/foaf/lib/Document';

export interface Post<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sioc.Item<D>, Foaf.Document<D>, RdfResource<D> {
  'content_encoded': RDF.Literal | undefined;
  'created_at': RDF.Literal | undefined;
  description: RDF.Literal | undefined;
  'modified_at': RDF.Literal | undefined;
  reference: RDF.Term | undefined;
  subject: RDF.Literal | undefined;
  title: RDF.Literal | undefined;
}

export function PostMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sioc)
  class PostClass extends FoafDocumentMixin(ItemMixin(Resource)) implements Post {
    @property()
    'content_encoded': RDF.Literal | undefined;
    @property()
    'created_at': RDF.Literal | undefined;
    @property()
    description: RDF.Literal | undefined;
    @property()
    'modified_at': RDF.Literal | undefined;
    @property()
    reference: RDF.Term | undefined;
    @property()
    subject: RDF.Literal | undefined;
    @property()
    title: RDF.Literal | undefined;
  }
  return PostClass
}

class PostImpl extends PostMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Post>) {
    super(arg, init)
    this.types.add(sioc.Post)
  }

  static readonly __mixins: Mixin[] = [PostMixin, ItemMixin, FoafDocumentMixin];
}
PostMixin.appliesTo = sioc.Post
PostMixin.Class = PostImpl
