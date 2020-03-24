import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreateActionMixin from './CreateAction';

export interface FilmAction extends Schema.CreateAction, RdfResource {
}

export default function FilmActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FilmActionClass extends CreateActionMixin(Resource) implements FilmAction {
  }
  return FilmActionClass
}

class FilmActionImpl extends FilmActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<FilmAction>) {
    super(arg)
    this.types.add(schema.FilmAction)
    initializeProperties(this, init)
  }
}
FilmActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FilmAction)
FilmActionMixin.Class = FilmActionImpl
