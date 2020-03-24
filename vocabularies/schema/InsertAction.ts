import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AddActionMixin from './AddAction';

export interface InsertAction extends Schema.AddAction, RdfResource {
  toLocation: Schema.Place;
}

export default function InsertActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InsertActionClass extends AddActionMixin(Resource) implements InsertAction {
    @property.resource()
    toLocation!: Schema.Place;
  }
  return InsertActionClass
}

class InsertActionImpl extends InsertActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<InsertAction>) {
    super(arg)
    this.types.add(schema.InsertAction)
    initializeProperties(this, init)
  }
}
InsertActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InsertAction)
InsertActionMixin.Class = InsertActionImpl
