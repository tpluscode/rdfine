import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type * as Csvw from '.';

export interface ForeignKey extends RdfResource {
  columnReference: string;
  reference: Csvw.TableReference;
}

export default function ForeignKeyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class ForeignKeyClass extends Resource implements ForeignKey {
    @property.literal()
    columnReference!: string;
    @property.resource()
    reference!: Csvw.TableReference;
  }
  return ForeignKeyClass
}

class ForeignKeyImpl extends ForeignKeyMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(csvw.ForeignKey)
  }
}
ForeignKeyMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.ForeignKey)
ForeignKeyMixin.Class = ForeignKeyImpl
