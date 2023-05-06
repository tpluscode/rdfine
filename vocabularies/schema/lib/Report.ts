import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ArticleMixin } from './Article.js';

export interface Report<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Article<D>, RdfResource<D> {
  reportNumber: string | undefined;
}

export function ReportMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Report> & RdfResourceCore> & Base {
  @namespace(schema)
  class ReportClass extends ArticleMixin(Resource) implements Partial<Report> {
    @property.literal()
    reportNumber: string | undefined;
  }
  return ReportClass
}

class ReportImpl extends ReportMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Report>) {
    super(arg, init)
    this.types.add(schema.Report)
  }

  static readonly __mixins: Mixin[] = [ReportMixin, ArticleMixin];
}
ReportMixin.appliesTo = schema.Report
ReportMixin.Class = ReportImpl

export const fromPointer = createFactory<Report>([ArticleMixin, ReportMixin], { types: [schema.Report] });
