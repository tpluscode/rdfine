import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import WebPageMixin from './WebPage';

export interface QAPage extends Schema.WebPage, RdfResource {
}

export default function QAPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class QAPageClass extends WebPageMixin(Resource) implements QAPage {
  }
  return QAPageClass
}

class QAPageImpl extends QAPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<QAPage>) {
    super(arg, init)
    this.types.add(schema.QAPage)
  }
}
QAPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.QAPage)
QAPageMixin.Class = QAPageImpl
