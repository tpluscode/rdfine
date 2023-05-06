import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PublicationIssueMixin } from './PublicationIssue.js';

export interface ComicIssue<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PublicationIssue<D>, RdfResource<D> {
  artist: Schema.Person<D> | undefined;
  colorist: Schema.Person<D> | undefined;
  inker: Schema.Person<D> | undefined;
  letterer: Schema.Person<D> | undefined;
  penciler: Schema.Person<D> | undefined;
  variantCover: string | undefined;
}

export function ComicIssueMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ComicIssue> & RdfResourceCore> & Base {
  @namespace(schema)
  class ComicIssueClass extends PublicationIssueMixin(Resource) implements Partial<ComicIssue> {
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

export const fromPointer = createFactory<ComicIssue>([PublicationIssueMixin, ComicIssueMixin], { types: [schema.ComicIssue] });
