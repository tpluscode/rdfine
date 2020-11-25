import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PublicationIssueMixin } from './PublicationIssue';

export interface ComicIssue<ID extends ResourceNode = ResourceNode> extends Schema.PublicationIssue<ID>, RdfResource<ID> {
  artist: Schema.Person<SiblingNode<ID>> | undefined;
  colorist: Schema.Person<SiblingNode<ID>> | undefined;
  inker: Schema.Person<SiblingNode<ID>> | undefined;
  letterer: Schema.Person<SiblingNode<ID>> | undefined;
  penciler: Schema.Person<SiblingNode<ID>> | undefined;
  variantCover: string | undefined;
}

export function ComicIssueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ComicIssueClass extends PublicationIssueMixin(Resource) implements ComicIssue {
    @property.resource()
    artist: Schema.Person | undefined;
    @property.resource()
    colorist: Schema.Person | undefined;
    @property.resource()
    inker: Schema.Person | undefined;
    @property.resource()
    letterer: Schema.Person | undefined;
    @property.resource()
    penciler: Schema.Person | undefined;
    @property.literal()
    variantCover: string | undefined;
  }
  return ComicIssueClass
}

class ComicIssueImpl extends ComicIssueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ComicIssue>) {
    super(arg, init)
    this.types.add(schema.ComicIssue)
  }

  static readonly __mixins: Mixin[] = [ComicIssueMixin, PublicationIssueMixin];
}
ComicIssueMixin.appliesTo = schema.ComicIssue
ComicIssueMixin.Class = ComicIssueImpl
