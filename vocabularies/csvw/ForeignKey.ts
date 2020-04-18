import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Csvw from '.';
import TableReferenceMixin from './TableReference';

export interface ForeignKey extends RdfResource {
  columnReference: string;
  reference: Csvw.TableReference;
}

export default function ForeignKeyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class ForeignKeyClass extends Resource implements ForeignKey {
    @property.literal()
    columnReference!: string;
    @property.resource({ as: [TableReferenceMixin] })
    reference!: Csvw.TableReference;
  }
  return ForeignKeyClass
}

class ForeignKeyImpl extends ForeignKeyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ForeignKey>) {
    super(arg, init)
    this.types.add(csvw.ForeignKey)
  }
}
ForeignKeyMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.ForeignKey)
ForeignKeyMixin.Class = ForeignKeyImpl
