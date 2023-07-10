import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreateActionMixin } from './CreateAction.js';

export interface FilmAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreateAction<D>, rdfine.RdfResource<D> {
}

export function FilmActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FilmAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FilmActionClass extends CreateActionMixin(Resource) {
  }
  return FilmActionClass as any
}

class FilmActionImpl extends FilmActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FilmAction>) {
    super(arg, init)
    this.types.add(schema.FilmAction)
  }

  static readonly __mixins: Mixin[] = [FilmActionMixin, CreateActionMixin];
}
FilmActionMixin.appliesTo = schema.FilmAction
FilmActionMixin.Class = FilmActionImpl

export const fromPointer = createFactory<FilmAction>([CreateActionMixin, FilmActionMixin], { types: [schema.FilmAction] });
