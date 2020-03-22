import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.QAPage)
  }
}
QAPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.QAPage)
QAPageMixin.Class = QAPageImpl
