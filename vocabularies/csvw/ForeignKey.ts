import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ForeignKey>) {
    super(arg)
    this.types.add(csvw.ForeignKey)
    initializeProperties<ForeignKey>(this, init)
  }
}
ForeignKeyMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.ForeignKey)
ForeignKeyMixin.Class = ForeignKeyImpl
