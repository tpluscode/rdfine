import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { DigitalDocumentMixin } from './DigitalDocument.js';

export interface SpreadsheetDigitalDocument<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DigitalDocument<D>, RdfResource<D> {
}

export function SpreadsheetDigitalDocumentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SpreadsheetDigitalDocument> & RdfResourceCore> & Base {
  @namespace(schema)
  class SpreadsheetDigitalDocumentClass extends DigitalDocumentMixin(Resource) implements Partial<SpreadsheetDigitalDocument> {
  }
  return SpreadsheetDigitalDocumentClass
}

class SpreadsheetDigitalDocumentImpl extends SpreadsheetDigitalDocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SpreadsheetDigitalDocument>) {
    super(arg, init)
    this.types.add(schema.SpreadsheetDigitalDocument)
  }

  static readonly __mixins: Mixin[] = [SpreadsheetDigitalDocumentMixin, DigitalDocumentMixin];
}
SpreadsheetDigitalDocumentMixin.appliesTo = schema.SpreadsheetDigitalDocument
SpreadsheetDigitalDocumentMixin.Class = SpreadsheetDigitalDocumentImpl

export const fromPointer = createFactory<SpreadsheetDigitalDocument>([DigitalDocumentMixin, SpreadsheetDigitalDocumentMixin], { types: [schema.SpreadsheetDigitalDocument] });
