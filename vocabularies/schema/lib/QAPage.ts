import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageMixin } from './WebPage';

export interface QAPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, RdfResource<D> {
}

export function QAPageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<QAPage> & RdfResourceCore> & Base {
  @namespace(schema)
  class QAPageClass extends WebPageMixin(Resource) implements Partial<QAPage> {
  }
  return QAPageClass
}

class QAPageImpl extends QAPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<QAPage>) {
    super(arg, init)
    this.types.add(schema.QAPage)
  }

  static readonly __mixins: Mixin[] = [QAPageMixin, WebPageMixin];
}
QAPageMixin.appliesTo = schema.QAPage
QAPageMixin.Class = QAPageImpl
