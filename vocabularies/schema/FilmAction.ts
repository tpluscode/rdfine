import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.FilmAction)
  }
}
FilmActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FilmAction)
FilmActionMixin.Class = FilmActionImpl
